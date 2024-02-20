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

    it('Visit Apple store and eBay, and get the product details', () => {
        // Visit Apple Store
        cy.visit('https://www.apple.com/my/');
        // ...

        // Visit eBay
        cy.visit('https://www.ebay.com.my/');
        cy.origin('https://www.ebay.com.my/', {}, () => {
            // Use productDetails here
            productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
        }, productDetails);
    });

    it('Print the product details array', () => {
        // Log the product details array
        for (let i = 0; i < productDetails.length; i++) {
            cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
        }
    });
});

