import InputFormValidation from "../support/page_objects/intermediate_exercises/InputFormValidation";

describe("Input Form Validations tests", () =>{
    context("Correct inputs", ()=>{
        before(() =>{
            cy.choseExercise("intermediate", 0)
        })
        beforeEach(function(){
            cy.fixture("IntputsToInputFormValidation").then(data =>{ 
                this.dane = data})
        })
        it("Correct input in name should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.name.indexNumber
            let input = this.dane.correctInputs.name.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in surname should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.surname.indexNumber
            let input = this.dane.correctInputs.surname.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in email should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.email.indexNumber
            let input = this.dane.correctInputs.email.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in phone number should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.phoneNumber.indexNumber
            let input = this.dane.correctInputs.phoneNumber.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in address should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.address.indexNumber
            let input = this.dane.correctInputs.address.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in city should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.city.indexNumber
            let input = this.dane.correctInputs.city.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in zipCode should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.zipCode.indexNumber
            let input = this.dane.correctInputs.zipCode.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct input in website should give correct labels color", function(){
            //given
            let indexNumber = this.dane.correctInputs.website.indexNumber
            let input = this.dane.correctInputs.website.input
            //when
            InputFormValidation.sendInput(indexNumber, input)
            //then
            InputFormValidation.checkFormColor(indexNumber, "rgb(60, 118, 61)")
        })
        it("Correct choosing state should give correct labels color", function(){
            //given 
            //when
            InputFormValidation.choseState("Iowa")
            //then
            InputFormValidation.checkFormColor(6, "rgb(60, 118, 61)")
        })
        it("Refilling all forms properly and click send should send form", function(){
            //given
            InputFormValidation.selectHosting("yes")
            //when
            //then
            InputFormValidation.clickSendAndCheckFormAPISending()

        })
    })
})