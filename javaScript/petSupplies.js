const url = '../Data/fashion.json';
fetchProductss(url, displayProducts)
fetchProductss(url, CategoryFilter)
fetchProductss(url, search)


// Handle product details click
cardContainer.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard) return;

    const productDetails = JSON.parse(selectedCard.dataset.product);
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
    window.location.href = '../view/productDetails.html';
});