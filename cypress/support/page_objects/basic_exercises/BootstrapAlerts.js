class BootstrapAlerts{

     alarmBoxElement (autocloseable, alertCategory){
        let partOfAlarmBoxSelector;
        if (autocloseable) {
            partOfAlarmBoxSelector = "div.alert-autocloseable-"
        } else {
            partOfAlarmBoxSelector = "div.alert-normal-"
        }
        return cy.get(partOfAlarmBoxSelector+alertCategory)
    }
     alarmButtonElement(autocloseable, alertCategory){
        let partOfAlarmButtonSelector
        if (autocloseable) {
            partOfAlarmButtonSelector = "button#autoclosable-btn-"
        }
        else {
            partOfAlarmButtonSelector = "button#normal-btn-"
        }
        return cy.get(partOfAlarmButtonSelector+alertCategory)
    }
    get alarmCloseButtonElement(){
        return cy.get("div[style=\"display: block;\"]>button.close")
    }

    clickOnAlarmBox(autocloseable, alertCategory){
        this.alarmButtonElement(autocloseable, alertCategory).click()
    }

    checkIsCloseButtonDisplayed(shouldBeDisplayed){
        if(shouldBeDisplayed){
            this.alarmCloseButtonElement.should("exist")
        } else {
            this.alarmCloseButtonElement.should("not.exist")
        }
    }

    checkIsBoxIsInvisibility(autocloseable, alertCategory, displayedTime){
        cy.wait(displayedTime+500)
        this.alarmBoxElement(autocloseable, alertCategory).should("not.visible")
    }

    closeAlert(){
        this.alarmCloseButtonElement.click()
    }

    checkAlertMessage(autocloseable, alertCategory, displayedTime){
        if (autocloseable){
            let time = displayedTime/1000
            this.alarmBoxElement(autocloseable, alertCategory).invoke("text")
                .should("contain", "autocloseable")
                .should("contain", alertCategory)
                .should("contain", time)
        } else{
            this.alarmBoxElement(autocloseable, alertCategory).invoke("text")
            .should("contain", "normal")
            .should("contain", alertCategory)
        }
    }
}
/*
   


    public void clickAndGetBoxParameters(boolean autocloseable, String alertCategory) {
        clickOnAlarmBox(autocloseable, alertCategory);
        WebElement alarmBoxElement = alarmBoxElement(autocloseable, alertCategory);

        boxAlertMessage = alarmBoxElement.getText();
        boxFontColor = alarmBoxElement.getCssValue("color");
        boxBackgroundColor = alarmBoxElement.getCssValue("background-color");
        boxBorderColor = alarmBoxElement.getCssValue("border-color");
    }

*/

export default new BootstrapAlerts();