Cypress.Commands.add("choseExercise", (difficultLevel, exercisesIndex) =>{
    cy.visit("")
    closeAdd();
    chooseDifficult(difficultLevel);
    chooseExercise(exercisesIndex);
})

function closeAdd(){
    cy.get("[title='Close']")
    .click()
}
function chooseDifficult(difficultLevel) {
    let exercisesElements = cy.get("li.tab-toggle a");
    switch(difficultLevel){
        case "basic":
            exercisesElements.eq(0).click()
            break;
        case "intermediate":
            exercisesElements.eq(1).click();
            break;
        case "advanced":
            exercisesElements.eq(2).click();
            break;
    }
}

function chooseExercise(exercisesIndex) {
    cy.get("div.active div.list-group>a").eq(exercisesIndex).click();
}