// Search Funtinality 
const Allproducts = [...Cloths, ...electronicsProducts];

const SearchQuery = document.getElementById('searchProducts');

SearchQuery.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    const SearchQuary = e.target.value;
    if (SearchQuary === '') {
      return alert('Please Enter The Searching Products')
    }
    const searcedProducts = Allproducts.filter(product => product.title.toLowerCase().includes(SearchQuary.toLowerCase()));

    if (searcedProducts.length === 0) {
      cardContainer.innerHTML = '';
      const p = document.createElement('p');
      p.classList.add('text-gray-500', 'text-center', 'mt-5');
      p.innerText = 'Not Found😊😊'
      cardContainer.appendChild(p);
    } else {
      cardContainer.innerHTML = '';
      searcedProducts.forEach(card => {
        const imgURL = '.' + card.Image.img1;
        const div = document.createElement('div');
        div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card', 'bg-white');
        div.dataset.product = JSON.stringify(card);
        div.innerHTML = `
                   <figure>
                         <img class="w-full rounded-lg h-auto object-cover" src="${imgURL}" alt="${card.title}">
                      </figure>
                      <div class="px-2 py-4">
                        <h2 class="line-clamp-2 w-full cart-title">${card.title}</h2>
                      </div>
                      <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-2">
                        <h2 class="text-gray-500 w-full price">BDT ${card.price}</h2>
                        <h2 class="text-gray-500 w-full rating">${card.Rating}</h2>
                      </div>
                  `;
        cardContainer.appendChild(div)
      });
    }
  }
});

