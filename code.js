document.addEventListener("click", secret);

function secret() {
    if (shoppingList.length === 1 || shoppingList.length === 0) {
        document.getElementById("sec").innerHTML += "you looking beautiful today man! ";

    } else if (shoppingList.length !== 1) {
        document.getElementById("sec").innerHTML += "you looking EXTRA beautiful today man! ";

    }
}

function initialize() {
    inputContainer = document.getElementById("inputform");
    shopDisp = document.getElementById("shopp");
    doneDisp = document.getElementById("done");

    numItem = document.getElementById("numItem");
    newItem = document.getElementById("newItem");

    shoppingList = [];
}

addData = () => {
    newItemVal = newItem.value;
    shoppingList.push(newItemVal);
    display();
}

function remData() {
    numItemVal = numItem.value;

    (shoppingList.length >= numItemVal) ? shoppingList.splice(numItemVal - 1, 1): console.log("number is non existent on the list");

    display();
}

function upData() {
    numItemVal = numItem.value - 1;

    if (shoppingList.length > 1 && numItemVal < (shoppingList.length) && numItemVal != 0) {
        temp = shoppingList[numItemVal - 1];

        shoppingList[numItemVal - 1] = shoppingList[numItemVal];
        shoppingList[numItemVal] = temp;
    }

    display();
}

function downData() {
    numItemVal = numItem.value - 1;

    if (shoppingList.length > 2 && numItemVal < (shoppingList.length - 1)) {
        temp = shoppingList[numItemVal + 1];

        shoppingList[numItemVal + 1] = shoppingList[numItemVal];
        shoppingList[numItemVal] = temp;
    }

    display();
}

function display() {
    shopDisp.innerHTML = "";
    doneDisp.innerHTML = "";

    for (i = 0; i < shoppingList.length; i++) {
        let val = shoppingList[i];
        shopDisp.innerHTML += (i + 1) + `: ${val}<br />`;
    }
    doneDisp.innerHTML = "Sucessfully Completed Action!"
}