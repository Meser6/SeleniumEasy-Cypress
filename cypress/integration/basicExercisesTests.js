/// <reference types="cypress" />

import SimpleFormDemo from "../support/page_objects/basic_exercises/SimpleFormDemo"
import CheckBoxDemo from "../support/page_objects/basic_exercises/CheckBoxDemo"
import RadioButtonsDemo from "../support/page_objects/basic_exercises/RadioButtonsDemo"
import SelectDropdownList from "../support/page_objects/basic_exercises/SelectDropdownList";
import JavaScriptAlerts from "../support/page_objects/basic_exercises/JavaScriptAlerts"
import BootstrapAlerts from "../support/page_objects/basic_exercises/BootstrapAlerts"

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
            CheckBoxDemo.checkOption(i)
        }
        //then
        CheckBoxDemo.buttonTextShouldBe("Check All")   
    })
    it("Checking four options should change button text", () =>{
        //given
        cy.choseExercise('basic', 1)
        //when
        for(let i = 0; i <4; i++){
            CheckBoxDemo.checkOption(i)
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

describe("Select Dropdown List", () =>{
    it("Received message should contain chosen option", () =>{
        //given
        const option = "Wednesday"
        cy.choseExercise('basic', 3)
        //when
        SelectDropdownList.selectOptionAtSingleList(option)
        //then
        SelectDropdownList.checkReceivedMessageAtSingleList(option)
        
    })
    it("Chancing selected option should update received message", () =>{
        //given
        const firstOption = "Wednesday"
        const secondOption = "Friday"
        cy.choseExercise('basic', 3)
        //when
        SelectDropdownList.selectOptionAtSingleList(firstOption)
        SelectDropdownList.selectOptionAtSingleList(secondOption)
        //then
        SelectDropdownList.checkReceivedMessageAtSingleList(secondOption)
    })
})

describe("Java Script Alerts", () =>{
    it("In alert should be correct message ", () =>{
        //given
        cy.choseExercise('basic', 4)
        // when
        JavaScriptAlerts.initAlertBox()
        //then
        JavaScriptAlerts.checkAlertGetText("alert", "I am an alert box!")
    })
    it("There should be correct message after accept alert", () =>{
        //given
        cy.choseExercise('basic', 4)
        // when
        JavaScriptAlerts.initConfirmBox()
        JavaScriptAlerts.acceptOrDismiss("confirm", true)
        //then
        JavaScriptAlerts.checkConfirmReceivedMessage("OK")

    })
    it("There should be correct message after cancel alert", () =>{
        //given
        cy.choseExercise('basic', 4)
        // when
        JavaScriptAlerts.initConfirmBox()
        JavaScriptAlerts.acceptOrDismiss("confirm", false)
        //then
        JavaScriptAlerts.checkConfirmReceivedMessage("Cancel")

    })
    it("There should be correct message after adding text to prompt alert", () =>{
        //given
        const textToSend = "Test01!"
        cy.choseExercise('basic', 4)
        // when
        JavaScriptAlerts.initPromptAndSendText(textToSend)
        //then
        JavaScriptAlerts.checkPromptReceivedMessage(textToSend)

    })
})
describe("Bootstrap Alerts", () =>{
   before(() =>{
    cy.choseExercise('basic', 6)
   })
    const data = [
        ["success", 5000],
        ["warning",  3000],
        ["danger",  5000],
        ["info",  6000],
    ]
    data.forEach(($data) =>{
        const [alertType, displayTime] = $data
        it(alertType + " alert should disappear after "+ displayTime + " ms", ()=>{
            //given
            //when
            BootstrapAlerts.clickOnAlarmBox(true, alertType)
            //then
            BootstrapAlerts.checkAlertMessage(true, alertType, displayTime)
            BootstrapAlerts.checkIsCloseButtonDisplayed(false)
            BootstrapAlerts.checkIsBoxIsInvisibility(true, alertType, displayTime)
        })
    })
    it("All alerts type should have proper message and close button", () =>{
        //given
        const data = [
            ["success"],
            ["warning"],
            ["danger"],
            ["info"],
        ]
        data.forEach(($data) =>{
        const [alertType] = $data
        //when
        BootstrapAlerts.clickOnAlarmBox(false, alertType)
        //then
        BootstrapAlerts.checkAlertMessage(false, alertType)
        BootstrapAlerts.checkIsCloseButtonDisplayed(true)
        })
    })
    it("After click on close button alert should not be visible", () =>{
        //given
        const isAutocloseable =  false
        const alertType = "info"
        //when
        cy.visit("https://demo.seleniumeasy.com/bootstrap-alert-messages-demo.html")
        BootstrapAlerts.clickOnAlarmBox(isAutocloseable, alertType)
        BootstrapAlerts.closeAlert()
        //then
        BootstrapAlerts.checkIsBoxIsInvisibility(isAutocloseable, alertType, 0)
    })
})