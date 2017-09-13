
ChosenProducts = new Mongo.Collection('chosenProducts', {connection: null});
Meteor.subscribe('chosenProducts')