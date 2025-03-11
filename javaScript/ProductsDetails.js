
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

