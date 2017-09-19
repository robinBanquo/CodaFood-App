Template.header.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();
    
    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
    });
    
    return active && 'active';
  },
    nbOfItem : function () {
        let count = 0;

        ChosenProducts.find().forEach( function (product) {
            count += parseInt(product.quantity)
        });

        return count === 0 ? false : count;
    },
    showHistoryLink : function () {
        return Meteor.user() && (Commands.find({}, {user_id : Meteor.userId()}).count() !== 0)
    }
});
Template.header.events({
    "click [disconnect]" : function (event, instance) {
        event.preventDefault();
        console.log("ddqdqdq")
        Meteor.logout(function () {
            Router.go("home")
        })
    }
})