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
        console.log(cartData)
    } else if(index > -1){
        //if user want to add smth more than once
        alert("Added to cart")
    }
    //show amount of items (top of the page)
    document.getElementById("cart-plus").innerText = " " + cartData.length + " Items"
    document.getElementById("m-cart-plus").innerText = " " + cartData.length;
}