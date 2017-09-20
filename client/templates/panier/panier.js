Template.panier.helpers({
    //add you helpers here
    chosenProducts : function () {
        products = [];
        ChosenProducts.find({}).forEach(function (product) {
            products.push(Products.findOne(product.product_id))
        });
        return products;
    },
    errorLocation : function () {
        return Template.instance().errorLocation.get()
    },
    totalPrice : function () {
        let totalprice = 0
        ChosenProducts.find({}).forEach(function (product) {
            totalprice += Products.findOne({_id : product.product_id}).price * parseInt(product.quantity)
        });
        return totalprice;
    }
});

Template.panier.events({
    //add your events here

    'click [redirect-login]' : function (event) {
        event.preventDefault();
        Session.set("redirectToCart" , true);
        Router.go('login');
    },
    'click [finalize-command]' :function (event,instance) {
        event.preventDefault();
        let command = {
            user_id : Meteor.userId(),
            sendDate : new Date(),
            received : false,
            products : ChosenProducts.find().fetch(),
        };
         let deliveryAddress={};
        let addressOk =false;
        //check de la validité de l'adresse
        if(Session.get('isDatabaseAddress')){

            instance.errorLocation.set("");
            addressOk =true;
            deliveryAddress = {
                type:"Useraddress",
                location : {
                    address: Meteor.user().profile.address,
                    city: Meteor.user().profile.city,
                    zipCode: Meteor.user().profile.zipCode
                }
            };
            command.deliveryAddress = deliveryAddress;
        }else{
            if (isvalidAddress()) {
                instance.errorLocation.set("");
                addressOk =true;
                command.deliveryAddress = Session.get('deliveryAddress');
            } else {
                instance.errorLocation.set("Nous ne pouvons pas vous livrer à cette adresse");
                addressOk =false;
            }
        }

        if(addressOk){
            Commands.insert(command, function () {
            Router.go('history')
            });
        }
        console.log(command);
    }

});

Template.panier.onCreated(function () {
    //add your statement here
    this.errorLocation = new ReactiveVar();

});

Template.panier.onRendered(function () {
    //add your statement here
});

Template.panier.onDestroyed(function () {
    //add your statement here
});


function isvalidAddress() {
    deliveryAddress = Session.get('deliveryAddress');
    if(deliveryAddress && deliveryAddress.type === "address"){
        return !(isTooFar(parseInt(deliveryAddress.location.zipCode) ))
    }else if( deliveryAddress && deliveryAddress.type === "geoloc"){
        distance = new Haversine(44.144064799999995, 4.100226999999999, deliveryAddress.location.lat, deliveryAddress.location.lng);
        return distance.kilometers < 10;
    }else{
        return false
    }
}
function isTooFar(zipCode) {
    let validCodes = [30100, 30319,30104,30109,30107,30101,30313,30102,30105,30318,30112,30115,30106,30311,30103,30140,
        30480,30520,30340,30380,30110,30340,30560,30140,30340,30140,30340,30340,30340,30110,30360,30360,
        30140,30340,30110,30360];
    return $.inArray(zipCode, validCodes) === -1;
}