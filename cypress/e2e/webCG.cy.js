describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    // Load the existing productDetails array from localStorage if it exists
    let productDetails = JSON.parse(localStorage.getItem('productDetails')) || [];

    it('Visit Apple Store and gets the product details', () => {
        // Your existing code for Apple Store visit and data extraction
        // ...

        // Push the Apple product details to the array
        productDetails.push({ website: 'Apple Store', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
    });

    it('Visit eBay and gets the product details', () => {
        // Your existing code for eBay visit and data extraction
        // ...

        // Push the eBay product details to the array
        productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
    });

    it('Print the product details array', () => {
        // Log the product details array
        cy.log('Product Details ebay: ', productDetails[0].website);
        cy.log('Product Details apple: ', productDetails[1].website);

        // Save the updated productDetails array to localStorage
        localStorage.setItem('productDetails', JSON.stringify(productDetails));
        cy.clearLocalStorage()
    });
});
