if(Products.find().count() === 0) {
    let categories = [
        {name : "Burgers",
        products : ["Simple Burger", "Bacon Burger", "Double Steakos","Chikenos Burger", "Fishto Burger", "Meteor Burger"],
            src:"b",
            minPrice: 5},
        {name :"Pizzas" ,
            products : ["Chevre-miel","Broco", "Peperony", "Magret", "Vegé", "Chorizo"],
            src:"order",
            minPrice: 8},
        {name :"Boissons" ,
            products : ["Coca", "CocaLight", "Coca-Zero", "Fanta", "Sprite", "IceTea" ],
            src:"bo",
            minPrice: 2},
        {name : "Desserts",
            products : ["Brownies", "Cup Choco", "Donuts", "Smootie","Sunday","Grosse Conne!"],
            src:"d",
            minPrice: 2},
        {name : "Salades",
            products : ["Poulet","Tofu","Tofu sans Tofu","poisson Pané", "Colin","Macaroni"],
            src:"sa",
            minPrice: 5}
        ];

    var products = [];

    for (let i = 0; i < categories.length; i++) {
        for (let j = 0 ; j<categories[i].products.length; j++){

            if(categories[i].name === "Boissons"){
                var price = 2
            }else{
                var price = categories[i].minPrice + (j+1)/2
            }
        products.push(
            {
                name: categories[i].products[j],
                category: categories[i].name,
                imgSrc: categories[i].src + (j+1) + ".png",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                price : price
            }
        )
        }
    }
    _.each(products, function (product) {
        Products.insert(product)
    })

    Accounts.createUser({
        username: "robin",
        email: "caramaschi@hotmail.com",
        password:"123456",
        profile: {
            firstName: "robin",
            lastName: "caramaschi",
            phone: "003838744",
            address: "address",
            city: "city",
            zipCode: 30100
        }
    })
}
