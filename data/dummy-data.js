import Category from '../data/categories'

import Ad from '../data/ads'

export const CATEGORIES = [
new Category ('c1', 'Mobile Phones', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '2 Products'),
new Category ('c2', 'Laptops', 'https://images.unsplash.com/photo-1580719993950-0d35ce87c26f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '1 Product'),
new Category ('c3', 'Cameras', 'https://images.unsplash.com/photo-1609084580061-a27013046303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', '1 Product'),
new Category ('c4', 'Chargers', 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80', '1 Product'),
new Category ('c5', 'Books', 'https://images.unsplash.com/photo-1496104679561-38d3af73f9b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80', '2 Products'),
new Category ('c6', 'Others', 'https://images.unsplash.com/photo-1604762433261-a046add6fc11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80', '1 Product'),
];

export const ADS =[
new Ad ('a1',
'c1',
'OnePlus 9R',
'https://images-eu.ssl-images-amazon.com/images/I/415z6pkibAL._SX300_SY300_QL70_FMwebp_.jpg',
'Gurgaon, Harayana',
'Giveaway'),
new Ad ('a2',
'c1',
'iPhone 12',
'https://images-eu.ssl-images-amazon.com/images/I/41xssMLI2DL._SY445_SX342_QL70_FMwebp_.jpg',
'Gurgaon, Harayana',
'INR 40000'),
new Ad ('a3',
'c2',
'Inspirion 15',
'https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/15_5510_non-touch/in5510nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=631&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=631,402',
'Gurgaon, Harayana',
'Giveaway'),
new Ad ('a4',
'c3',
'Canon Camera',
'https://i1.adis.ws/i/canon/eos-r6-24-105-front-on-gallery-pdp_ef934a7cb993443f8b823cc67db34012?$prod-gallery-1by1$',
'Gurgaon, Harayana',
'INR 8000'),
new Ad ('a5',
'c4',
'Laptop Charger',
'https://5.imimg.com/data5/UB/JV/MY-15679340/laptop-charger-500x500.jpg',
'New Delhi',
'Giveaway'),
new Ad ('a6',
'c5',
'Harry Potter',
'https://images-eu.ssl-images-amazon.com/images/I/51ifu1aebKL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
'Ahemedabad, Gujarat',
'Giveaway'),
new Ad ('a7',
'c5',
'Maths Textbook',
'https://images-eu.ssl-images-amazon.com/images/I/41z9kqDr3vL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
'Bangalore, Karnataka',
'INR 300'),
new Ad ('a8',
'c6',
'Sports Shoes',
'https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg',
'New Delhi',
'INR 300'),
];