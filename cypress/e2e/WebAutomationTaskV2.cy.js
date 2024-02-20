describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    let productDetails = JSON.parse(localStorage.getItem('productDetails')) || [];

    it('Visit Apple store and gets the product details', () => {
        // visit apple
        cy.visit('https://www.apple.com/my/');

        // Search for iPhone 15 Pro 256GB
        cy.get('#globalnav-menubutton-link-search').click();
        cy.get('.globalnav-searchfield-input').type('iphone 15 pro 256gb new').type('{enter}');
        cy.get('[data-analytics-title="iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)"]').click();

        // Assert the title of the webpage
        cy.title().should('eq','iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)');
        cy.contains(/Buy/i);
        cy.get('.welcome__lockup-cta.show').click();

        // Select the spec of the Iphone 15
        cy.contains(/Buy iPhone 15 Pro/i);
        cy.get('.rc-dimension-selector-group.form-selector-group .rc-dimension-selector-row.form-selector').first().click();
        cy.get('.colornav-items').within(() => {
            cy.get('li').first().click();
        });
        cy.get('.form-selector-title:contains("256")').click();
        cy.contains(/iPhone 15 Pro/i);
    
        // Wait for the price element to be visible
        cy.get('.rc-prices-fullprice[data-autom="full-price"]').should('be.visible');
    
        // Extract and log the price
        cy.get('.rc-prices-fullprice[data-autom="full-price"]').invoke('text').then((price) => {
            const itemPrice = price;
            cy.log('Price: ', itemPrice);
    
            // Get the current URL and log it
            cy.url().then(url => {
                cy.log('Current URL:', url);
                const linkValue = url;
                productDetails.push({website: 'Apple Store', product: 'iPhone 15 Pro 256GB', price: itemPrice, link: linkValue});
            });
    
            // Wait for 2 seconds for the async call to complete
            cy.wait(2000);
    
            // Ensure the productDetails array has been updated
            cy.wrap(productDetails).should('have.length', 1);
    
            // Log the updated productDetails array
            for (let i = 0; i < productDetails.length; i++) {
                cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
            }
        });
    });
    
    it('Visit eBay and gets the product details', () => {
        // Visit eBay
        cy.visit('https://www.ebay.com.my/');
    
        // Search for iPhone 15 Pro 256GB
        cy.get('input.gh-tb[name="_nkw"]').type('iphone 15 pro 256gb new'); // class & attribute
        cy.get('input#gh-btn').click();
    
        cy.get('.srp-results.srp-list.clearfix').within(() => {
            cy.get('li').first().should('be.visible'); 
        });
        
        // Extract and log the price
        cy.get('li#item405343ae00 span.s-item__price span.ITALIC').invoke('text').then((price) => {
            const itemPrice = price;
            cy.log('Price: ', itemPrice);

            // Get the current URL and log it
            cy.url().then(url => {
                cy.log('Current URL:', url);
                const linkValue = url;
                productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: itemPrice, link: linkValue });
            });
        });
    
        cy.wait(2000); // Wait for 2 seconds after updating the array

        // Ensure the productDetails array has been updated
        cy.wrap(productDetails).should('have.length', 1);
        
        // Log the updated productDetails array
        for (let i = 0; i < productDetails.length; i++) {
            cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
        }
    });
    

    it('Print the product details array', () => {
        // Dummy input
        productDetails.push({
            "website": "Apple Store",
            "product": "iPhone 15 Pro 256GB",
            "price": "RM 5,999.00",
            "link": "https://www.apple.com/my/shop/buy-iphone/iphone-15-pro/6.1-inch-display-256gb-natural-titanium"
        });
        
        productDetails.push({
            "website": "eBay",
            "product": "iPhone 15 Pro 256GB",
            "price": "RM 5,117.31",
            "link": "https://www.ebay.com.my/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=iphone+15+pro+256gb+new&_sacat=0"
        });
        
        for (let i = 0; i < productDetails.length; i++) {
            cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
        }
        
        // Convert price to number
        productDetails.forEach(product => {
            product.price = convertPriceToNumeric(product.price);
        });
        
        // Before sort
        cy.log('- Before Sorting -');
        productDetails.forEach(product => {
            cy.log('Product Details: ' + JSON.stringify(product));
        });
        
        // Sort the price
        productDetails.sort((a, b) => a.price - b.price);
        
        // After sort
        cy.log('- After Sorting -');
        productDetails.forEach(product => {
            cy.log('Product Details: ' + JSON.stringify(product));
        });
    });

    function convertPriceToNumeric(price) {
        // Remove the currency symbol, commas, and spaces
        const numericPrice = parseFloat(price.replace(/[^\d.]/g, ''));
        return numericPrice;
    }

});
