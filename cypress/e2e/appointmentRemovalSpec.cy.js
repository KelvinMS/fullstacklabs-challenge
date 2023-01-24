const HomePagePO = require('../po/homepage')

describe('Appointment removal',()=> {
    it(' Delete appointment', () => {
        cy.visit('/');
        HomePagePO.fillFormInfo(true);
        cy.get(HomePagePO.button.Submit).click();
        cy.get(HomePagePO.button.Delete).should('be.visible').click();
        cy.get(HomePagePO.comboBox.existingAppointment).should('not.exist');
    })
})