import {food} from './fooditems.js'
console.log(food);


function displayItems() {
    let kfc = document.getElementById("kfc");
    let mc = document.getElementById("mc");
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
        itemPrice.innerText = item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        kfc.appendChild(itemCard);
    })
}
displayItems();
