// Product data for XPORIA OVERSEAS
// Real products provided by client

import blackPepperImg from '../assets/products/black-pepper.jpg';
import dryRedChilliImg from '../assets/products/dry-red-chilli.jpg';

const productsData = [
    {
        id: 'prod-001',
        name: 'Black Pepper',
        category: 'Indian Spices',
        image: blackPepperImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Malabar',
            'Purity': '99.5%',
            'Moisture': 'Max 12%',
            'Packaging': '25kg PP bags',
            'Shelf Life': '24 months',
            'Size': '4.75mm+',
            'Grade': 'Premium Quality'
        }
    },
    {
        id: 'prod-002',
        name: 'Dry Red Chilli',
        category: 'Indian Spices',
        image: dryRedChilliImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Teja S17',
            'Color': 'Bright Red',
            'Moisture': 'Max 10%',
            'Packaging': '25kg bags',
            'Shelf Life': '18 months',
            'Heat Level': 'Hot',
            'Form': 'Whole/Powder'
        }
    }
];

export default productsData;
