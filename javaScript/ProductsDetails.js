const findlogo = () => {
    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
}
findlogo();

const productData = localStorage.getItem('selectedProduct');

// selecting elemnts 
const setTitle = document.getElementById('product-name');
const prodtctPrice = document.getElementById('price');
const productImage = document.getElementById('product-image');

const { title, price, category, Image, Rating } = JSON.parse(productData);
// set date 
setTitle.innerText += title;
prodtctPrice.innerText = `BDT ${price}`;
const convertedPrice = parseFloat(price.replace(/,/g, ''));
productImage.src = '.' + Image.img1;
productImage.alt = title



// suggestion related products 
let relatedAllproduct = [];

const jsonFiles = ['../Data/homekitchen.json', '../Data/babyKids.json', '../Data/fashion.json', '../Data/electronics.json'];
const cartContainer = document.getElementById('relatedProductCart');

const fetchRelatedProduct = async () => {
    try {
        const responses = await Promise.all(jsonFiles.map(file => fetch(file).then(res => res.json())));
        relatedAllproduct = responses.flat();
        
        relatedAllproduct.forEach(card => {
            if (card.category === category) {
                const imgURL = '.' + card.Image.img1;

            console.log(imgURL);
            const div = document.createElement('div');
            div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'hover:cursor-pointer', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
            div.dataset.product = JSON.stringify(card);
            div.innerHTML = `
              <figure>
                <img class="max-w-full lg:w-full rounded-lg h-[200px] object-cover" src="${imgURL}" alt="${card.title}">
              </figure>
              <div class="px-2 py-4">
                <h2 class="line-clamp-2 w-full cart-title">${card.title}</h2>
              </div>
              <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-2">
                <h2 class="text-gray-500 w-full line-clamp-1 price">BDT ${card.price}</h2>
                <h2 class="text-gray-500 w-full line-clamp-1 rating">${card.Rating}</h2>
              </div>
            `;
            cartContainer.appendChild(div);
            }
          });
    } catch (error) {
        console.error('Error fetching product data:', error);
    } finally {
    }
}
fetchRelatedProduct();

cartContainer.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard) return;
  
    const productDetails = JSON.parse(selectedCard.dataset.product);
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
    window.location.href = '../view/productDetails.html';
  });