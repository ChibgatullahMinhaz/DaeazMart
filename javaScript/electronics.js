// dynamic card lood
let cardContainer = document.getElementById('cardContainer');
cardContainer.innerHTML = ''
electronicsProducts.forEach(card => {
    const div = document.createElement('div');
    div.innerHTML = `
     <figure >
          <img
            src=${card.Image}
            alt=${card.title}
            class="rounded-xl object-cover" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${card.title}</h2>
          <div class="card-actions">
            <button class="btn btn-primary buyNow">Buy Now</button>
          </div>
        </div>
    `
    cardContainer.appendChild(div)
});

// // handle filtaring with category
document.querySelectorAll('.category').forEach(categoryName => {
    categoryName.addEventListener('click', (e) => {
        let category = e.target.innerText;
        cardContainer.innerHTML = '';

        electronicsProducts.forEach(card => {
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
                      <h2 class="card-title">${card.title}</h2>
                      <div class="card-actions">
                        <button class="btn btn-primary buyNow">Buy Now</button>
                      </div>
                    </div>
                `
                cardContainer.appendChild(div)
            }
        });

    })
});


// hande buy btn 
document.querySelectorAll('.buyNow').forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
    })
});
