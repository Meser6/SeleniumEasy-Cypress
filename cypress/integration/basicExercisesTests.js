/// <reference types="cypress" />

import simpleFormDemoObjects from "../support/page_objects/basic_exercises/simpleFormDemoObjects"
describe("SimpleFormDemo", () =>{
    it("Received text should be equal to sending message ", () =>{
        //given
        const textToSend = "Test01"
        cy.choseExercise("basic", 1);
        //when
        simpleFormDemoObjects.sendMessage(textToSend)
        simpleFormDemoObjects.clickOnShowMessageButton()
        //then
        simpleFormDemoObjects.receivedMessageShouldBeEqualToSendingMessage(textToSend)
    })
})