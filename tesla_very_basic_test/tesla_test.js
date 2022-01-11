/// <reference types="Cypress-xpath" />


describe('Tesla Basic Tests', () => {
  it('Hits the Tesla url', () => {
    // cy.viewport(1920, 1080)
    cy.visit("https://www.tesla.com/", {timeout: 50000})
    cy.title().should('eq', 'Electric Cars, Solar & Clean Energy | Tesla')

  })

  it('Navigates to Model X and gets stats', () => {
    cy.get('.tds-site-nav-item-text').should('have.text', 'Menu').click()
    cy.xpath("(//*[text()='Model X'])[1]").should('have.text', 'Model X').click()
    cy.xpath("(//*[contains(@class,'tcl-badges--four-badges-with-button')]//section[starts-with(@class,'tcl-badge')])[1]")
    .should('contain.text', '333').and('contain.text', 'mi')
    .and('contain.text', 'Range (EPA est.)')

    cy.xpath("(//*[contains(@class,'tcl-badges--four-badges-with-button')]//section[starts-with(@class,'tcl-badge')])[2]")
    .should('contain.text', '2.5').and('contain.text', 's')
    .and('contain.text', '0-60 mph*')

    cy.xpath("(//*[contains(@class,'tcl-badges--four-badges-with-button')]//section[starts-with(@class,'tcl-badge')])[3]")
    .should('contain.text', '9.9').and('contain.text', 's')
    .and('contain.text', '1/4 Mile')

    cy.xpath("(//*[contains(@class,'tcl-badges--four-badges-with-button')]//section[starts-with(@class,'tcl-badge')])[4]")
    .should('contain.text', '1,020').and('contain.text', 'hp')
    .and('contain.text', 'Peak Power')

    cy.xpath("//*[contains(@class,'tcl-badges--four-badges-with-button')]//a[@title='Order Now']").should('contain.text', 'Order Now')

  })

  it('Gets the headers of the text brochure documentation', () => {
    cy.xpath("(//div[@class='tcl-media-with-text__copy']//h4)[1]").should('contain.text', 'Wireless Gaming')
    cy.xpath("(//div[@class='tcl-media-with-text__copy']//h4)[2]").should('contain.text', 'Stay Connected')
    cy.xpath("(//div[@class='tcl-media-with-text__copy']//h4)[3]").should('contain.text', 'Your Best Audio System')
    

  })

  it('Drivetrain options', () => {
    cy.get("li[data-drivetrain-option='drivetrain--performance']").should('contain.text', 'Model X Plaid')
    cy.get("li[data-drivetrain-option='drivetrain--long-range']").should('contain.text', 'Model X').and('not.contain.text', 'Plaid')
  })

  it('Order now page', () => {
    cy.xpath("//*[contains(@class,'tcl-badges--four-badges-with-button')]//a[@title='Order Now']").should('contain.text', 'Order Now').click()
    cy.get("div[data-group-id='BATTERY_AND_DRIVE'] > div > h1").should('have.text', 'Model X')
    cy.get("#SavingsToggle-purchase_price-panel-tab").should('have.text', 'Purchase Price').click()
    cy.xpath("(//*[@class='tds-label-descriptor tds-o-label-descriptor'])[1]").should('have.text', '$99,690')
    cy.xpath("(//*[@class='tds-option_group'])[2]//*[@class='tds-label-title tds-o-label-title']").should('have.text', 'Model X Plaid')
    cy.xpath("(//*[@class='tds-label-descriptor tds-o-label-descriptor'])[1]").should('have.text', '$121,190').click()
  })
})