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
        }
    })
}
modalLogin();
handleLogin();