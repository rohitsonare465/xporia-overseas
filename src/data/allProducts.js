// Centralized products data for search functionality
// This file consolidates all products from all categories

// Import product images
import blackPepperImg from '../assets/products/black-pepper.jpg';
import dryRedChilliImg from '../assets/products/dry-red-chilli.jpg';
import chilliPowderImg from '../assets/products/chilli-powder.jpg';
import turmericImg from '../assets/products/turmeric.jpg';
import freshGingerImg from '../assets/products/fresh-ginger.jpg';
import dryGingerImg from '../assets/products/dry-ginger.jpg';
import greenCardamomImg from '../assets/products/green-cardamom.jpg';
import blackCardamomImg from '../assets/products/black-cardamom.jpg';
import cuminSeedsImg from '../assets/products/cumin-seeds.jpg';
import corianderSeedsImg from '../assets/products/coriander-seeds.jpg';
import fenugreekImg from '../assets/products/fenugreek.jpg';
import ajwainImg from '../assets/products/ajwain.jpg';
import cinnamonImg from '../assets/products/cinnamon.jpg';
import fennelImg from '../assets/products/fennel.jpg';
import bayLeafImg from '../assets/products/bay-leaf.jpg';
import cloveImg from '../assets/products/clove.jpg';
import nutmegImg from '../assets/products/nutmeg.jpg';
import starAniseImg from '../assets/products/star-anise.jpg';
import tamarindImg from '../assets/products/tamarind.jpg';
import curryLeafImg from '../assets/products/curry-leaf.jpg';
import blendedMasalasImg from '../assets/products/blended-masalas.jpg';

// Agricultural imports
import riceImg from '../assets/products/rice.jpg';
import pulsesImg from '../assets/products/pulses.jpg';
import milletsImg from '../assets/products/millets.jpg';
import jaggeryImg from '../assets/products/jaggery.jpg';
import chickpeasImg from '../assets/products/chickpeas.jpg';
import psylliumHuskImg from '../assets/products/psyllium-husk.jpg';
import foxnutImg from '../assets/products/foxnut.jpg';
import teaImg from '../assets/products/tea.jpg';
import coffeeImg from '../assets/products/coffee.jpg';

// Ayurved imports
import ashwagandhaImg from '../assets/products/ashwagandha.jpg';
import shatavariImg from '../assets/products/shatavari.jpg';
import amlaImg from '../assets/products/amla.jpg';
import moringaPowderImg from '../assets/products/moringa-powder.jpg';
import giloyImg from '../assets/products/giloy.jpg';
import shilajitImg from '../assets/products/shilajit.jpg';
import brahmiImg from '../assets/products/brahmi.jpg';
import mulethiImg from '../assets/products/mulethi.jpg';
import tulsiImg from '../assets/products/tulsi.jpg';
import neemImg from '../assets/products/neem.jpg';
import triphalaImg from '../assets/products/triphala.jpg';
import hingImg from '../assets/products/hing.jpg';
import bhringrajImg from '../assets/products/bhringraj.jpg';

// Essential Oils imports
import pepperMintOilImg from '../assets/products/peppermint-oil.jpg';
import eucalyptusOilImg from '../assets/products/eucalyptus-oil.jpg';
import lemongrassOilImg from '../assets/products/lemongrass-oil.jpg';
import teaTreeOilImg from '../assets/products/tea-tree-oil.jpg';
import lavenderOilImg from '../assets/products/lavender-oil.jpg';

// Textiles imports
import organicCottonImg from '../assets/products/organic-cotton.jpg';

const allProducts = [
    // Indian Spices
    {
        id: 'spice-001',
        name: 'Black Pepper',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: blackPepperImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Malabar',
            'Purity': '99.5%',
            'Moisture': 'Max 12%',
            'Packaging': '25kg PP bags',
            'Shelf Life': '24 months',
        }
    },
    {
        id: 'spice-002',
        name: 'Dry Red Chilli',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: dryRedChilliImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Teja S17',
            'Moisture': 'Max 10%',
        }
    },
    {
        id: 'spice-003',
        name: 'Chilli Powder',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: chilliPowderImg,
        specifications: {
            'Origin': 'India',
            'Form': 'Fine Powder',
        }
    },
    {
        id: 'spice-004',
        name: 'Turmeric',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: turmericImg,
        specifications: {
            'Origin': 'India',
            'Curcumin Content': '3-5%',
        }
    },
    {
        id: 'spice-005',
        name: 'Ginger (Fresh)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: freshGingerImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Fresh Ginger Root',
        }
    },
    {
        id: 'spice-006',
        name: 'Ginger (Dry)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: dryGingerImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Dried Ginger Slices',
        }
    },
    {
        id: 'spice-007',
        name: 'Cardamom (Green)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: greenCardamomImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Kerala Green',
        }
    },
    {
        id: 'spice-008',
        name: 'Cardamom (Black)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: blackCardamomImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Black Cardamom',
        }
    },
    {
        id: 'spice-009',
        name: 'Cumin (Jeera)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: cuminSeedsImg,
        specifications: {
            'Origin': 'India',
            'Purity': '99%',
        }
    },
    {
        id: 'spice-010',
        name: 'Coriander',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: corianderSeedsImg,
        specifications: {
            'Origin': 'India',
            'Form': 'Whole Seeds/Powder',
        }
    },
    {
        id: 'spice-011',
        name: 'Fenugreek (Methi)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: fenugreekImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-012',
        name: 'Ajwain (Carom Seed)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: ajwainImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-013',
        name: 'Cinnamon (Dalchini)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: cinnamonImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Ceylon/Cassia',
        }
    },
    {
        id: 'spice-014',
        name: 'Fennel (Saunf)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: fennelImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-015',
        name: 'Bay Leaf (Tej Patta)',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: bayLeafImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-016',
        name: 'Clove',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: cloveImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-017',
        name: 'Nutmeg',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: nutmegImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-018',
        name: 'Star Anise',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: starAniseImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-019',
        name: 'Tamarind',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: tamarindImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-020',
        name: 'Curry Leaf',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: curryLeafImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'spice-021',
        name: 'Blended Masalas',
        category: 'Indian Spices',
        categorySlug: 'indian-spices',
        image: blendedMasalasImg,
        specifications: {
            'Origin': 'India',
            'Types': 'Garam Masala, Biryani Masala, etc.',
        }
    },

    // Agricultural Commodities
    {
        id: 'agri-001',
        name: 'Rice',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: riceImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Basmati, Non-Basmati',
            'Grain Length': '6-8mm (Basmati)',
        }
    },
    {
        id: 'agri-002',
        name: 'Basmati Rice',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: riceImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Premium Basmati',
            'Grain Length': '7-8mm',
        }
    },
    {
        id: 'agri-003',
        name: 'Pulses',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: pulsesImg,
        specifications: {
            'Origin': 'India',
            'Varieties': 'Toor Dal, Moong Dal, Urad Dal, Masoor Dal',
        }
    },
    {
        id: 'agri-004',
        name: 'Millets',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: milletsImg,
        specifications: {
            'Origin': 'India',
            'Varieties': 'Pearl, Finger, Foxtail, Proso',
        }
    },
    {
        id: 'agri-005',
        name: 'Jaggery',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: jaggeryImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Sugarcane Jaggery',
        }
    },
    {
        id: 'agri-006',
        name: 'Chickpeas',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: chickpeasImg,
        specifications: {
            'Origin': 'India',
            'Variety': 'Kabuli & Desi',
        }
    },
    {
        id: 'agri-007',
        name: 'Psyllium Husk (Isabgol)',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: psylliumHuskImg,
        specifications: {
            'Origin': 'India',
            'Purity': '95-99%',
        }
    },
    {
        id: 'agri-008',
        name: 'Foxnut (Makhana)',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: foxnutImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Popped Lotus Seeds',
        }
    },
    {
        id: 'agri-009',
        name: 'Tea',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: teaImg,
        specifications: {
            'Origin': 'India',
            'Varieties': 'Assam, Darjeeling, Nilgiri',
        }
    },
    {
        id: 'agri-010',
        name: 'Coffee',
        category: 'Agricultural Commodities',
        categorySlug: 'agricultural-commodities',
        image: coffeeImg,
        specifications: {
            'Origin': 'India',
            'Varieties': 'Arabica, Robusta',
        }
    },

    // Ayurved & Herbal
    {
        id: 'ayur-001',
        name: 'Ashwagandha',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: ashwagandhaImg,
        specifications: {
            'Botanical Name': 'Withania somnifera',
            'Part Used': 'Roots',
        }
    },
    {
        id: 'ayur-002',
        name: 'Shatavari',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: shatavariImg,
        specifications: {
            'Botanical Name': 'Asparagus racemosus',
            'Part Used': 'Roots',
        }
    },
    {
        id: 'ayur-003',
        name: 'Amla (Indian Gooseberry)',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: amlaImg,
        specifications: {
            'Botanical Name': 'Phyllanthus emblica',
            'Vitamin C': 'High Content',
        }
    },
    {
        id: 'ayur-004',
        name: 'Moringa Powder',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: moringaPowderImg,
        specifications: {
            'Botanical Name': 'Moringa oleifera',
            'Protein Content': '25-30%',
        }
    },
    {
        id: 'ayur-005',
        name: 'Giloy',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: giloyImg,
        specifications: {
            'Botanical Name': 'Tinospora cordifolia',
            'Benefits': 'Immunity Booster',
        }
    },
    {
        id: 'ayur-006',
        name: 'Shilajit',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: shilajitImg,
        specifications: {
            'Type': 'Himalayan Mineral Resin',
            'Fulvic Acid': '60-80%',
        }
    },
    {
        id: 'ayur-007',
        name: 'Brahmi',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: brahmiImg,
        specifications: {
            'Botanical Name': 'Bacopa monnieri',
            'Benefits': 'Memory & Cognitive Support',
        }
    },
    {
        id: 'ayur-008',
        name: 'Mulethi (Licorice)',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: mulethiImg,
        specifications: {
            'Botanical Name': 'Glycyrrhiza glabra',
        }
    },
    {
        id: 'ayur-009',
        name: 'Tulsi (Holy Basil)',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: tulsiImg,
        specifications: {
            'Botanical Name': 'Ocimum sanctum',
        }
    },
    {
        id: 'ayur-010',
        name: 'Neem',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: neemImg,
        specifications: {
            'Botanical Name': 'Azadirachta indica',
        }
    },
    {
        id: 'ayur-011',
        name: 'Triphala',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: triphalaImg,
        specifications: {
            'Composition': 'Amla, Haritaki, Bibhitaki',
        }
    },
    {
        id: 'ayur-012',
        name: 'Hing (Asafoetida)',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: hingImg,
        specifications: {
            'Origin': 'India',
        }
    },
    {
        id: 'ayur-013',
        name: 'Bhringraj',
        category: 'Ayurved & Herbal',
        categorySlug: 'ayurved-herbal',
        image: bhringrajImg,
        specifications: {
            'Benefits': 'Hair Health',
        }
    },

    // Essential Oils
    {
        id: 'oil-001',
        name: 'Peppermint Oil',
        category: 'Essential Oils',
        categorySlug: 'essential-oils',
        image: pepperMintOilImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Pure Essential Oil',
        }
    },
    {
        id: 'oil-002',
        name: 'Eucalyptus Oil',
        category: 'Essential Oils',
        categorySlug: 'essential-oils',
        image: eucalyptusOilImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Pure Essential Oil',
        }
    },
    {
        id: 'oil-003',
        name: 'Lemongrass Oil',
        category: 'Essential Oils',
        categorySlug: 'essential-oils',
        image: lemongrassOilImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Pure Essential Oil',
        }
    },
    {
        id: 'oil-004',
        name: 'Tea Tree Oil',
        category: 'Essential Oils',
        categorySlug: 'essential-oils',
        image: teaTreeOilImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Pure Essential Oil',
        }
    },
    {
        id: 'oil-005',
        name: 'Lavender Oil',
        category: 'Essential Oils',
        categorySlug: 'essential-oils',
        image: lavenderOilImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Pure Essential Oil',
        }
    },

    // Indian Textiles
    {
        id: 'textile-001',
        name: 'Organic Cotton',
        category: 'Indian Textiles',
        categorySlug: 'indian-textiles',
        image: organicCottonImg,
        specifications: {
            'Origin': 'India',
            'Type': 'Premium Organic Cotton',
        }
    },
];

export default allProducts;
