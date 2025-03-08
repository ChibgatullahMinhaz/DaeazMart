window.onload = () => {

    const productData = localStorage.getItem('selectedProduct');

    // selecting elemnts 
    const setTitle = document.getElementById('cardTitle');
    const prodtctPrice = document.getElementById('price');
    const productImage = document.getElementById('productImage');


    const { title, price, category, Image, Rating } = JSON.parse(productData);


    // set date 
    setTitle.innerText = title;
    prodtctPrice.innerText = `BDT ${price}`;
   const convertedPrice = parseFloat(price.replace(',', ''));
   console.log(convertedPrice);
    productImage.src = '.' + Image.img1;
    productImage.alt = title
};
