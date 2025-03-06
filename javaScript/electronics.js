
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
  div.classList.add('shadow-lg', 'h-[200px]', 'p-3', 'overflow-hidden')
  div.innerHTML = `
     <figure >
            <img
              src=${imgURL}
              alt=${card.title}
              class="rounded-xl object-cover  mx-auto" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title line-clamp-1 w-full">${card.title}</h2>
          </div>
    `
  // 
  cardContainer.appendChild(div)
});