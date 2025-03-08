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

// store prodtcts 
const electronicsProducts = [
    {
        title: 'Awei AT7 Bluetooth Wireless Headphone- Black Color',
        price: "1,400",
        category: 'Headphones',
        Image: {
            img1: './assets/Headphones/Awei-AT7-Bluetooth-Headphone-1.webp',
            img2: './assets/Headphones/joyroom-neckband.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Joyroom JR-D8 Wireless Neckband Earphone',
        price: "1,300",
        category: 'Headphones',
        Image: {
            img1: './assets/Headphones/jr-d8_wireless_neckband.png',
            img2: './assets/Headphones/joyroom-neckband.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'SIM Supported Kids Smart Watch (Smart2023 C005) – Blue Color',
        price: "1,650",
        category: 'Smartwatches',
        Image: {
            img1: './assets/watch/Color-.jpg',
            img2: './assets/watch/Smartberry-C005.jpg',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'CMF by Nothing Watch Pro 2 – Bluetooth Calling Smart Watch',
        price: "7,500",
        category: 'Smartwatches',
        Image: {
            img1: './assets/watch/Cmf-By-Watch-3.png',
            img2: './assets/watch/Smartberry-C005.jpg',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    }
    ,
    {
        title: 'Kieslect KR2 Bluetooth Calling Smart Watch',
        price: "6,000",
        category: 'Smartwatches',
        Image: {
            img1: './assets/watch/kieslect_kr2_bluetooth_calling_smart_watch.png',
            img2: './assets/watch/kieslect_kr2_bluetooth_calling_smart_watch_2.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    }
    ,
    {
        title: 'Hoco W35 Air Wireless Headphone- Blue Color',
        price: "1,500",
        category: 'Headphones',
        Image: {
            img1: './assets/Headphones/Hoco-W35-Air-Wireless-Headphone-Blue-Color.webp',
            img2: './assets/Headphones/Hoco-W35-Air-Wireless-Headphone.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    }
    ,
    {
        title: 'SIM Supported Kids Smart Watch (Smart2023 C005) – Pink Color',
        price: "1,200",
        category: 'Smartwatches',
        Image: {
            img1: './assets/watch/SIM-Supported-Kids-Smart-Watch-Smart2023-C005-Pink-Color.jpg',
            img2: './assets/watch/kieslect_kr2_bluetooth_calling_smart_watch_2.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    }
    ,
    {
        title: 'SIM Supported Kids Smart Watch (Smartberry C005) – Black Color',
        price: "1,200",
        category: 'Smartwatches',
        Image: {
            img1: './assets/watch/SIM-Supported-Kids-Smartwatch-Black.jpg',
            img2: './assets/watch/kieslect_kr2_bluetooth_calling_smart_watch_2.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    }
    ,
    {
        title: 'Hoco W35 Max ANC Wireless Headphone',
        price: "1,700",
        category: 'Headphones',
        Image: {
            img1: './assets/Headphones/hoco_w35_max_anc.png',
            img2: './assets/Headphones/hoco_w35_max_anc_silver.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Hoco W35 Air Wireless Headphone- Green Color',
        price: "1,400",
        category: 'Headphones',
        Image: {
            img1: './assets/Headphones/Hoco-W35-Air-Wireless-Headphone-Green-Color.webp',
            img2: './assets/Headphones/hoco_w35_max_anc_silver.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },

];

const Cloths = [
    {
        title: 't-shirt',
        Image: './assets/bannerImages/headphone1.jpg',

    },
    {
        title: 't-shirt',
        Image: './assets/bannerImages/headphone1.jpg',

    },
];


