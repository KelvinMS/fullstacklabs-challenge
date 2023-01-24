class HomePagePO{

    button = {
        
        Submit:"[data-testid=\"btn-submit\"]",
        Delete:"[data-testid=\"btn-delete\"]"
    };
    textbox ={
        PetName:"[data-testid=\"pet\"]",
        OwnerName:"[data-testid=\"owner\"]",
        Date:"[data-testid=\"date\"]",
        Time:"[data-testid=\"time\"]",
        Symptoms:"[data-testid=\"symptoms\"]",
    };
    labelsAppointment ={
        PetName:':nth-child(1) > span',
        OwnerName:':nth-child(2) > span',
        Date:':nth-child(3) > span',
        Time:':nth-child(4) > span',
        Symptoms:':nth-child(5) > span',
        DynamicAppointmentTitle:'[data-testid="dynamic-title"]',
    };
    comboBox = {
        existingAppointment :'[data-testid="appointment"]'
    };

    clickSubmit(){
        cy.get(this.button.Submit).click();
    }
    

    fillFormInfo(allFields){
        cy.get(this.textbox.PetName).type('Shinigami');
        cy.get(this.textbox.OwnerName).type('Kelvin Moreira');
        cy.get(this.textbox.Date).type('2023-01-18');
        cy.get(this.textbox.Time).type("00:23");
        if(allFields){
            cy.get(this.textbox.Symptoms).type("Joy");
        }
    }

};
module.exports = new HomePagePO();