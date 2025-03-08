document.documentElement.style.scrollBehavior = "smooth";
const Allproducts = [...Cloths, ...electronicsProducts];
const forYoursContainer = document.getElementById('forYours');
const SearchProducts = document.getElementById('searchedProducts');
forYoursContainer.innerHTML = '';
// search 
const SearchQuery = document.getElementById('searchProducts');
SearchQuery.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    const SearchQuary = e.target.value
    if (SearchQuary === '') {
      return alert('Please Enter The Searching Products')
    }
    const searcedProducts = Allproducts.filter(product => product.title.toLowerCase().includes(SearchQuary.toLowerCase()));
    if (searcedProducts.length === 0) {
      SearchProducts.innerHTML = '';
      const p = document.createElement('p')
      p.classList.add('text-gray-500', 'text-center', 'mt-5');
      p.innerText = 'Not Found😊';
      SearchProducts.classList.add('min-h-screen')
      SearchProducts.appendChild(p)
    } else {
      SearchProducts.innerHTML = '';
      SearchProducts.classList.remove('min-h-screen')
      SearchProducts.classList.add('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-5', 'gap-4', 'py-8')
      searcedProducts.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
        div.dataset.product = JSON.stringify(card);
        div.innerHTML = `
                   <figure>
                         <img class="max-w-full lg:w-full rounded-lg max-h-[200px] lg:h-[200px] object-cover" src="${card.Image.img1}" alt="${card.title}">
                      </figure>
                      <div class="px-2 py-4">
                        <h2 class="line-clamp-2 w-full cart-title">${card.title}</h2>
                      </div>
                      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-2">
                        <h2 class="text-gray-500  price">BDT ${card.price}</h2>
                        <h2 class="text-gray-500  rating">${card.Rating}</h2>
                      </div>
                  `;
                  SearchProducts.appendChild(div)
      });
    }
  }
});

// dynamic card lood for all products
Allproducts.forEach(card => {
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
            <h2 class="text-gray-500 w-full price">BDT ${card.price}</h2>
            <h2 class="text-gray-500 w-full rating">${card.Rating}</h2>
          </div>
      `;
  forYoursContainer.appendChild(div);
});



// handle product Details
forYoursContainer.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  if (!selectedCard) return;

  const productDetails = JSON.parse(selectedCard.dataset.product);

  localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

  window.location.href = './view/productDetails.html';
});
