Meteor.publish('products', function () {
    return Products.find();
})

Meteor.publish('commands', function () {
    return Commands.find();
})