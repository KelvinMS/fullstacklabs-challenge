class HomePagePO{

    button = {
        
        Submit:"[data-testid=\"btn-submit\"]"
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
    }

};
module.exports = new HomePagePO();