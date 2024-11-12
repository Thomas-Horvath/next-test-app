// app/api/products/route.js
export async function GET() {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/150?text=Product+1' },
        { id: 2, name: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/150?text=Product+2' },
        { id: 3, name: 'Product 3', description: 'Description 3', image: 'https://via.placeholder.com/150?text=Product+3' },
        { id: 4, name: 'Apple', description: 'A fresh, crispy apple full of vitamins.', image: 'https://via.placeholder.com/150?text=Apple' },
        { id: 5, name: 'Banana', description: 'Sweet and healthy, perfect for a quick snack.', image: 'https://via.placeholder.com/150?text=Banana' },
        { id: 6, name: 'Carrot', description: 'A crunchy and nutritious root vegetable, great for salads.', image: 'https://via.placeholder.com/150?text=Carrot' },
        { id: 7, name: 'Lettuce', description: 'A fresh leafy vegetable perfect for sandwiches and salads.', image: 'https://via.placeholder.com/150?text=Lettuce' },
        { id: 8, name: 'Tomato', description: 'Juicy and rich in flavor, ideal for making sauces.', image: 'https://via.placeholder.com/150?text=Tomato' },
        { id: 9, name: 'Cheese', description: 'A variety of cheese made from milk, perfect for snacks and dishes.', image: 'https://via.placeholder.com/150?text=Cheese' },
        { id: 10, name: 'Bread', description: 'Freshly baked bread, essential for sandwiches or toast.', image: 'https://via.placeholder.com/150?text=Bread' },
        { id: 11, name: 'Eggs', description: 'High in protein, ideal for breakfast or baking.', image: 'https://via.placeholder.com/150?text=Eggs' },
        { id: 12, name: 'Milk', description: 'A fresh dairy product, rich in calcium.', image: 'https://via.placeholder.com/150?text=Milk' },
        { id: 13, name: 'Chicken', description: 'Tender and juicy chicken, perfect for grilling or frying.', image: 'https://via.placeholder.com/150?text=Chicken' },
        { id: 14, name: 'Fish', description: 'Fresh fish, rich in omega-3 fatty acids.', image: 'https://via.placeholder.com/150?text=Fish' },
        { id: 15, name: 'Yogurt', description: 'A creamy and delicious dairy product, great for snacks or breakfast.', image: 'https://via.placeholder.com/150?text=Yogurt' },
        { id: 16, name: 'Pasta', description: 'Delicious Italian pasta, perfect for various sauces.', image: 'https://via.placeholder.com/150?text=Pasta' },
        { id: 17, name: 'Rice', description: 'A staple food in many cultures, ideal for side dishes or main courses.', image: 'https://via.placeholder.com/150?text=Rice' },
        { id: 18, name: 'Olive Oil', description: 'A healthy oil, perfect for cooking or salad dressings.', image: 'https://via.placeholder.com/150?text=Olive+Oil' },
        { id: 19, name: 'Honey', description: 'A natural sweetener, perfect for tea or baking.', image: 'https://via.placeholder.com/150?text=Honey' },
        { id: 20, name: 'Peanut Butter', description: 'A creamy spread, great for sandwiches or smoothies.', image: 'https://via.placeholder.com/150?text=Peanut+Butter' },
        { id: 21, name: 'Jam', description: 'Sweet and fruity, perfect for spreading on bread or toast.', image: 'https://via.placeholder.com/150?text=Jam' }
      ];
      

    return new Response(JSON.stringify(products), {
        headers: { 'Content-Type': 'application/json' }
    });
}
