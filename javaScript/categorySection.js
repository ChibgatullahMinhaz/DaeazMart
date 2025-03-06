for (const category of categorySection) {
    let categoryContainer = document.getElementById('categorySection');
    const id = category.title.toLowerCase().split(' ')[0];
    const div = document.createElement('div');
    div.id = id;
    div.classList.add('p-1', 'border', 'border-[#FFD460]', 'bg-white', 'ctgbox')
    const img = document.createElement('img');
    img.classList.add('object-cover', 'rounded-sm')
    img.src = category.image;
    const p = document.createElement('p')
    p.innerText = category.title;
    div.appendChild(img);
    div.appendChild(p)
    categoryContainer.appendChild(div);
}
let fileBase = './view/'
const allcategoryCards = document.querySelectorAll('.ctgbox');
allcategoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const selectedCard = e.target.closest('.ctgbox');
        allcategoryCards.forEach(c => c.classList.remove('border-purple-600'));
        selectedCard.classList.add('border-purple-600');
        const fileName = e.target.closest('.ctgbox').id
        window.location.href = `${fileBase}${fileName}.html`
    })
});