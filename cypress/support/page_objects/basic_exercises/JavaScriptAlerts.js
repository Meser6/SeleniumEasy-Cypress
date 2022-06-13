class JavaScriptAlerts{

    get initialAlertBoxButtonElement(){
        return cy.get("button[onclick=\"myAlertFunction()\"]")
    }
    get initialConfirmBoxButtonElement(){
        return cy.get("button[onclick=\"myConfirmFunction()\"]")
    }
    get initialPromptBoxButtonElement(){
        return cy.get("button[onclick=\"myPromptFunction()\"]")
    }
    get confirmReceivedMessageElement(){
        return cy.get("p#confirm-demo")
    }
    get promptReceivedMessageElement(){
        return cy.get("p#prompt-demo")
    }

    initAlertBox(){
        this.initialAlertBoxButtonElement.click()
    }

    initConfirmBox(){
        this.initialConfirmBoxButtonElement.click()
    }

    initPromptBox(){
        this.initialPromptBoxButtonElement.click()
    }

    checkAlertGetText(alertType, expectedText){
        cy.on("window:"+alertType, alertText =>{
            expect(alertText).contain(expectedText)
        })
    }

    acceptOrDismiss(alertType, acceptOrDismiss){
        cy.on("window:"+alertType, () => acceptOrDismiss)
    }

    initPromptAndSendText(textToSend){
    cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns(textToSend)
         this.initialPromptBoxButtonElement.click()
      })
    }

    checkConfirmReceivedMessage(expectedMessage) {
        return this.confirmReceivedMessageElement.invoke("text").should("contain", expectedMessage);
    }

    checkPromptReceivedMessage(expectedMessage){
        return this.promptReceivedMessageElement.invoke("text").should("contain", expectedMessage);
    }
}

export default new JavaScriptAlerts();