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
        return Template.instance().selectedCategory.get()}

});

Template.home.events({
    'click .category-header': function (event, template) {

        template.selectedCategory.set("fsff");
        console.log(template.selectedCategory.get())
    }
});

Template.home.onCreated(function () {
    //add your statement here
    this.selectedCategory = new ReactiveVar("invisible")
});

Template.home.onRendered(function () {
    //add your statement here
});

Template.home.onDestroyed(function () {
    //add your statement here
});

