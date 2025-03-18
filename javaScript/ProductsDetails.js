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
const Productmodel = document.getElementById('showModel');

const { title, price, category, Image, Rating, model } = JSON.parse(productData);
// set date 
setTitle.innerText += title;
prodtctPrice.innerText = `BDT ${price}`;
Productmodel.innerText = `
${model || "No Model"}
`
const convertedPrice = parseFloat(price.replace(/,/g, ''));
console.log(convertedPrice);
productImage.src = '.' + Image.img1;
productImage.alt = title

// handle quantity buttons
document.querySelectorAll('.quantity-button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const Quentity = parseFloat(document.getElementById('quantity').innerText) || 0;
    const amount = e.target.innerText === "+" ? 1 : -1;
    document.getElementById('quantity').innerText = Math.max(0, Quentity + amount);
  })
});



// add to cart 

let cartModal = [];
let chekoutCount = 0;
let totalPrice = 0
document.getElementById('add-to-cart').addEventListener('click', (e) => {
  const Quentity = parseFloat(document.getElementById('quantity').innerText);
  if (Quentity === 0) {
    return alert("please selec a Quentity...");
  }
  
  // let addtocartQuentity = ;
  let convertedQuantity = parseFloat(document.getElementById('cartQuantity').innerText)
  convertedQuantity += Quentity
  document.getElementById('cartQuantity').innerText = convertedQuantity;


  const imgName = '.' + Image.img1;
  const productPrice = convertedPrice;  //from localStorage
  const Price = Quentity * productPrice;
  totalPrice += Price;
  localStorage.setItem('totalPrice', totalPrice)

 
 const tota= document.getElementById('TotalPrice').innerText = `TK ${totalPrice}`;
 console.log(tota);
 console.log(totalPrice);

  cartModal.push(
    {
      image: imgName,
      Price: productPrice,
      Quentity: Quentity,
    }
  )
})


document.getElementById('continue-shopping').addEventListener('click', (e) => {
  document.getElementById('cart-modal').classList.add('hidden')
})
document.getElementById('ShoppingCart').addEventListener('click', () => {
  const Modal = document.getElementById('cart-modal');
  Modal.classList.remove('hidden');
  cartModal.forEach(cart => {
    const modalContainer = document.getElementById('cart-items');
    const row = document.createElement('tr');
    row.classList.add("mt-4")
    row.innerHTML = `
                    <td>
                     <div class="flex items-center justify-between gap-x-2">
                      <img class="h=12 w-12 object-cover" src=${cart.image} alt="">
                      <span>${title}</span>
                     </div>
                    </td>
                    <td>No</td>
                    <td>No</td>
                    <td>${cart.Quentity}</td>
                    <td>${cart.Price}</td>
        `
    modalContainer.appendChild(row)
  });
});



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
// handle satore product details
cartContainer.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  if (!selectedCard) return;

  const productDetails = JSON.parse(selectedCard.dataset.product);
  localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
  window.location.href = '../view/productDetails.html';
});