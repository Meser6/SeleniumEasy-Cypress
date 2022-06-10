class SelectDropdownList{

    get singleListElement(){
        return cy.get("select.form-control")
    }
    get singleMessageElement(){
        return cy.get("p.selected-value")
    }
    get firstSelectedButtonElement(){
        return cy.get("button[value='Print First']")
    }
    get allSelectedButtonElement(){
        return cy.get("button[value='Print All']")
    }
    get multiMessageElement(){
        return cy.get("p.getall-selected")
    }
    get multiMessageElements(){
        return cy.get("#multi-select option")
    }
    get firstSelectedButtonSelector(){
        return cy.get("button[value='Print First']")
    }    
    get allSelectedButtonSelector(){
        return cy.get("button[value='Print All']")
    }
    get receivedMessageSelector(){
        return cy.get("p.getall-selected")
    }

    selectOptionAtSingleList(option){
        this.singleListElement.select(option)
    }

    checkReceivedMessageAtSingleList(expectedMessage){
        this.singleMessageElement.should("contain", expectedMessage)
    }



    /*

    */

}


export default new  SelectDropdownList()