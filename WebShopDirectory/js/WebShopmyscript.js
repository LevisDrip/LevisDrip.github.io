let itemStockCount = [];

let maxStock = [10, 15, 7]

let itemPrices = [20, 50, 420]

let cartCost = 0;

let boughtItem = [false, false, false];



function showPopUp(){
    console.log("tesrt");
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("modal").style.display = "block"
}

function hidePopUp(){
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("modal").style.display = "none"
}

function removeStock(num){
    let stockText = document.getElementById("stockText" + num);

    if (itemStockCount[num] > 0) {

        itemStockCount[num] -= 1;
        stockText.innerText = itemStockCount[num];
        cartCost += itemPrices[num];

    }
    if (itemStockCount[num] < 1){
        stockText.innerText = "Out of stock"
    }

    let amountBought = maxStock[num] - itemStockCount[num]
    if (amountBought === 1){
        cartAdding(num);
    }
    else if (amountBought > 1){
        updateCartItems(num, amountBought)
    }


    updateButtons(num);
}

function addStock(num){
    let stockText = document.getElementById("stockText" + num);

    if (itemStockCount[num] < maxStock[num]) {

        itemStockCount[num] += 1;
        stockText.innerText = itemStockCount[num];
        cartCost -= itemPrices[num];
    }

    let amountBought = maxStock[num] - itemStockCount[num]
    if (amountBought > 0){
        updateCartItems(num, amountBought)
    }
    else
    {
        document.getElementById("cartBox" + num).remove()
    }

    updateButtons(num);

}

function updateButtons(num){
    if (itemStockCount[num] >= maxStock[num]){
        document.getElementById("mb" + num).style.display = "none"
    }
    else{
        document.getElementById("mb" + num).style.display = "block"
    }

    if (itemStockCount[num] <= 0){
        document.getElementById("pb" + num).style.opacity = "0"
    }
    else{
        document.getElementById("pb" + num).style.opacity = "1"
    }

    document.getElementById("cartCostText").innerText = "Cost: $" + cartCost;
}

function onloadPage(){
    for (let a = 0; a < 3; a++){
        itemStockCount[a] = maxStock[a]
        let stockText = document.getElementById("stockText" + a);
        stockText.innerText = itemStockCount[a]

        let priceText = document.getElementById("priceText" + a);
        priceText.innerText = "$" + itemPrices[a]
        updateButtons(a)

        boughtItem[a] = false;
    }

    document.getElementById("cartMenu").style.display = "none";
    document.getElementById("boughtMenu").style.display = "none"
}

function cartShow(){
    if (document.getElementById("cartMenu").style.display === "none"){
        document.getElementById("cartMenu").style.display = "block"
    }
    else{
        document.getElementById("cartMenu").style.display = "none"
    }
}

function boughtShow(){
    if (document.getElementById("boughtMenu").style.display === "none"){
        document.getElementById("boughtMenu").style.display = "block"
    }
    else{
        document.getElementById("boughtMenu").style.display = "none"
    }
}

function cartAdding(num){
    let container = document.getElementById("cartItemsContainer");



    let newItem = document.createElement("div");
    newItem.classList.add("cartItem");
    newItem.id = "cartBox" + num;



    let titleText = document.createElement("p");
    titleText.innerText = document.getElementById("name" + num).innerText;
    titleText.id = "textBox" + num;

    let amountText = document.createElement("p")
    amountText.innerText = "x1"
    amountText.id = "amountBox" + num;



    newItem.appendChild(titleText)

    newItem.appendChild(amountText)

    container.appendChild(newItem);
}

function updateCartItems(num, newValue = 0){
    document.getElementById("amountBox" + num).innerText = "x" + newValue.toString();

}

function buyCartItems(){
    for (let b = 0; b < maxStock.length; b++){

        let remove = 0;

        while(itemStockCount[b] < maxStock[b]){

            remove +=1;
            addStock(b);

        }

        maxStock[b] -= remove;

        if (remove > 0 && !boughtItem[b]){
            bought(b, remove);
            boughtItem[b] = true;
        }
        else if (remove > 0 && boughtItem[b]) {
            updateBought(b, remove);
        }


        itemStockCount[b] = maxStock[b];
        let stockText = document.getElementById("stockText" + b)

        if (itemStockCount[b] <= 0) {

            updateButtons(b);
            stockText.innerText = "Out of Stock"
        }
        else{
            stockText.innerText = itemStockCount[b];
        }
    }
}

function bought(num, amount){
    let container = document.getElementById("boughtMenu");



    let newItem = document.createElement("div");
    newItem.classList.add("cartItem");
    newItem.id = "cartBox" + num;



    let titleText = document.createElement("p");
    titleText.innerText = document.getElementById("name" + num).innerText;
    titleText.id = "textBox" + num;

    let amountText = document.createElement("p")
    amountText.innerText = "x" + amount;
    amountText.id = "boughtAmount" + num;



    newItem.appendChild(titleText)

    newItem.appendChild(amountText)

    container.appendChild(newItem);
}

function updateBought(num, amount){
    let amountText = document.getElementById("boughtAmount" + num)
    let ToAdd = [];
    //decompile the stored value in the div to change the add to the total
    for (let x = 0; x < amountText.innerText.length; x++)
    {
        if (x > 0){
            ToAdd[x - 1] = amountText.innerText[x];
            console.log(ToAdd[x - 1]);
        }
    }

    let ToAddComplete = ToAdd.join("");
    let ToAddNumber = Number(ToAddComplete);




    amount += ToAddNumber;

    amountText.innerText = "x" + amount;
}