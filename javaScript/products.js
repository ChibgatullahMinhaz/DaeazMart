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
// electronicsProducts
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
    {
        title: 'Sports Earbuds GH-7Z – White Color',
        price: "1,700",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/photo_2024-12-01_16-45-44.jpg',
            img2: './assets/Earbuds/photo_2024-12-01_16-45-51.jpg',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'YW15 Active Noise Cancelling Earbuds – Black',
        price: "1,000",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/photo_2024-12-01_16-45-26.webp',
            img2: './assets/Earbuds/photo_2024-12-01_16-45-26.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'HOCO EQ2 Plus Wireless Bluetooth Earbuds – Black',
        price: "1,500",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/HOCO-EQ2-Plus.png',
            img2: './assets/Earbuds/HOCO-EQ2-Plus1.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Hoco EW54 Crystal True Wireless Earbuds – Blue',
        price: "1,300",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/Hoco-EW54-Crystal-True-Wireless-Earbuds-7.png',
            img2: './assets/Earbuds/hoco_w35_max_anc_silver.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Acefast W1 ANC ENC TWS Earbuds',
        price: "1,800",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/acefast-w1-anc-true-wireless-earbuds-black.png',
            img2: './assets/Earbuds/acefast-w1-anc-true-wireless-earbuds.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'SoundPEATS T3 Pro ANC Earbuds – Black',
        price: "1,900",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/kryinternational.png',
            img2: './assets/Earbuds/1_3e964110-cef5-496b-ac15-d4dda5246c2e_900x.png',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Anker Soundcore R50i True Wireless Earbuds – Black Color',
        price: "2,000",
        category: 'Earbuds',
        Image: {
            img1: './assets/Earbuds/Anker-Soundcore-R50i-True-Wireless-Earbuds-Black-Color.jpeg',
            img2: './assets/Earbuds/Anker-Soundcore-R50i-True-Wireless-Earbuds-Black-Color.jpeg',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Symphony SYMTAB 80 4GB 32GB 8" Tablet - Grey',
        price: "9,999",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/symtab-80.webp',
            img2: './assets/Tablet/symtab-80.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Teclast P30 4GB 64GB 10.1" Tablet Wi-Fi Only',
        price: "12,999",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/Teclast-P30.webp',
            img2: './assets/Tablet/Teclast P30.webp',
        },
        Rating: '⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Teclast M50 Mini 6GB RAM 128GB Storage 8.7" Tablet',
        price: "18,200",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/m50.webp',
            img2: './assets/Tablet/m50.webp',
        },
        Rating: '⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'HONOR Pad X8a 4GB RAM 64GB Storage 11" Tablet',
        price: "17,200",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/pad.webp',
            img2: './assets/Tablet/pad.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Walton Walpad 8G 4GB RAM 64GB Storage 8" Tablet',
        price: "15,200",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/walpad-8g.webp',
            img2: './assets/Tablet/walpad-8g.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'TECLAST T50 Plus 6GB 256GB Storage 11 inch Android Tablet',
        price: "22,000",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/t50Plus.webp',
            img2: './assets/Tablet/t50Plus.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Awei Y999 50W Bluetooth Soundbar Home Theater Speaker',
        price: "5,000",
        category: 'Bluetooth Speakers',
        Image: {
            img1: './assets/BluetoothSpeakers/image-upscaled.webp',
            img2: './assets/BluetoothSpeakers/image-upscaled.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'HOCO HC5 Sports Wireless Speaker',
        price: "4,000",
        category: 'Bluetooth Speakers',
        Image: {
            img1: './assets/BluetoothSpeakers/HOCO-HC5-Sports-Wireless-Speaker.webp',
            img2: './assets/BluetoothSpeakers/HOCO-HC5-Sports-Wireless-Speaker.webp',
        },
        stock: 9,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'JBL Flip 6 Portable Waterproof Speaker Black',
        price: "11,000",
        category: 'Bluetooth Speakers',
        Image: {
            img1: './assets/BluetoothSpeakers/jbl-flip-6-black-500x500-1.png',
            img2: './assets/BluetoothSpeakers/jbl-flip-6-portable-bluetooth-speaker-01.png',
        },
        stock: 9,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Awei Y788 RGB Outdoor Portable Bluetooth Speaker',
        price: "3,000",
        category: 'Bluetooth Speakers',
        Image: {
            img1: './assets/BluetoothSpeakers/awei_y788_portable_outdoor_bluetooth.webp',
            img2: './assets/BluetoothSpeakers/awei_y788_portable_outdoor_bluetooth.webp',
        },
        stock: 19,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'JBL Xtreme 3 Portable Bluetooth Speaker – Black',
        price: "29,000",
        category: 'Bluetooth Speakers',
        Image: {
            img1: './assets/BluetoothSpeakers/jbl_xtreme_3_portable_bluetooth_speaker_in_bdshop_2.png',
            img2: './assets/BluetoothSpeakers/jbl_xtreme_3_portable_bluetooth_speaker_in_bdshop_3.png',
        },
        stock: 19,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Ausek AT Q60TR 4K Action Camera Combo Pack',
        price: "8,000",
        category: 'Camera',
        Image: {
            img1: './assets/Camera/Ausek-AT-Q60TR-4K-Action-Camera.webp',
            img2: './assets/Camera/Ausek-AT-Q60TR-4K-Action-Camera-1.webp',
        },
        stock: 19,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
    {
        title: 'Bullet Dome PTZ 5 Lens Three Screens Security CCTV Network Outdoor Camera',
        price: "8,000",
        category: 'Camera',
        Image: {
            img2: './assets/Camera/Bullet-Dome-PTZ-5-Lens-Three-Screens-Security-CCTV-Network-Outdoor-Camera.jpg',
            img1: './assets/Camera/Bullet-Dome-PTZ-5-Lens-Three-Screens-Security-CCTV-Network-Outdoor-Camera-4.jpg',
        },
        stock: 19,
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },

];

const Cloths = [
    {
        title: 'TECLAST T50 Plus 6GB 256GB Storage 11 inch Android Tablet',
        price: "22,000",
        category: 'Tablet',
        Image: {
            img1: './assets/Tablet/t50Plus.webp',
            img2: './assets/Tablet/t50Plus.webp',
        },
        Rating: '⭐⭐⭐⭐⭐',
        buyNow: 'https://www.daraz.com.bd/'
    },
];


