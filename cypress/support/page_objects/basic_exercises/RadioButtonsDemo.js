class RadioButtonsDemo{

    get getCheckedValueButtonElement(){
        return cy.get("button#buttoncheck")
    }
    get radioReceivedMessageElement(){
        return cy.get("p.radiobutton")
    }
    get getValuesButtonElement(){
        return cy.get("div.panel-body>button")
    }
    get groupRadioReceivedMessageElement(){
        return cy.get("p.groupradiobutton")
    }
    get radioGenderSelector(){
        return cy.get("[name='optradio']")
    }
    get groupRadioGenderSelector(){
        return cy.get(".radio-inline [name='gender']")
    }
    get groupRadioAgeSelector(){
        return cy.get(".radio-inline [name='ageGroup']")
    }

    checkRadioSelectGender(gender){
        if(gender == "Male"){
            this.radioGenderSelector.eq(0).click()
        } else {
            this.radioGenderSelector.eq(1).click()
        }
    }
    clickOnGetCheckedValueButton(){
        this.getCheckedValueButtonElement.click()
    }
    checkGroupRadioGender(gender){
        if(gender == "Male"){
            this.groupRadioGenderSelector.eq(0).click()
        } else {
            this.groupRadioGenderSelector.eq(1).click()
        }
    }
    checkGroupRadioAge(gender){
        if(gender == "0 - 5"){
            this.groupRadioAgeSelector.eq(0).click()
        } else if (gender == "5 - 15") {
            this.groupRadioAgeSelector.eq(1).click()
        }
    }
    clickGetValuesButton(){
        this.getValuesButtonElement.click()
    }


    checkMessage(expectedMessage){
       this.radioReceivedMessageElement.invoke("text").should("contain", expectedMessage) 
    }
    checkGroupMessage(expectedMessageGender, expectedMessageAge){
        this.groupRadioReceivedMessageElement.invoke("text").should("contain", expectedMessageGender).and("contain", expectedMessageAge)
     }
}

export default new RadioButtonsDemo();