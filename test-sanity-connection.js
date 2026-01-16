const { createClient } = require('@sanity/client');

// Create Sanity client with your project configuration
const client = createClient({
    projectId: 'w9p20dtj',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
});

console.log('🔍 Testing Sanity Connection...\n');
console.log('Configuration:');
console.log('  Project ID:', 'w9p20dtj');
console.log('  Dataset:', 'production');
console.log('  API Version:', '2024-01-01');
console.log('\n---\n');

// Test 1: Fetch categories
async function testConnection() {
    try {
        console.log('📦 Fetching categories...');
        const categories = await client.fetch('*[_type == "category"]{_id, name, active}');
        console.log(`✅ SUCCESS! Found ${categories.length} categories:\n`);
        categories.forEach((cat, index) => {
            console.log(`  ${index + 1}. ${cat.name} (Active: ${cat.active !== false ? 'Yes' : 'No'})`);
        });

        console.log('\n---\n');

        // Test 2: Fetch products
        console.log('🛍️  Fetching products...');
        const products = await client.fetch('*[_type == "product"]{_id, name, active}');
        console.log(`✅ SUCCESS! Found ${products.length} products:\n`);
        products.slice(0, 5).forEach((prod, index) => {
            console.log(`  ${index + 1}. ${prod.name} (Active: ${prod.active !== false ? 'Yes' : 'No'})`);
        });

        if (products.length > 5) {
            console.log(`  ... and ${products.length - 5} more products`);
        }

        console.log('\n---\n');
        console.log('🎉 All tests passed! Sanity is properly connected to your project.\n');

    } catch (error) {
        console.error('❌ CONNECTION FAILED!');
        console.error('Error:', error.message);
        console.error('\nPossible issues:');
        console.error('  1. Check if the project ID is correct');
        console.error('  2. Verify the dataset name');
        console.error('  3. Ensure you have internet connection');
        console.error('  4. Check if Sanity Studio has been deployed');
        process.exit(1);
    }
}

testConnection();
