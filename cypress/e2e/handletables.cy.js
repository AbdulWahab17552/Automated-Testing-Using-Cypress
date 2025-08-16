describe('Handle Tabs', () => {
     // beforeLogin('login',()=>{
     //    cy.visit("https://practice.expandtesting.com/dynamic-pagination-table")
     // })
     it('count the rows and columns', () => {
          cy.visit("https://practice.expandtesting.com/dynamic-pagination-table")
          cy.get("table[class='table table-striped table-bordered dataTable no-footer']>thead>tr>th").should('have.length', '6')
          cy.get("table[class='table table-striped table-bordered dataTable no-footer']>tbody>tr>td").should('have.length', '18')
     })
     it('Checking a specific entry within the table', () => {
          cy.get("table[class='table table-striped table-bordered dataTable no-footer']>tbody>tr:nth-child(4)>td:nth-child(3)").contains("Senior")
     })
     it.skip('Read all the rows and column data in the first page', () => {
          cy.get('table[class="table table-striped table-bordered dataTable no-footer"]>tbody>tr')
               .each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                         cy.get('td').each(($col, index, $cols) => {
                              cy.log($col.text()) // Fixed: changed $column to $col
                         })
                    })
               })
     })
     let totalPages;
     it('Pagination',()=>{
          cy.get('.example_info')
     })

})