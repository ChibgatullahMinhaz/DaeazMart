
let cardContainer = document.getElementById('cardContainer');
cardContainer.innerHTML = '';


// dynamic card lood
electronicsProducts.forEach(card => {
  const imgURL = '.'+card.Image;
  const div = document.createElement('div');
  div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
  div.dataset.product = JSON.stringify(card);

    div.innerHTML = `
       <figure >

             <img class="w-full rounded-lg h-auto object-cover" src=${imgURL} alt=${card.title}>
          </figure>
          <div class="px-2 py-4">
            <h2 class=" line-clamp-2 w-full">${card.title}</h2>
          </div>
          <div class="flex justify-between items-center px-2">
            <h2 class="text-gray-500 w-full">BDT ${card.price}</h2>
            <h2 class="text-gray-500 w-full">${card.Rating}</h2>
          </div>
      `

  cardContainer.appendChild(div)
});



// handle filtaring with category
const categoryList = document.querySelectorAll('.category')
categoryList.forEach(selectedCategory => {
  selectedCategory.addEventListener('click', (e) => {
    let category = e.target.innerText;
    cardContainer.innerHTML = '';
    electronicsProducts.forEach(card => {
      if (category === card.category) {
        const imgURL = '.'+card.Image;
        console.log(card.Image);
        console.log(imgURL);
        const div = document.createElement('div');
        div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
        div.dataset.product = JSON.stringify(card);
      
          div.innerHTML = `
             <figure >
      
                   <img class="w-full rounded-lg h-auto object-cover" src=${imgURL} alt=${card.title}>
                </figure>
                <div class="px-2 py-4">
                  <h2 class=" line-clamp-2 w-full">${card.title}</h2>
                </div>
                <div class="flex justify-between items-center px-2">
                  <h2 class="text-gray-500 w-full">BDT ${card.price}</h2>
                  <h2 class="text-gray-500 w-full">${card.Rating}</h2>
                </div>
            `
        cardContainer.appendChild(div)
      }
    });

  })
});
cardContainer.addEventListener('click', (event) => {
  const selectedCard = event.target.closest('.card');
  if (!selectedCard) return; 

  const productDetails = JSON.parse(selectedCard.dataset.product);

  localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

  window.location.href = '../view/productDetails.html';
});
