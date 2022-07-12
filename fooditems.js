const food = [
    {
        id: 1,
        img: "https://www.thespruceeats.com/thmb/NRuxY8YJmof92GgShYoUFouVeIo=/2105x2105/filters:fill(auto,1)/aqIMG_1498fsq-5b343910c9e77c001a218bd0.jpg",
        name: "German Doner Kebab",
        kcal: 599,
        category: "donner",
        price: 7.99
    },
    {
        id: 2,
        img: "https://scontent.fgba1-1.fna.fbcdn.net/v/t1.6435-9/95606637_116196573412319_8964008372122681344_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=973b4a&_nc_ohc=zpJUjMeBd28AX9cRjjC&_nc_ht=scontent.fgba1-1.fna&oh=00_AT_uzz2cvKiS5-90UsjE5QZaSTQkIvmizXzxIPrdF7eIhw&oe=62EDD506",
        name: "Fresh shaurma",
        kcal: 700,
        category: "donner",
        price: 12
    },
    {
        id: 3,
        img: "https://littlesunnykitchen.com/wp-content/uploads/2021/02/Shish-Tawook-Recipe-4.jpg",
        name: "Chicken shish",
        kcal: 800,
        price: 20,
        category: "donner",
    },
    {
        id: 4,
        img: "https://turkishfoodie.com/wp-content/uploads/2018/07/Lamb-Shish-Kebab.jpg",
        name: "Lamb shish",
        kcal: 800,
        category: "donner",
        price: 18
    },
    {
        id: 5,
        img: "https://the-challenger.ru/wp-content/uploads/2018/02/shutterstock_312906398-800x533.jpg",
        name: "Tako with beef",
        kcal: 350,
        price: 5.99,
        category: "donner",
    },
    {
        id: 6,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/drinks/TANGO_RG.jpg",
        name: "REGULAR TANGO",
        kcal: 100,
        category: "kfc",
        price: 2
    },
    {
        id: 7,
        kcal: 599,
        category: "kfc",
        img: "https://assets.kfcapi.com/fit-in/500x500/products/drinks/DIETPEPSI_RG.jpg",
        name: "REGULAR DIET PEPSI",

        price: 2.50
    },
    {
        id: 8,
        kcal: 300,
        category: "kfc",
        price: 4,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/drinks/KRUSHEM_MALTESER.jpg",
        name: "MALTESERS® KRUSHEM"
    },
    {
        id: 9,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/drinks/KRUSHEM_OREO_DRINK.jpg",
        name: "OREO® KRUSHEMS",
        kcal: 300,
        price: 4,
        category: "kfc",
    },
    {
        id: 10,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/snacksextras/sides/COLESLAW_RG.jpg",
        name: "REGULAR COLESLAW",
        kcal: 30,
        price: 3,
        category: "kfc",
    },
    {
        id: 11,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/snacksextras/sides/FRIES_RG_SO.jpg",
        name: "REGULAR FRIES",
        kcal: 120,
        price: 2,
        category: "kfc",
    },
    {
        id: 12,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/chicken/mighty-bucket-for-one.jpg",
        name: "MIGHTY BUCKET FOR ONE MEAL",
        kcal: 1000,
        price: 18,
        category: "kfc",
    },
    {
        id: 13,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/chicken/4PC_MEAL.jpg",
        name: "4 PIECE COLONEL’S MEAL",
        kcal: 1000,
        price: 16,
        category: "kfc",
    },
    {
        id: 14,
        img: "https://assets.kfcapi.com/fit-in/500x500/products/mealsforone/boxmeals/TRBM.jpg",
        name: "TRILOGY BOX MEAL",
        kcal: 1000,
        price: 17,
        category: "kfc",
    },
    {
        id: 15,
        name: "Vanilla",
        kcal: 200,
        price: 2,
        category: "ice_cream",
        img:"https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Ice-Cream.webp"
    },

    {
        id: 16,
        name: "Chocolate",
        kcal: 200,
        price: 2,
        category: "ice_cream",
        img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-of-chocolate-ice-cream.webp"
    },

    {
        id : 17,
        name: "Chocolate Chip",
        kcal :200 ,
        price:2 ,
        category: "ice_cream",
        img:"https://insanelygoodrecipes.com/wp-content/uploads/2020/07/bowl-of-chocolate-chip-ice-cream.webp"
    },

    {
        id : 18,
        name: " Butter Pecan",
        kcal :200 ,
        price:2 ,
        category: "ice_cream",
        img:"https://insanelygoodrecipes.com/wp-content/uploads/2020/06/butter-pecan-ice-cream.webp"
    },

    {
        id : 19,
        name: " Eggnog",
        kcal :200 ,
        price:2 ,
        category: "ice_cream",
        img:"https://insanelygoodrecipes.com/wp-content/uploads/2020/07/eggnog-ice-cream-with-cinnamon.webp"
    },

    {
        id: 20,
        name: "Strawberry",
        kcal: 200,
        price: 2,
        category: "ice_cream",
        img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-Of-Strawberry-Ice-Cream.webp"
    },

    {
        id: 21,
        name: "Horchata",
        kcal: 200,
        price: 2,
        category: "ice_cream",
        img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Horchata-ice-cream-with-cinnamon.webp"
    },
    {
        id: 22,
        name: "Peking Roasted Duck",
        kcal: 100,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2021/12/d247e7d25b164b77841f6022_cut_750x400_39.webp",
        price: 15
    },
    {
        id: 23,
        name:"Kung Pao Chicken",
        kcal: 400,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2019/11/31acb7b302ec4b48b17443ed_cut_750x400_39.webp",
        price: 13
    },
    {
        id: 24,
        name:"Sweet and Sour Pork",
        kcal: 200,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2019/11/a4ad4a7fe0cb401cb0be6383_cut_750x400_39.webp",
        price:18
    },
    {
        id: 25,
        name:"Hot Pot",
        kcal: 300,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_cut_750x400_39.webp",
        price: 20
    },
    {
        id: 26,
        name:"Dim Sum",
        kcal: 80,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2018/08/16d96371fd2944be86ffbdc1_cut_750x400_39.webp",
        price: 19
    },
    {
        id: 27,
        name:"Dumplings",
        kcal: 300,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_cut_750x400_39.webp",
        price: 13
    },
    {
        id: 28,
        name:"Ma Po Tofu",
        kcal: 50,
        category: "chinese",
        img: "https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_cut_750x400_39.webp",
        price: 8
    }

];



export {food};