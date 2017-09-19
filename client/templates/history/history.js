Template.history.helpers({
    //add you helpers here
    commandes : function () {
        console.log(Commands.find({}, {fields:{'user_id' : Meteor.userId()}, sort : {sendDate : 1}}).fetch())
        return Commands.find({}, {fields:{'user_id' : Meteor.userId()}, sort : {sendDate : 1}}).fetch()
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

