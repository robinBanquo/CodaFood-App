Template.prod.helpers({
    //add you helpers here
    notInChosenProduct : function () {
        return ChosenProducts.find({product_id : this._id}).count() === 0
    },
    quantity : function () {
        let product = ChosenProducts.findOne({product_id : this._id} );

        return product.quantity
    }

});

Template.prod.events({
    //add your events here
    "click .command-prod" : function (event, instance) {
        ChosenProducts.insert({
            product_id : this._id,
            quantity : 1
        })
    },
    "click .add-prod" : function () {
        ChosenProducts.update({product_id : this._id}, {
            $inc : {quantity : 1}
        })
    },
    "click .subs-prod" : function () {
        if(ChosenProducts.findOne({product_id : this._id} ).quantity === 1){
            ChosenProducts.remove({product_id : this._id});
        }else{
            ChosenProducts.update({product_id : this._id}, {
                $inc : {quantity : -1}
            })
        }
    }
});

Template.prod.onCreated(function () {
    //add your statement here

});

Template.prod.onRendered(function () {
    //add your statement here
});

Template.prod.onDestroyed(function () {
    //add your statement here
});

