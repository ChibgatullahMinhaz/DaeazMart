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


if (!productData) {
    console.log('Data Not Found');
} else {
    const { title, price, category, Image, Rating } = JSON.parse(productData);
    // set date 
    setTitle.innerText += title;
    prodtctPrice.innerText = `BDT ${price}`;
    const convertedPrice = parseFloat(price.replace(/,/g, ''));
    productImage.src = '.' + Image.img1;
    productImage.alt = title

}

// suggestion related products 
let relatedAllproduct = [];

const jsonFiles = ['../Data/homekitchen.json','../Data/babyKids.json','../Data/fashion.json', '../Data/electronics.json'];

const  fetchRelatedProduct =async()=> {
    try {
      const responses = await Promise.all(jsonFiles.map(file => fetch(file).then(res => res.json())));
      relatedAllproduct = responses.flat();
console.log(relatedAllproduct);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }finally {
    }
  }
  fetchRelatedProduct()