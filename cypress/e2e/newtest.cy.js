describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    let productDetails = [];

    beforeEach(() => {
        // Load the existing productDetails array from localStorage if it exists
        const storedProductDetails = localStorage.getItem('productDetails');
        if (storedProductDetails) {
            productDetails = JSON.parse(storedProductDetails);
        }
    });

    afterEach(() => {
        // Store the productDetails array back into localStorage
        localStorage.setItem('productDetails', JSON.stringify(productDetails));
    });

    it('Visit eBay and gets the product details', () => {
        // Visit eBay and get product details
        // ...
        productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
    });

    it('Visit Apple store and gets the product details', () => {
        // Visit Apple store and get product details
        // ...
        productDetails.push({ website: 'Apple Store', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
    });

    it('Print the product details array', () => {
        // Log the product details array
        for (let i = 0; i < productDetails.length; i++) {
            cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
        }
    });
});
