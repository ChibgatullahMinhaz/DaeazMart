// Containers
const forYoursContainer = document.getElementById('forYours');
const SearchProducts = document.getElementById('searchedProducts');
const SearchQuery = document.getElementById('searchProducts');
// fetch data and display
let cardContainer = document.getElementById('cardContainer');
const selectedCategoryText = document.getElementById('selectedCategory');
const categoryList = document.querySelectorAll('.category');
const searchInput = document.getElementById('searchProducts');


const findlogo = () => {
  document.getElementById('logo').addEventListener('click', () => {
    window.location.href = '../index.html';
  });
}
findlogo();


// handle login modal
const handleLoginModal = () => {
  const loginbtn = document.getElementById('loginbtn');
  loginbtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('logModal').classList.remove('hidden')
  })
}
handleLoginModal();
const AdminLogin = () => {
  document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    if (email === 'admin@gamil.com' && password === 'admin') {
      window.location.href = '../admin/admin.html';
      document.getElementById('logModal').classList.add('hidden');
    } else {
      alert('Invalid Admin Email & Password')
      document.getElementById('logModal').classList.add('hidden')

    }
  })
}
// handle login modal
AdminLogin();
// looder funtinlaity 
const showLoader = () => {
  document.getElementById('loader').classList.remove('hidden')
}
const hideLoader = () => {
  document.getElementById('loader').classList.add('hidden')
}
// fetch Data and Displayed 

const fetchProductss = async (url, callbackFn) => {
  try {
    showLoader();
    const response = await fetch(url);
    const Data = await response.json();
    callbackFn(Data)
  } catch (error) {
    console.error("Error loading products:", error);
  } finally {
    hideLoader();
  }
}

// related product load 

const displayProducts = (products) => {
  cardContainer.innerHTML = '';

  if (products.length === 0) {
    cardContainer.innerHTML = `<p class="text-gray-500 text-center mt-5">No products found.</p>`;
    return;
  }

  products.forEach(card => {
    const imgURL = '.' + card.Image.img1;
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'hover:cursor-pointer', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card', 'bg-white');
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
const CategoryFilter = (products) => {
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
const search = (products) => {
  searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase().trim();

    const filteredProducts = products.filter(card => card.title.toLowerCase().includes(searchQuery));
    displayProducts(filteredProducts);
  });
}

// Handle product details click
const handleDetails =()=>{
  cardContainer.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard) return;
  
    const productDetails = JSON.parse(selectedCard.dataset.product);
    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
    window.location.href = '../view/productDetails.html';
  });
}

