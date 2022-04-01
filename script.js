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
        const selectedMainCourse = document.querySelector(".main-course .selected");
        const selectedDrink = document.querySelector(".drinks .selected");
        const selectedDessert = document.querySelector(".dessert .selected");

        document.querySelector(".main-course-name").innerHTML = selectedMainCourse.querySelector(".name").innerHTML;
        document.querySelector(".drink-name").innerHTML = selectedDrink.querySelector(".name").innerHTML;
        document.querySelector(".dessert-name").innerHTML = selectedDessert.querySelector(".name").innerHTML;

        const mainCoursePrice = Number(selectedMainCourse.querySelector(".price").innerHTML.split(" ")[1].replace(",", "."));
        const drinkPrice = Number(selectedDrink.querySelector(".price").innerHTML.split(" ")[1].replace(",", "."));
        const dessertPrice = Number(selectedDessert.querySelector(".price").innerHTML.split(" ")[1].replace(",", "."));

        document.querySelector(".main-course-price").innerHTML = mainCoursePrice.toFixed(2).toString().replace(".", ",");
        document.querySelector(".drink-price").innerHTML = drinkPrice.toFixed(2).toString().replace(".", ",");
        document.querySelector(".dessert-price").innerHTML = dessertPrice.toFixed(2).toString().replace(".", ",");
        document.querySelector(".total").innerHTML = (mainCoursePrice + drinkPrice + dessertPrice).toFixed(2).toString().replace(".", ",");

        document.querySelector(".finish-order").classList.remove("hidden");
    }
}

function cancel() {
    document.querySelector(".finish-order").classList.add("hidden");
}