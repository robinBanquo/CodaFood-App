Template.subscribe.helpers({
    //add you helpers here
    zipCode : function () {
        return Session.get("zipCode");
        console.log(Session.get("zipCode"));
    },
    error : function () {
        return Template.instance().error.get();
    }
});

Template.subscribe.events({
    //add your events here
    'submit .subscribe-form' : function (event, instance) {
        event.preventDefault();

        let lastName = event.target.lastName.value;
        let firstName = event.target.firstName.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let phone = event.target.phone.value;
        let address = event.target.address.value;
        let city = event.target.city.value;
        let zipCode = parseInt(event.target.zipCode.value);
        if (isTooFar(zipCode)){
            instance.error.set("Vous habitez trop loin pour pouvoir beneficier de nos services")
        }
        else {
            Accounts.createUser({
                username: firstName + " " + lastName,
                email: email,
                password: password,
                profile: {
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    address: address,
                    city: city,
                    zipCode: zipCode
                }
            }, function (error) {
                if(error){
                    instance.error.set("il y a une erreur dans le formulaire");
                }else{
                    Router.go("home");
                }
            })
        }
    }
});

Template.subscribe.onCreated(function () {
    //add your statement here
    this.error = new ReactiveVar("")
});

Template.subscribe.onRendered(function () {
    //add your statement here
});

Template.subscribe.onDestroyed(function () {
    //add your statement here
});
function isTooFar(zipCode) {
    var validCodes = [30100, 30319,30104,30109,30107,30101,30313,30102,30105,30318,30112,30115,30106,30311,30103,30140,
        30480,30520,30340,30380,30110,30340,30560,30140,30340,30140,30340,30340,30340,30110,30360,30360,
        30140,30340,30110,30360];
    return $.inArray(zipCode, validCodes) === -1;
}
