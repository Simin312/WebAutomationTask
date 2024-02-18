describe('Compare iPhone 15 Pro between eBay and Lazada', () => {
    let productDetails = []
    it('Visit eBay and gets the product details', () => {
        
        // Visit eBay
        cy.visit('https://www.ebay.com.my/')

        // Search for iPhone 15 Pro 256GB
        cy.get('input.gh-tb[name="_nkw"]').type('iphone 15 pro 256gb new') // class & attribute
        cy.get('input#gh-btn').click()

        cy.get('.srp-results.srp-list.clearfix').within(()=>{
            cy.get('li').first().should('be.visible')
        })
        
        cy.get('li#item405343ae00 span.s-item__price span.ITALIC').invoke('text').then((price)=>{
            const itemPrice = price
            cy.log('Price: ', itemPrice)
            //const link = cy.get('.s-item').first().find('a').invoke('attr', 'href');
            //productDetails.push({websiet: 'eBay', product: 'iPhone 15 Pro 256GB', price: itemPrice})
            cy.get('li#item405343ae00').within(()=>{
                cy.get('.s-item__info.clearfix').find('a').invoke('attr','href').then((href)=>{
                    const linkValue = href
                    cy.log('Link: ', linkValue)
                    //productDetails.push({link: linkValue})
                    productDetails.push({website: 'eBay', product: 'iPhone 15 Pro 256GB', price: itemPrice, link: linkValue})
                    cy.log('Product Details: ', productDetails);
                })
            })  
        }) 
    })

    it.only('Visit eBay and gets the product details', () => {
        cy.visit('https://www.apple.com/my/')
        cy.get('#globalnav-menubutton-link-search').click()

        cy.get('.globalnav-searchfield-input').type('iphone 15 pro 256gb new').type('{enter}')
        cy.get('[data-analytics-title="iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)"]').click()

        cy.title().should('eq','iPhone 15 Pro and iPhone 15 Pro Max - Apple (MY)')

        cy.contains(/Buy/i)
        cy.get('.welcome__lockup-cta.show').click()

        cy.contains(/Buy iPhone 15 Pro/i)

        //cy.get('.rc-dimension-selector-group.form-selector-group').within(()=>{
        //    cy.get('.rc-dimension-selector-group.form-selector-group').first().click()
        //}) 
        cy.get('.rc-dimension-selector-group.form-selector-group .rc-dimension-selector-row.form-selector').first().click()

        //rc-dimension-selector-group form-selector-group
        //cy.get('.column.form-selector-left-col.rf-bfe-selector-left-col').click()

        cy.get('.colornav-items').within(()=>{
            cy.get('li').first().click()
        }) 

        cy.get('.form-selector-title:contains("256")').click()

        cy.contains(/iPhone 15 Pro/i)
        cy.wait(2000)
        cy.get('.rc-prices-fullprice[data-autom="full-price"]').first().invoke('text').then((price)=>{
            const itemPrice = price
            cy.log('Price: ', itemPrice)
        })

        cy.url().then(url => {
            // Log or use the URL as needed
            cy.log('Current URL:', url);
        })

        //TO-DO: clean up the code and arrange the input to the array 
        //      write a sorting function to sort the order by using the price


        // div[data-autom='headerPrice'] span[class='rc-prices-fullprice']  div[data-autom='stickyPrice'] span[class='rc-prices-fullprice']
        // rc-prices-fullprice


        //cy.get('.rc-dimension-selector-group.form-selector-group .rc-dimension-selector-row.form-selector .form-selector-label').eq(1).click()
        
        
        //cy.get('.search-box__input--O34g[placeholder="Search in Lazada"]').type('iphone 15 pro 256gb new') // class & attribute
        //cy.get('#fi-rr-search').click()
        //cy.get('.MuiInputBase-inputAdornedEnd').type('iphone 15 pro 256gb new').type('{enter}')
    
        //cy.contains(/iphone 15 pro/i)
        //cy.get('.search-box__button--1oH7').click()
        // Click on a text element within a specific class
        //cy.get('.jss192').within(()=>{
        //    cy.get('MuiTypography-root.MuiLink-root.MuiLink-underlineHover.jss196.MuiTypography-colorPrimary').click();
        //})
        

    })


  })