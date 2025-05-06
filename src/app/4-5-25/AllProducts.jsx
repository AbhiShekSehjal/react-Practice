import React from 'react'
import FilterableProductTable from './FilterableProductTable';

function AllProducts() {

    const PRODUCTS = [
        {
            id: 1,
            name: "Wireless Mouse",
            description: "Ergonomic wireless mouse with USB receiver",
            price: 25.99,
            inStock: true,
            category: "Electronics",
            rating: 4.3,
            imageUrl: "https://zebronics.com/cdn/shop/products/zeb-dashplus-pic2.jpg?v=1618045825"
        },
        {
            id: 2,
            name: "Bluetooth Headphones",
            description: "Noise-cancelling over-ear headphones",
            price: 79.99,
            inStock: false,
            category: "Electronics",
            rating: 4.7,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KGXyUwKMGX05hetNYoUC-Za0AihXoVUUEg&s"
        },
        {
            id: 3,
            name: "Running Shoes",
            description: "Comfortable and durable running shoes",
            price: 59.99,
            inStock: true,
            category: "Footwear",
            rating: 4.5,
            imageUrl: "https://bersache.com/cdn/shop/files/WhatsAppImage2024-05-08at13.24.46.jpg?v=1741007464&width=1080"
        },
        {
            id: 4,
            name: "Smart Watch",
            description: "Fitness tracker with heart rate monitor",
            price: 99.99,
            inStock: true,
            category: "Wearables",
            rating: 4.2,
            imageUrl: "https://m.media-amazon.com/images/I/61SagNg1+aL.jpg"
        },
        {
            id: 5,
            name: "Backpack",
            description: "Stylish waterproof backpack with laptop compartment",
            price: 45.00,
            inStock: true,
            category: "Accessories",
            rating: 4.1,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeQjmPZH4qE_qyc2OIoGntKlgGzlhWqydLA&s"
        },
        {
            id: 6,
            name: "Mechanical Keyboard",
            description: "RGB backlit mechanical keyboard",
            price: 69.99,
            inStock: true,
            category: "Electronics",
            rating: 4.6,
            imageUrl: "https://zebronics.com/cdn/shop/products/ZEB-NITRO-1-pic1.jpg?v=1623839779"
        },
        {
            id: 7,
            name: "Office Chair",
            description: "Ergonomic chair with lumbar support",
            price: 150.00,
            inStock: true,
            category: "Furniture",
            rating: 4.4,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqf58jCYT7d7h93WY2A4O22_Ux-08A2zdsw&s"
        },
        {
            id: 8,
            name: "Laptop Stand",
            description: "Adjustable aluminum laptop stand",
            price: 29.99,
            inStock: true,
            category: "Accessories",
            rating: 4.3,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv2woqJvyyOuFln_zvXT2HzPLeQQM2A6F0A&s"
        },
        {
            id: 9,
            name: "Electric Toothbrush",
            description: "Rechargeable electric toothbrush with 3 modes",
            price: 39.99,
            inStock: false,
            category: "Personal Care",
            rating: 4.0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKz_UALpfDxfK6EciKfuV0Hp_OiNfhmO3P8w&s"
        },
        {
            id: 10,
            name: "Water Bottle",
            description: "Stainless steel insulated bottle",
            price: 19.99,
            inStock: true,
            category: "Accessories",
            rating: 4.6,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SA0q9yBmcPLcTst3dXw1WpgZBwIw_5WcCQ&s"
        },
        {
            id: 11,
            name: "Yoga Mat",
            description: "Eco-friendly non-slip yoga mat",
            price: 35.99,
            inStock: true,
            category: "Fitness",
            rating: 4.4,
            imageUrl: "https://wiselife.in/cdn/shop/files/1_c32957ca-8b92-4e21-b32d-395717efbd7d.jpg?v=1708681826"
        },
        {
            id: 12,
            name: "LED Desk Lamp",
            description: "Dimmable LED lamp with USB charging port",
            price: 32.99,
            inStock: false,
            category: "Lighting",
            rating: 4.2,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9rb1NRMo6XOh2gVOKrJw61FRreOVdB0f-A&s"
        },
        {
            id: 13,
            name: "Noise Machine",
            description: "Sleep sound machine with timer and night light",
            price: 27.50,
            inStock: true,
            category: "Personal Care",
            rating: 4.1,
            imageUrl: "https://m.media-amazon.com/images/I/61WCbp5ZykL.jpg"
        },
        {
            id: 14,
            name: "Portable Charger",
            description: "10,000mAh power bank with fast charging",
            price: 22.99,
            inStock: true,
            category: "Electronics",
            rating: 4.5,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUao75c5AFUDoCT7jhbWg3Ke9Cm9W7seVyw&s"
        },
        {
            id: 15,
            name: "Fitness Tracker",
            description: "Waterproof tracker with step and calorie monitor",
            price: 49.99,
            inStock: true,
            category: "Wearables",
            rating: 4.3,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1F2CL80l2wJhmFXXgvX7q2Mp_Ag_Oqx5yJA&s"
        },
        {
            id: 16,
            name: "Sunglasses",
            description: "Polarized sunglasses with UV protection",
            price: 24.99,
            inStock: true,
            category: "Accessories",
            rating: 4.7,
            imageUrl: "https://m.media-amazon.com/images/I/31k6ZX42BFL._AC_UY1100_.jpg"
        },
        {
            id: 17,
            name: "Coffee Maker",
            description: "Automatic drip coffee machine with timer",
            price: 89.00,
            inStock: true,
            category: "Appliances",
            rating: 4.4,
            imageUrl: "https://m.media-amazon.com/images/I/818gyfjYmZL.jpg"
        },
        {
            id: 18,
            name: "Smart Plug",
            description: "WiFi-enabled plug with voice control",
            price: 14.99,
            inStock: false,
            category: "Electronics",
            rating: 4.0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolpyq57gzGnbcgxf1rm00smY8mbHMRePViA&s"
        },
        {
            id: 19,
            name: "Gaming Chair",
            description: "Reclining gaming chair with footrest",
            price: 199.99,
            inStock: true,
            category: "Furniture",
            rating: 4.6,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfXahyhOKsrdYEdOi2qtlPgO56lx3mB0yhw&s"
        },
        {
            id: 20,
            name: "Mini Projector",
            description: "Portable projector for movies and games",
            price: 129.00,
            inStock: true,
            category: "Electronics",
            rating: 4.3,
            imageUrl: "https://avshack.in/cdn/shop/products/M1mini-Plus_RC_F01_pc-01.jpg?v=1661339116&width=1214"
        },
        {
            id: 21,
            name: "Wireless Charger",
            description: "Qi-certified fast wireless charging pad",
            price: 18.75,
            inStock: true,
            category: "Electronics",
            rating: 4.2,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuOuy5Qfjh0gKEE2leh54ns1Or5ewn3D_nA&s"
        },
        {
            id: 22,
            name: "Kitchen Knife Set",
            description: "8-piece stainless steel knife set",
            price: 49.99,
            inStock: true,
            category: "Kitchenware",
            rating: 4.5,
            imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/knife-tool/4/q/v/1-stainless-steel-kitchen-knife-set-professional-chef-knife-pack-original-imah2f5abpmdgfzp.jpeg?q=90&crop=false"
        },
        {
            id: 23,
            name: "Air Fryer",
            description: "4L capacity air fryer with temperature control",
            price: 89.99,
            inStock: false,
            category: "Appliances",
            rating: 4.4,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98T_-uIogr0qKDgHsrNNgZnXYAAbSz56MOQ&s"
        },
        {
            id: 24,
            name: "Graphic Tablet",
            description: "Drawing tablet with pressure sensitivity",
            price: 69.00,
            inStock: true,
            category: "Electronics",
            rating: 4.3,
            imageUrl: "https://m.media-amazon.com/images/I/51mwM5EMJDL.jpg"
        },
        {
            id: 25,
            name: "Camera Tripod",
            description: "Lightweight aluminum tripod with phone mount",
            price: 27.99,
            inStock: true,
            category: "Photography",
            rating: 4.1,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAn0SYPvI0j8dOkmWmrawFKPIdskvic0bvA&s"
        },
        {
            id: 26,
            name: "Portable Speaker",
            description: "Bluetooth speaker with deep bass",
            price: 39.99,
            inStock: true,
            category: "Electronics",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4Kt8SC-j40fsiDOvfZKKnRFez_yuvgwRJQ&s"
        }
    ]


    return (
        <div>
            <FilterableProductTable products={PRODUCTS} />
        </div>
    )
}

export default AllProducts
