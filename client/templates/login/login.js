Template.login.helpers({
    //add you helpers here
    goodDistance : function () {
        return Template.instance().goodDistance.get();
    },
    tooFar : function () {
        return Template.instance().tooFar.get();
    }
});

Template.login.events({
    //add your events here
    'click [geoloc]' : function (event, instance) {

        let pos = Geolocation.latLng();
        if(pos){
            distance = new Haversine(44.137760799999995, 4.0979358, pos.lat, pos.lng)
            if(distance.kilometers < 10 ){
                instance.goodDistance.set(true);
                instance.tooFar.set(false);
            }else{
                instance.tooFar.set(true);
                instance.goodDistance.set(false);
            }
        }
    },
    'submit .zipForm' :function (event, instance) {
        event.preventDefault();
        let zipCode = parseInt( event.target.zipCode.value);
        if( isTooFar(zipCode)){
            instance.tooFar.set(true);
            instance.goodDistance.set(false);
        }else{
            instance.goodDistance.set(true);
            instance.tooFar.set(false);
            Session.set("zipCode", zipCode);
        }
    },
    'click .inscription' : function () {
        Router.go("subscribe")
    },
    'submit [login]' : function (event,instance) {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        Meteor.loginWithPassword(email,password, function (error) {
            if(!error){
                if(Session.get('redirectToCart')){
                    Router.go("panier")
                }else{
                    Router.go("home")
                }

            }else{
                console.log(error)
            }
        });
    }
});

Template.login.onCreated(function () {
    //add your statement here
    this.tooFar = new ReactiveVar(false);
    this.goodDistance = new ReactiveVar(false);
});

Template.login.onRendered(function () {
    //add your statement here
});

Template.login.onDestroyed(function () {
    //add your statement here
});
function isTooFar(zipCode) {
    var validCodes = [30100, 30319,30104,30109,30107,30101,30313,30102,30105,30318,30112,30115,30106,30311,30103,30140,
        30480,30520,30340,30380,30110,30340,30560,30140,30340,30140,30340,30340,30340,30110,30360,30360,
        30140,30340,30110,30360];
    return $.inArray(zipCode, validCodes) === -1;
}
