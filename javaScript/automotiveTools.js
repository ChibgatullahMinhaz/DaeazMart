let cardContainer = document.getElementById('cardContainer');
const selectedCategoryText = document.getElementById('selectedCategory');
const categoryList = document.querySelectorAll('.category');
const searchInput = document.getElementById('searchProducts'); 

const loadProducts = async () => {
  try {
    const response = await fetch('../Data/fashion.json');
    const fashionAndClothes = await response.json();
    displayProducts(fashionAndClothes);
    CategoryFilter(fashionAndClothes);
    search(fashionAndClothes); 
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

const displayProducts = (products) => {
  cardContainer.innerHTML = '';

  if (products.length === 0) {
    cardContainer.innerHTML = `<p class="text-gray-500 text-center mt-5">No products found.</p>`;
    return;
  }

  products.forEach(card => {
    const imgURL = '.' + card.Image.img1;
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
    div.dataset.product = JSON.stringify(card);

    div.innerHTML = `
      <figure>
        <img class="max-w-full lg:w-full rounded-lg h-[220px] object-cover" src=${imgURL} alt="${card.title}">
      </figure>
      <div class="px-2 py-4">
        <h2 class="line-clamp-2 w-full">${card.title}</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-2">
        <h2 class="text-gray-500 line-clamp-2 w-full">BDT ${card.price}</h2>
        <h2 class="text-gray-500 line-clamp-2 w-full">${card.Rating}</h2>
      </div>
    `;
    cardContainer.appendChild(div);
  });
}

// Category filter functionality
function CategoryFilter(products) {
  categoryList.forEach(selectedCategory => {
    selectedCategory.addEventListener('click', (e) => {
      let category = e.target.innerText;
      categoryList.forEach(c => c.classList.remove('text-[#ff6f61]'));
      e.target.classList.add('text-[#ff6f61]');
      selectedCategoryText.innerText = `Category: ${category}`;
      const filteredProducts = products.filter(card => card.category === category);
      displayProducts(filteredProducts);
    });
  });
}

// Search functionality
function search(products) {
  searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase().trim();
    const filteredProducts = products.filter(card => card.title.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
  });
}

// Handle product details click
cardContainer.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  if (!selectedCard) return;

  const productDetails = JSON.parse(selectedCard.dataset.product);
  localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
  window.location.href = '../view/productDetails.html';
});

loadProducts();
