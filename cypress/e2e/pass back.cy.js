describe('Compare iPhone 15 Pro between eBay and Apple Store', () => {
    let myArray = [];

    it('Visit Apple store and eBay, and get the product details', () => {
        cy.origin('https://example.com', (originContext) => {
            // Modify myArray here
            myArray = ['item1', 'item2', 'item3'];
            return { myArray };
        }).then(({ myArray }) => {
            // Access myArray here
            cy.log('myArray:', myArray);
        });
    });

    // Access myArray here
    it('Print myArray outside cy.origin()', () => {
        cy.log('myArray outside cy.origin():', myArray);
    });
});
