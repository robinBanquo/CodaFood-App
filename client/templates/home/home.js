Template.home.helpers({
    //add you helpers here
    categories: [
        {name: "Pizzas",
            src:"Pizzas.png"},
        {name: "Burgers",
            src:"Burgers.png"},
        {name: "Salades",
            src:"Salades.png"},
        {name: "Boissons",
            src:"Boissons.png"},
        {name: "Desserts",
            src:"Desserts.png"}

    ],
    selectedCategory: function(){
        return selectedCategory.get()}

});

Template.home.events({
    'category-header click': function (e) {
        selectedCategory.set("");
    }
});

Template.home.onCreated(function () {
    //add your statement here
    selectedCategory = new ReactiveVar("invisible")
});

Template.home.onRendered(function () {
    //add your statement here
});

Template.home.onDestroyed(function () {
    //add your statement here
});

