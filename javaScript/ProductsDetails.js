window.onload = () => {

    const productData = localStorage.getItem('selectedProduct');
console.log(productData);
    // selecting elemnts 
    const setTitle = document.getElementById('cardTitle');
    const prodtctPrice = document.getElementById('price');
    const productImage = document.getElementById('productImage');

    // get dates 


// 2️⃣ JSON String → Object এ Convert করা
const {title, price, category,Image,Rating} = JSON.parse(productData);


    // set date 
    setTitle.innerText = title;
    prodtctPrice.innerText = `BDT ${price}`;
    productImage.src= '.'+Image
    productImage.alt = title
};
