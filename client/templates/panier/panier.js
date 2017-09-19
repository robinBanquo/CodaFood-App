Template.panier.helpers({
    //add you helpers here
    chosenProducts : function () {
        products = [];
        ChosenProducts.find({}).forEach(function (product) {
            products.push(Products.findOne(product.product_id))
        });
        return products;
    }
});

Template.panier.events({
    //add your events here

    'click [redirect-login]' : function (event) {
        event.preventDefault();
        Session.set("redirectToCart" , true);
        Router.go('login');
    }
});

Template.panier.onCreated(function () {
    //add your statement here
});

Template.panier.onRendered(function () {
    //add your statement here
});

Template.panier.onDestroyed(function () {
    //add your statement here
});

