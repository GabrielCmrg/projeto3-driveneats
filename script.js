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

    checkSelection();
}

function checkSelection() {
    const item1 = document.querySelector(".main-course .selected");
    const item2 = document.querySelector(".drinks .selected");
    const item3 = document.querySelector(".dessert .selected");

    if (item1 !== null && item2 !== null && item3 !== null) {
        const bottom = document.querySelector(".bottom-bar");
        bottom.classList.add("clickable");
        bottom.querySelector("button").innerHTML = "Fechar pedido";
    }
}

function finishOrder() {
    if (document.querySelector(".clickable") !== null) {
        document.querySelector(".finish-order").classList.remove("hidden");
    }
}