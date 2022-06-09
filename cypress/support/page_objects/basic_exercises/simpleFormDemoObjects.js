import { should } from "chai"

class simpleFormDemoObjects{

    get formToSendMessageElement(){
        return cy.get("form#get-input input")
    }
    get showMessageButtonElement(){
        return cy.get("form#get-input>button")
    }
    get receivedMessageElement(){
        return cy.get("div#user-message")
    }
    get formToSendAElement(){
        return cy.get("#sum1")
    }
    get formToSendBElement(){
        return cy.get("#sum2")
    }
    get getTotalButtonElement(){
        return cy.get("#gettotal button")
    }
    get receivedSumElement(){
        return cy.get("#gettotal+div:not([class]")
    }


    sendMessage(message){
        this.formToSendMessageElement().type(message)
    }
    clickOnShowMessageButton(){
        this.showMessageButtonElement().click();
    }
    get getReceivedMessage(){
        return this.receivedMessageElement.invoke("text")
    }
    sendValues(a, b){
        this.formToSendAElement.type(a)
        this.formToSendBElement.type(b)
    }
    clickOnGetTotalButton(){
        this.getTotalButtonElement().click()
    }
    get getTotalSum(){
        return this.receivedSumElement.invoke("text")
    }
    receivedMessageShouldBeEqualToSendingMessage(expectedMessage){
        this.getReceivedMessage().should("contain", expectedMessage)
    }
    receivedSumShouldBeProperty(expectedSum){
        this.getReceivedMessage().should("contain", expectedMessage)
    }
}

export default new simpleFormDemoObjects();