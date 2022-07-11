import {food} from './fooditems.js'
console.log(food);


function displayItems() {
    let kfc = document.getElementById("mc");
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

    kfcData.map(item=>{
        let itemCard = document.createElement("div");
        itemCard.setAttribute("id", "item-card");

        let cardTop = document.createElement("div");
        cardTop.setAttribute("id", "card-top")
    })
}
displayItems();
