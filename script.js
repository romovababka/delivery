import {food} from './fooditems.js'
console.log(food);


function displayItems() {
    let kfc = document.getElementById("kfc");
    let donner = document.getElementById("donner");
    let ice_cream = document.getElementById("ice-cream");
    let chinese = document.getElementById("Chinese");

    const kfcData = food.filter(item=> item.category==='kfc');
    console.log(kfcData);
    const chineseData = food.filter(item=> item.category==='chinese');
    console.log(chineseData);
    const iceData = food.filter(item=> item.category==='ice_cream');
    console.log(iceData);
    const donnerData = food.filter(item=> item.category==='donner');
    console.log(donnerData);
    // rating = kcal
    kfcData.map(item=> {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top")

        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerHTML = " " + item.kcal;

        let heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement("img");
        img.src = item.img;

        let itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText ="Price: £" + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        kfc.appendChild(itemCard);
    })

    donnerData.map(item=> {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top")

        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerHTML = " " + item.kcal;

        let heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement("img");
        img.src = item.img;

        let itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText ="Price: £" + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        donner.appendChild(itemCard);
    })

    chineseData.map(item=> {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top")

        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerHTML = " " + item.kcal;

        let heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement("img");
        img.src = item.img;

        let itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText ="Price: £" + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    iceData.map(item=> {
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top")

        let star = document.createElement("i");
        star.setAttribute("class", "fa fa-star");
        star.setAttribute("id", "rating");
        star.innerHTML = " " + item.kcal;

        let heart = document.createElement("i");
        heart.setAttribute("class", "fa fa-heart-o add-to-cart");
        heart.setAttribute("id", item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        let img = document.createElement("img");
        img.src = item.img;

        let itemName = document.createElement("p");
        itemName.setAttribute("id", "item-name");
        itemName.innerText = item.name;

        let itemPrice = document.createElement("p");
        itemPrice.setAttribute("id", "item-price");
        itemPrice.innerText ="Price: £" + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        ice_cream.appendChild(itemCard);
    })
}
displayItems();

const categoryListData = [...new Map(food.map(item=>[item["category"],item])).values()]
console.log(categoryListData);

function categoryLists(){
    let categoryList = document.getElementById("category-list");
    categoryListData.map(item =>{
        let listCard = document.createElement("div");
        listCard.setAttribute("class", "list-card");

        let listImg = document.createElement("img");
        listImg.src = item.img;

        let listName = document.createElement("a");
        listName.setAttribute("class", "list-name");
        listName.innerText = item.category;
        listName.setAttribute("href", "#"+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        let cloneListCard = listCard.cloneNode(true)
        categoryList.appendChild(listCard);
    })
}

categoryLists();


document.querySelectorAll(".add-to-cart").forEach(item=>{
    item.addEventListener("click", addToCart)
})
let cartData=[];
function addToCart(){
    let itemToAdd =this.parentNode.nextSibling.nextSibling.innerText;
    let itemObj = food.find(element=>element.name===itemToAdd);
    //console.log(itemObj)
    let index = cartData.indexOf(itemObj);
    if (index === -1){
        document.getElementById(itemObj.id).classList.add("toggle-heart");
        cartData = [...cartData,itemObj];
        console.log(cartData);
    } else if(index > -1){
        //if user want to add smth more than once
        alert("Added to cart")
    }
    //show amount of items (top of the page)
    document.getElementById("cart-plus").innerText = " " + cartData.length + " Items"
    //document.getElementById("m-cart-plus").innerText = " " + cartData.length;
    totalAmount();
    cartItems();
}

function cartItems(){
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    cartData.map(item=> {
        let tableRow = document.createElement("tr");

        let rowData1 = document.createElement("td");
        let img =  document.createElement("img");
        img.src = item.img;
        rowData1.appendChild(img);

        let rowData2 = document.createElement("td");
        rowData2.innerText = item.name;

        let rowData3 = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "decrease-item");
        btn1.innerHTML = "-";
        let span = document.createElement("span");
        span.innerText = item.quantity;
        let btn2 = document.createElement("button");
        btn2.setAttribute("class", "increase-item");
        btn2.innerHTML = "+";
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        let rowData4 = document.createElement("td");
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll(".increase-item").forEach(item =>{
        item.addEventListener("click", incrementItem);
    })
    document.querySelectorAll(".decrease-item").forEach(item =>{
        item.addEventListener("click", decrementItem);
    })
}

let currPrice = 0;

function  incrementItem(){
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    let incObj = cartData.find(element=>element.name === itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);

    incObj.price = currPrice*incObj.quantity;
    totalAmount();
    cartItems();
}

let flag = false;

function decrementItem(){
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element=>element.name === itemToDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice = (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity -=1;
        decObj.price = currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove("toggle-heart");
        cartData.splice(ind,1);
        document.getElementById("cart-plus").innerHTML = " " + cartData.length + "Items";
        //document.getElementById("m-cart-plus").innerHTML = " " + cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById("food-items").classList.toggle("food-items");
            document.getElementById("category-list").classList.toggle("food-items");
            //document.getElementById("m-cart-plus").classList.toggle("m-cart-plus");
            document.getElementById("cart-page").classList.toggle("cart-toggle");
            //document.getElementById("category-header").classList.toggle("toggle-category");
            document.getElementById("checkout").classList.toggle("cart-toggle");
            flag = false;
            alert("Currently no item in cart")
        }
    }
    totalAmount();
    cartItems();
}

function totalAmount(){
    let sum = 0;
    cartData.map(item=>{
        sum += item.price;
    })
    document.getElementById("total-item").innerText = "Total Item : " + cartData.length;
    document.getElementById("total-price").innerText = "Total Price : £ " + sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);
//document.getElementById("m-cart-plus").addEventListener("click", cartToggle);

function cartToggle(){
    if(cartData.length > 0){
        document.getElementById("food-items").classList.toggle("food-items");
        document.getElementById("category-list").classList.toggle("food-items");
        //document.getElementById("m-cart-plus").classList.toggle("m-cart-plus");
        document.getElementById("cart-page").classList.toggle("cart-toggle");
        //document.getElementById("category-header").classList.toggle("toggle-category");
        document.getElementById("checkout").classList.toggle("cart-toggle");
        flag = true;
    }
    else {
        alert("Currently no items in cart");
    }
}

function addAddress(){
    let address = prompt("Enter your address");
    document.getElementById("add-address").innerText = " " + address;

}