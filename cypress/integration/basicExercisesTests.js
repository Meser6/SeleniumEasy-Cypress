/// <reference types="cypress" />

import SimpleFormDemo from "../support/page_objects/basic_exercises/SimpleFormDemo"
import CheckBoxDemo from "../support/page_objects/basic_exercises/CheckBoxDemo"
import RadioButtonsDemo from "../support/page_objects/basic_exercises/RadioButtonsDemo"

describe("SimpleFormDemo", () =>{
    it("Received text should be equal to sending message ", () =>{
        //given
        cy.choseExercise("basic", 0);
        //when
        SimpleFormDemo.sendMessage("Test01")
        SimpleFormDemo.clickOnShowMessageButton()
        //then
        SimpleFormDemo.receivedMessageShouldBeEqualToSendingMessage("Test01")
    })
    it("After sending correct inputs received sum should be properly", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        SimpleFormDemo.sendValues(5, 10)
        SimpleFormDemo.clickOnGetTotalButton()
        //then
        SimpleFormDemo.receivedSumShouldBeProperty(15)
    })
    it("After sending one incorrect inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        SimpleFormDemo.sendValues("!", 10)
        SimpleFormDemo.clickOnGetTotalButton()
        //then
        SimpleFormDemo.receivedSumShouldBeProperty("NaN")
    })
    it("After sending two incorrect inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        SimpleFormDemo.sendValues("x", "y")
        SimpleFormDemo.clickOnGetTotalButton()
        //then
        SimpleFormDemo.receivedSumShouldBeProperty("NaN")
    })
    it("After sending empty inputs received sum should be NaN", () =>{
        //given
        cy.choseExercise("basic", 0)
        //when
        SimpleFormDemo.clickOnGetTotalButton()
        //then
        SimpleFormDemo.receivedSumShouldBeProperty("NaN")
    })
})

describe("CheckBoxDemo", () =>{
    it("After checking single option there should be correct message", () =>{
        //given
        cy.choseExercise('basic', 1)
        //when
        CheckBoxDemo.checkSingleCheckbox()
        //then
        CheckBoxDemo.receivedMessageShouldBeEqualToExpected("Check box is checked")

    })
    it("After click on Check All every option should be checked", () =>{
        //given
        cy.choseExercise('basic', 1)
        //when
        CheckBoxDemo.checkAllCheckbox()
        //then
        CheckBoxDemo.buttonTextShouldBe("Uncheck All")   
    })
    it("Checking three options should not change button text", () =>{
        //given
        cy.choseExercise('basic', 1)
        //when
        for(let i = 0; i <3; i++){
            CheckBoxDemo.clickOption(i)
        }
        //then
        CheckBoxDemo.buttonTextShouldBe("Check All")   
    })
    it("Checking four options should change button text", () =>{
        //given
        cy.choseExercise('basic', 1)
        //when
        for(let i = 0; i <4; i++){
            CheckBoxDemo.clickOption(i)
        }
        //then
        CheckBoxDemo.buttonTextShouldBe("Uncheck All")   
    })
})
describe("Radio Buttons Demo", () =>{
    it("Checking gender should get a correct message with this gender name", () =>{
        //given
        const gender = "Male"
        cy.choseExercise('basic', 2)
        //when
        RadioButtonsDemo.checkRadioSelectGender(gender)
        RadioButtonsDemo.clickOnGetCheckedValueButton()
        //then
        RadioButtonsDemo.checkMessage(gender)
    })
    it("Checking gender and age should get a correct message with this data", ()=>{
        //given
        const gender = "Female"
        const age = "5 - 15"
        cy.choseExercise('basic', 2)
        //when
        RadioButtonsDemo.checkGroupRadioAge(age)
        RadioButtonsDemo.checkGroupRadioGender(gender)
        RadioButtonsDemo.clickGetValuesButton()
        //then
        RadioButtonsDemo.checkGroupMessage(gender, age)

    })
})