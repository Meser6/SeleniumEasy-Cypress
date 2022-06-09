/// <reference types="cypress" />

import simpleFormDemoObjects from "../support/page_objects/basic_exercises/simpleFormDemoObjects"

describe("SimpleFormDemo", () =>{
    it("Received text should be equal to sending message ", () =>{
        //given
        const textToSend = "Test01"
        cy.choseExercise("basic", 0);
        //when
        simpleFormDemoObjects.sendMessage(textToSend)
        simpleFormDemoObjects.clickOnShowMessageButton()
        //then
        simpleFormDemoObjects.receivedMessageShouldBeEqualToSendingMessage(textToSend)
    })
    it("After sending correct inputs received sum should be properly", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        simpleFormDemoObjects.sendValues(5, 10)
        simpleFormDemoObjects.clickOnGetTotalButton()
        //then
        simpleFormDemoObjects.receivedSumShouldBeProperty(15)
    })
    it("After sending one incorrect inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        simpleFormDemoObjects.sendValues("!", 10)
        simpleFormDemoObjects.clickOnGetTotalButton()
        //then
        simpleFormDemoObjects.receivedSumShouldBeProperty("NaN")
    })
    it("After sending two incorrect inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        simpleFormDemoObjects.sendValues("x", "y")
        simpleFormDemoObjects.clickOnGetTotalButton()
        //then
        simpleFormDemoObjects.receivedSumShouldBeProperty("NaN")
    })
    it("After sending empty inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        simpleFormDemoObjects.clickOnGetTotalButton()
        //then
        simpleFormDemoObjects.receivedSumShouldBeProperty("NaN")
    })
})