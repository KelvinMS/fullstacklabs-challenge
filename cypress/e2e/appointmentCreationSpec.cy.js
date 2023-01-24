const HomePagePO = require('../po/homepage')

describe('Appointment creation', () => {
  
  beforeEach(() => {
    cy.visit('/');
  })

  it('No Appointment check', () => {
    cy.get(HomePagePO.labelsAppointment.DynamicAppointmentTitle).should('have.text','There are no appointments');
  })
 
  it('Fill all the required fields', () => {
    HomePagePO.fillFormInfo(true);
    HomePagePO.clickSubmit();
    cy.get(HomePagePO.labelsAppointment.PetName).should('have.text','Shinigami');
    cy.get(HomePagePO.labelsAppointment.OwnerName).should('have.text','Kelvin Moreira');
    cy.get(HomePagePO.labelsAppointment.Date).should('have.text','2023-01-18');
    cy.get(HomePagePO.labelsAppointment.Time).should('have.text','00:23');
    cy.get(HomePagePO.labelsAppointment.Symptoms).should('have.text','Joy');
  })

  it('Dont fill all the required fields', () => {
    HomePagePO.fillFormInfo(false);
    HomePagePO.clickSubmit();
    cy.get('[data-testid="alert"]').should('have.text','All fields are required');

  })
})