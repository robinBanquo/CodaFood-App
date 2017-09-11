Template.home.helpers({
    //add you helpers here
    //on rentre un tableau de catégories pour faire un affichage
    // dynamique de celles ci et de leurs logos associées
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
    //permet de savoir quelle catégorie est selectionée
    selectedCategory: function(){
        return Template.instance().selectedCategory.get()},
    //liste racourcie des produits suivant la categorie selectionée
    shownProducts: function () {
        return Template.instance().shownProducts.get()
    }
});

Template.home.events({
    'click .category-header, mouseenter .category-header': function (event, instance) {
        //on recupere la valeur de l'id de la catégorie recherchée
        let category = event.currentTarget.id;
        //puis on la passe a la réactive var
        instance.selectedCategory.set(category);
        //on recupere aussi les articles de la catégorie
        let products = Products.find({category : category} );
        //puis on remplis la réactive var
        instance.shownProducts.set(products);

        $(".category-header").css("padding-bottom", "50px");
        $(".category-header").css("margin-bottom", "10px");

        $(event.target).css("padding-bottom", "60px");
        $(event.target).css("margin-bottom", "0");
    }


});

Template.home.onCreated(function () {
    //add your statement here
    //on crée au lancement deux réactive var pour nous aider
    this.selectedCategory = new ReactiveVar("invisible");
    this.shownProducts = new ReactiveVar([]);
});

Template.home.onRendered(function () {
    //add your statement here
});

Template.home.onDestroyed(function () {
    //add your statement here
});

