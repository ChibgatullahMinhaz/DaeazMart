document.documentElement.style.scrollBehavior = "smooth";

let Allproduct = [];

const jsonFiles = ['../Data/fashion.json', '../Data/electronics.json'];

// Containers
const forYoursContainer = document.getElementById('forYours');
const SearchProducts = document.getElementById('searchedProducts');
const SearchQuery = document.getElementById('searchProducts');
const loader = document.getElementById('loader'); 
loader.classList.remove('hidden');

 const  fetchProducts =async()=> {
  try {
    const responses = await Promise.all(jsonFiles.map(file => fetch(file).then(res => res.json())));
    Allproduct = responses.flat();
    loadProducts(Allproduct, forYoursContainer);
    handleProductDetails(forYoursContainer); 
    handleProductDetails(SearchProducts); 
  } catch (error) {
    console.error('Error fetching product data:', error);
  }finally {
    setTimeout(() => {
      loader.classList.add('hidden'); // Hide loader
    }, 1000);
  }
}

// display products
function loadProducts(products, container) {
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p class="text-gray-500 text-center mt-5">Not Found 😊</p>';
    container.classList.add('min-h-screen');
    return;
  }

  container.classList.remove('min-h-screen');
  container.classList.add('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-5', 'gap-4', 'py-8');

  products.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'hover:cursor-pointer', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
    div.dataset.product = JSON.stringify(card);
    div.innerHTML = `
      <figure>
        <img class="max-w-full lg:w-full rounded-lg max-h-[200px] lg:h-[200px] object-cover" src="${card.Image.img1}" alt="${card.title}">
      </figure>
      <div class="px-2 py-4">
        <h2 class="line-clamp-2 w-full cart-title">${card.title}</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-2">
        <h2 class="text-gray-500 w-full line-clamp-1 price">BDT ${card.price}</h2>
        <h2 class="text-gray-500 w-full line-clamp-1 rating">${card.Rating}</h2>
      </div>
    `;
    container.appendChild(div);
  });
}

// Search functionality
SearchQuery.addEventListener('input', (e) => {
  const searchQuery = e.target.value.trim().toLowerCase();

  if (searchQuery === '') {
    SearchProducts.innerHTML = '';
    SearchProducts.classList.remove('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-5', 'gap-4', 'py-8');
    loadProducts(Allproduct, forYoursContainer);
    return;
  }

  const searchedProducts = Allproduct.filter(product => product.title.toLowerCase().includes(searchQuery));
  SearchProducts.classList.add('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-5', 'gap-4', 'py-8');

  loadProducts(searchedProducts, SearchProducts);
  handleProductDetails(SearchProducts); // Reattach event listener after search
});

// Handle product details 
function handleProductDetails(container) {
  container.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard) return;

    const productDetails = JSON.parse(selectedCard.dataset.product);
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
    window.location.href = './view/productDetails.html';
  });
}

fetchProducts();


// handle login modal
const loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('logModal').classList.remove('hidden')
})

const AdminLogin = () => {
  document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    if (email === 'admin@gamil.com' && password === 'admin') {
      window.location.href = './admin/admin.html'
    } else {
      alert('Invalid Admin Email & Password')
      document.getElementById('logModal').classList.add('hidden')

    }
  })
}
AdminLogin();