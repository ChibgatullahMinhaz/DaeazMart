
let cardContainer = document.getElementById('cardContainer');
cardContainer.innerHTML = '';
// handle filtaring with category
document.querySelectorAll('.category').forEach(categoryName => {
  categoryName.addEventListener('click', (e) => {
    let category = e.target.innerText;
    cardContainer.innerHTML = '';

    electronicsProducts.forEach(card => {
      console.log(card.Image);
      if (category === card.category) {
        const div = document.createElement('div');
        div.innerHTML = `
                 <figure >
                      <img
                        src=${card.Image}
                        alt=${card.title}
                        class="rounded-xl object-cover" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title line-clamp-1 w-full">${card.title}</h2>
                    </div>
                `
        cardContainer.appendChild(div)
      }
    });

  })
});



// dynamic card lood
electronicsProducts.forEach(card => {
  const imgURL = '.'+card.Image;
  console.log(imgURL);
  const div = document.createElement('div');
  div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto')
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