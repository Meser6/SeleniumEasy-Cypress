class CheckBoxDemo{
    get checkboxInputElement(){
        return cy.get("input#isAgeSelected")
    }
    get receivedMessageElement(){
        return cy.get("div#txtAge")
    }
    get allCheckboxListElement(){
        return cy.get("input.cb1-element")
    }
    get checkAllButtonElement(){
        return cy.get("#check1")
    }

    checkSingleCheckbox(){
        this.checkboxInputElement.check()
    }

    get getMessage(){
        return this.receivedMessageElement.invoke("text")
    }

    checkAllCheckbox(){
        this.checkAllButtonElement.click()
    }

    clickOption(optionNumber){
        this.allCheckboxListElement.eq(optionNumber).click()
    }
    

    receivedMessageShouldBeEqualToExpected(expectedMessage){
        this.getMessage.should("contains", expectedMessage)
    }

    checkedBoxesShouldBeEqualTo(expectedAmount){
        let amountOfCheckedElement = 0
        this.allCheckboxListElement.each(element => {
            if(element.should("be.checked")){
                amountOfCheckedElement++
            }
        })
                
        assert(amountOfCheckedElement == expectedAmount)
    }
    
    buttonTextShouldBe(expectedText){
        this.checkAllButtonElement.invoke("prop", "value").should("contains", expectedText)
    }
}

export default new CheckBoxDemo()