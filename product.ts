// This is a typeScript file demonstrating a simple product interface
// and a function to calculate the total price of all products
// To run this file:
// First: install typeScript globally if you haven't: npm install -g typescript
// Second: compile this file to JavaScript by: tsc product.ts
// Third: run the JavaScript file that you compiled by: node product.js


// Task 4
interface Product { // define the interface
    name: string;
    price: number;
}
// Function to calculate the total price for all products
function totalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Task 5
// Function that check if the email is valid or not
function validEmail(email: string):
    boolean {
    const emailExm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailExm.test(email)
}