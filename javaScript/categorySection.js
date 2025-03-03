const categorySection = [
    {
        title: 'Electronics & Gadgets',
        image: 'https://img.freepik.com/premium-photo/high-angle-view-digital-camera-table_1048944-23315823.jpg?semt=ais_hybrid',
    },
    {
        title: 'Fashion & Clothing',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
        title: 'Home & Kitchen',
        image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBraXRjaGVufGVufDB8fDB8fHww',
    },
    {
        title: 'Automotive & Tools',
        image: 'https://img.freepik.com/free-photo/set-tools-tool-kit-isolated_1303-20319.jpg',
    },
    {
        title: 'Beauty & Personal Care',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5nnpjVF8-SX7HQFq676W4_RyZerjW2Qlzw&s',
    },
    {
        title: 'Health & Fitness',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1T6ouV_7VPB1B6Zc1ryn752fJqmjwFQKeg&s',
    },
    {
        title: 'Baby & Kids',
        image: 'https://cdn.cdnparenting.com/articles/2020/06/13145153/1255309270-1024x700.webp',
    },
    {
        title: 'Pet Supplies',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfBHf1pwC_cZONPetX2o5gF5I6DfpXmciCw&s',
    }
    ,
    {
        title: 'Services & Digital Products',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMhUaqCywASXIoTc9h1r8fHmIhIt10vhFEA&s',
    }
    ,
    {
        title: 'Sports & Outdoors',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9QWskmgg_W4CQRpxV9JEib2EJInmiiqcng&s',
    }
    ,
    {
        title: 'Books & Stationery',
        image: 'https://as1.ftcdn.net/v2/jpg/00/34/70/32/1000_F_34703220_TiczZRk73LnvUcvt2J2qj57mKzwKAtBT.jpg',
    }
    ,
    {
        title: 'Groceries & Food',
        image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_521/k%2FPhoto%2FSeries%2F2019-10--power-hour-instant-pot%2FPower-Hour-Instant-Pot_001-rotated',
    }
    ,

];

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
let fileBase = './view/categorypages/'
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