Commands =  new Meteor.Collection('commands');
Commands.allow({
    insert : function(){return !!Meteor.user()}
}
);