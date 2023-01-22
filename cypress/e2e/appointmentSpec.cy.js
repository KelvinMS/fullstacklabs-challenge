const { expect } = require("chai");
const HomePagePO = require('../po/homepage')

describe('Appointment creation', () => {

  it('No Appointment check', () => {
    cy.visit('/');
    cy.get(HomePagePO.labelsAppointment.DynamicAppointmentTitle).should('have.text','There are no appointments');
  })
 
  it('Fill all the required fields', () => {
    cy.visit('/')
    cy.get(HomePagePO.textbox.PetName).type('Shinigami');
    cy.get(HomePagePO.textbox.OwnerName).type('Kelvin Moreira');
    cy.get(HomePagePO.textbox.Date).type('2023-01-18');
    cy.get(HomePagePO.textbox.Time).type("00:23");
    cy.get(HomePagePO.textbox.Symptoms).type("Joy");
    cy.get(HomePagePO.button.Submit).click();
    cy.get(HomePagePO.labelsAppointment.PetName).should('have.text','Shinigami');
    cy.get(HomePagePO.labelsAppointment.OwnerName).should('have.text','Kelvin Moreira');
    cy.get(HomePagePO.labelsAppointment.Date).should('have.text','2023-01-18');
    cy.get(HomePagePO.labelsAppointment.Time).should('have.text','00:23');
    cy.get(HomePagePO.labelsAppointment.Symptoms).should('have.text','Joy');
  })

  it('Dont fill all the required fields', () => {
    cy.visit('/')
    cy.get(HomePagePO.textbox.PetName).type('Shinigami');
    cy.get(HomePagePO.textbox.OwnerName).type('Kelvin Moreira');
    cy.get(HomePagePO.textbox.Date).type('2023-01-18');
    cy.get(HomePagePO.textbox.Time).type("00:23");
    cy.get(HomePagePO.textbox.Symptoms).type("Joy");
  })
})
