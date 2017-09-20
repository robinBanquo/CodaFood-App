Template.history.helpers({
    //add you helpers here
    commands : function () {
        console.log( Commands.find({'user_id' : Meteor.userId()}).fetch())
        return Commands.find({'user_id' : Meteor.userId()}).fetch()
    }
});

Template.history.events({
    //add your events here
});

Template.history.onCreated(function () {
    //add your statement here
});

Template.history.onRendered(function () {
    //add your statement here
});

Template.history.onDestroyed(function () {
    //add your statement here
});

