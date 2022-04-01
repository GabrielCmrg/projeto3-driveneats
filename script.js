function select(card) {
    const selectedMainCourse = document.querySelector(".main-course .selected");
    const selectedDrink = document.querySelector(".drinks .selected");
    const selectedDessert = document.querySelector(".dessert .selected");
    
    if (selectedMainCourse !== null && document.querySelector(".main-course").contains(card)) {
        selectedMainCourse.classList.remove("selected");
    }

    if (selectedDrink !== null && document.querySelector(".drinks").contains(card)) {
        selectedDrink.classList.remove("selected");
    }

    if (selectedDessert !== null && document.querySelector(".dessert").contains(card)) {
        selectedDessert.classList.remove("selected");
    }

    card.classList.add("selected");
}