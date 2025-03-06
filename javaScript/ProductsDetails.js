// productDetails.html পেইজে ডেটা রিটারিভ করা
window.onload = () => {

    // selecting elemnts 

    const setTitle = document.getElementById('cardTitle');
    const prodtctPrice = document.getElementById('price');
    const productImage = document.getElementById('productImage');

    // get dates 
    const storedTitle = localStorage.getItem('productTitle');
    const storedPrice = localStorage.getItem('productPrice')
    const convertedPrice = parseFloat(storedPrice.split(' ')[1])
    const storedProductIamge = localStorage.getItem('imgPath')



    // set date 
    setTitle.innerText = storedTitle;
    prodtctPrice.innerText = storedPrice
    productImage.src = storedProductIamge;
    productImage.alt = storedTitle;
};
