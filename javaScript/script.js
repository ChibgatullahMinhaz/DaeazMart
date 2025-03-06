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

// show home page cards

const newproducts = [...Cloths, ...electronicsProducts]
console.log(newproducts);
newproducts.forEach(card => {
    const forYoursContainer = document.getElementById('forYours');
    const div = document.createElement('div');
    div.classList.add('shadow-lg', 'h-[200px]', 'p-3', 'overflow-hidden')
    div.innerHTML = `
       <figure >
            <img
              src=${card.Image}
              alt=${card.title}
              class="rounded-xl object-cover  mx-auto" />
          </figure>
          <div class="card-body items-center">
            <h2 class="card-title line-clamp-1 w-full">${card.title}</h2>
          </div>
      `
      forYoursContainer.appendChild(div)
});