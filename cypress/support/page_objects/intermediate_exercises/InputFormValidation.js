class InputFormValidation{

    get formsElements(){
        return cy.get(".form-control")
    }
    get formLabel(){
        return cy.get(".input-group-addon")
    }
    get basicErrorMessageElement(){
        return cy.get("div.has-error .help-block[style=\"\"]")
    }
    get alternativeErrorMessageElement(){
        return cy.get("div.has-error .help-block[style=\"display: block;\"]")
    }
    get formsNamesElements(){
        return cy.get(".form-group>.control-label")
    }
    get stateListElement(){
        return cy.get("select[name='state']")
    }
    get hostingElement(){
        return cy.get(".col-md-4 [type='radio']")
    }
    get sendButtonElement(){
        return cy.get("button[type='submit'].btn")
    }
    
    sendInput(indexNumber, input){
        this.formsElements.eq(indexNumber).type(input)
    }

    choseState(state){
        this.stateListElement.select(state)
    }

    selectHosting(yesOrNo){
        if(yesOrNo = "yes"){
           this.hostingElement.eq(0).check()
        }
        else{
            this.hostingElement.eq(1).check()
        }
    }
    clickSend(){
        this.sendButtonElement.click()
    }

    checkFormColor(indexNumber, expectedColor){
        this.formLabel.eq(indexNumber).should("have.css", "color", expectedColor)
    }

    clickSendAndCheckFormAPISending(){
        cy.intercept("POST", "https://demo.seleniumeasy.com/input-form-demo.html").as("sendForm")
        this.clickSend()
        cy.wait("@sendForm")
        cy.get("@sendForm").then(res =>{
            expect(res.response.statusCode).to.equal(200)
        })
    }
}

export default new InputFormValidation()