const findlogo = ()=>{
    document.getElementById('logo').addEventListener('click',()=>{
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