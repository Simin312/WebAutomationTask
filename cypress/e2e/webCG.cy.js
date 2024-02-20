describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    let productDetails = [];
    
    beforeEach(() => {
        productDetails = []; // Reset the productDetails array before each test
    });

    it('Visit eBay and Apple Store and gets the product details', () => {
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

        cy.visit('https://www.apple.com/my/');
        cy.origin('https://www.apple.com/my/', () => {
            cy.get('#globalnav-menubutton-link-search').click();

            cy.get('.globalnav-searchfield-input').type('iphone 15 pro 256gb new').type('{enter}');
            cy.get('[data-analytics-title="iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)"]').click();

            cy.title().should('eq','iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)');
            cy.wait(5000);

            //cy.contains('From RM 5,499', { timeout: 50000 });
            cy.get('img[src="/my/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg"]', { timeout: 50000 })
            .should('be.visible')
            .should('have.attr', 'src', '/my/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg');

            //cy.get('.welcome__lockup-cta.show[data-analytics-title="buy | iphone 15 pro"]').should('be.visible');

            //cy.wait(10000);
            cy.get('.welcome__lockup-cta.show[href="/my/shop/goto/buy_iphone/iphone_15_pro"]').should('be.visible').click().then(() => {
                // Success case
                // Add your assertions or further actions here
                cy.wait(20000);

                cy.get('.fwl').should('have.text', 'Buy iPhone 15 Pro')

                cy.contains('.form-selector-title', '6.1-inch display').should('be.visible').click();
              }).catch((error) => {
                // Error case
                // Handle the error or log it
                cy.log('Error occurred:', error.message);
              });

            //.click();

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
        })

        
    });
});
