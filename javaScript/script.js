document.documentElement.style.scrollBehavior = "smooth";
const modalLogin = ()=>{
    const loginbtn = document.getElementById('loginbtn');
loginbtn.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('logModal').classList.remove('hidden')
})
}
const handleLogin = ()=>{
    document.getElementById('login').addEventListener('click', (e)=>{
        e.preventDefault()
        const email = document.querySelector('.email').value;
        const password = document.querySelector('.password').value;
        if(email === 'admin@gamil.com' && password === 'admin'){
            window.location.href = './admin/admin.html'
        }else{
            alert('Invalid Admin Email & Password')
            document.getElementById('logModal').classList.add('hidden')

        }
    })
}
modalLogin();
handleLogin();


const Allproducts = [...Cloths, ...electronicsProducts];

const forYoursContainer = document.getElementById('forYours');
Allproducts.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'p-3', 'overflow-hidden', 'max-w-sm', 'rounded-lg', 'h-auto', 'card');
    div.dataset.product = JSON.stringify(card);
    div.innerHTML = `
       <figure>
             <img class="w-full rounded-lg h-auto object-cover" src="${card.Image}" alt="${card.title}">
          </figure>
          <div class="px-2 py-4">
            <h2 class="line-clamp-2 w-full cart-title">${card.title}</h2>
          </div>
          <div class="flex justify-between items-center px-2">
            <h2 class="text-gray-500 w-full price">BDT ${card.price}</h2>
            <h2 class="text-gray-500 w-full rating">${card.Rating}</h2>
          </div>
      `;
    forYoursContainer.appendChild(div);
});



forYoursContainer.addEventListener('click', (event) => {
    const selectedCard = event.target.closest('.card');
    if (!selectedCard) return; 

    const productDetails = JSON.parse(selectedCard.dataset.product);

    localStorage.setItem('selectedProduct', JSON.stringify(productDetails));

    window.location.href = './view/productDetails.html';
});
