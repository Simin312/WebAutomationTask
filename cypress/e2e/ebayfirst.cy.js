describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    let productDetails = [];

    it('Visit Apple store and eBay, and get the product details', () => {
        // Visit Apple Store
        cy.visit('https://www.apple.com/my/');
        cy.get('#globalnav-menubutton-link-search').click();

        cy.get('.globalnav-searchfield-input').type('iphone 15 pro 256gb new').type('{enter}');
        cy.get('[data-analytics-title="iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)"]').click();

        cy.title().should('eq', 'iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)');

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
                productDetails.push({ website: 'Apple Store', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
            
                // Visit eBay
                cy.visit('https://www.ebay.com.my/');
                
                cy.origin('https://www.ebay.com.my/', () => {
                    // Search for iPhone 15 Pro 256GB
                    let ebayproductDetails = [];
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
                            ebayproductDetails.push({ website: 'eBay', product: 'iPhone 15 Pro 256GB', price: 'itemPrice', link: 'linkValue' });
                        });
                    });

                    cy.log(ebayproductDetails);

                });
                cy.log(productDetails); 
            });
        });
        //cy.wait(2000); // Wait for 2 seconds
        //cy.wrap(ebayproductDetails).should('have.length', 1); // Ensure async call is completed

        // Access productDetails array outside the cy.origin() block
        //cy.log('Product Details outside cy.origin(): ', productDetails)

    });

    //it('Print the product details array', () => {
    //    // Log the product details array
    //    cy.log(ebayproductDetails);
    //    cy.log(productDetails);
    //    for (let i = 0; i < productDetails.length; i++) {
    //        cy.log('Product Details: ' + JSON.stringify(productDetails[i]));
    //    }
    //});
});
