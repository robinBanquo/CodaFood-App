Template.deliveryAddress.helpers({
    //add you helpers here
    isDatabaseAddress : function () {
       return Session.get('isDatabaseAddress')
    },
    geolocActive : function () {
       return (Session.get('deliveryAddress').type === 'geoloc')?"btn-info": "btn-success";
    },
    addressActive : function () {
        return (Session.get('deliveryAddress').type === 'address')?"address-active": "";
    }
});

Template.deliveryAddress.events({
    //add your events here
    'submit form' : function (event) {
        event.preventDefault()
    },
    'click #database-address' : function () {
        Session.set('isDatabaseAddress', true );
    },
    'click #other-address' : function () {
        Session.set('isDatabaseAddress', false );
    },
    'click [geoloc]' : function (event) {
        event.preventDefault();
        let pos = {
            type:"geoloc",
            location : Geolocation.latLng()
        };
        Session.set('deliveryAddress', pos)
    },
    'keypress input , click form' :function () {
        let address = $('#address').val();
        let city = $('#city').val();
        let zipCode = $('#zipCode').val();
        deliveryAddress = {
            type:"address",
            location : {
                address: address,
                city: city,
                zipCode: zipCode
            }
        };
        Session.set('deliveryAddress', deliveryAddress);
    }
});

Template.deliveryAddress.onCreated(function () {
    //add your statement here
    Session.set('isDatabaseAddress', true );
});


Template.deliveryAddress.onRendered(function () {
    //add your statement here
});

Template.deliveryAddress.onDestroyed(function () {
    //add your statement here
});

