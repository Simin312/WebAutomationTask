describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    // Load the existing productDetails array from localStorage if it exists
    //let productDetails;

    //beforeEach(() => {
    //    // Load the existing productDetails array from localStorage if it exists
    //    const storedProductDetails = localStorage.getItem('productDetails');
    //    productDetails = storedProductDetails ? JSON.parse(storedProductDetails) : [];
    //});

    //afterEach(() => {
    //    // Restore the productDetails array in localStorage after each test
    //    localStorage.setItem('productDetails', JSON.stringify(productDetails));
    //});

    // Load the existing productDetails array from localStorage if it exists
    let productDetails = JSON.parse(localStorage.getItem('productDetails')) || [];

    it('Visit Apple store and gets the product details', () => {
        
        cy.visit('https://www.apple.com/my/');
        cy.get('#globalnav-menubutton-link-search').click();

        cy.get('.globalnav-searchfield-input').type('iphone 15 pro 256gb new').type('{enter}');
        cy.get('[data-analytics-title="iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)"]').click();

        cy.title().should('eq','iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)');

        cy.contains(/Buy/i);
        cy.get('.welcome__lockup-cta.show').click();

        cy.contains(/Buy iPhone 15 Pro/i);

        cy.get('.rc-dimension-selector-group.form-selector-group .rc-dimension-selector-row.form-selector').first().click();

        cy.get('.colornav-items').within(() => {
            cy.get('li').first().click();
        });

        cy.get('.form-selector-title:contains("256")').click();

        cy.contains(/iPhone 15 Pro/i);
        cy.wait(2000);
        cy.get('.rc-prices-fullprice[data-autom="full-price"]').first().invoke('text').then((price) => {
            const itemPrice = price;
            cy.log('Price: ', itemPrice);

            cy.url().then(url => {
                cy.log('Current URL:', url);
                const linkValue = url;
                //productDetails.push({website: 'Apple Store', product: 'iPhone 15 Pro 256GB', price: itemPrice, link: linkValue});
                //localStorage.setItem('productDetails', JSON.stringify(productDetails));
                //cy.log('Product Details: ', productDetails);
            });
        });

        productDetails.push({ website: 'apple', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
        cy.wait(2000); // Wait for 2 seconds
        cy.wrap(productDetails).should('have.length', 1); // Ensure async call is completed
        
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
    
        cy.get('li#item405343ae00 span.s-item__price span.ITALIC').invoke('text').then((price) => {
            const itemPrice = price;
            cy.log('Price: ', itemPrice);

            cy.url().then(url => {
                cy.log('Current URL:', url);
                const linkValue = url;
                //productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: itemPrice, link: linkValue });
                //localStorage.setItem('productDetails', JSON.stringify(productDetails));
                //cy.log('Product Details eBay: ', productDetails);
            });
        });

        productDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
        //cy.wait(2000); // Wait for 2 seconds
        //cy.wrap(productDetails).should('have.length', 2); // Ensure async call is completed
    });

    it('Print the product details array', () => {
        // Log the product details array
        for (let i = 0; i < productDetails.length; i++) {
            cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
        }
    });
});
