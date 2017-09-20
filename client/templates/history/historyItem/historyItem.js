Template.historyItem.helpers({
    //add you helpers here
    date : function(){
        let d = this.sendDate;
        dformat = [d.getMonth()+1,
                d.getDate(),
                d.getFullYear()].join('/')+' à '+
            d.getHours() +'h'+
                d.getMinutes()
        return dformat;
    },
    totalPrice : function () {
        let totalprice = 0
        this.products.forEach(function (product) {
            totalprice += Products.findOne({_id : product.product_id}).price * parseInt(product.quantity)
        });
        return totalprice;
    },
    products : function () {
        let productsFormated = []
        this.products.forEach(function (product) {
            let productFormated = {
                quantity: product.quantity,
                detail : Products.findOne({_id : product.product_id})
            };
            productsFormated.push(productFormated);
        })
        return productsFormated
    },
    bgReceived : function () {
        return this.received ?  "":'bg-received' ;
    },
    isOpenPanel: function () {
        return this.received ? "" : "in";
    }
});

Template.historyItem.events({
    //add your events here
});

Template.historyItem.onCreated(function () {
    //add your statement here
});

Template.historyItem.onRendered(function () {
    //add your statement here
});

Template.historyItem.onDestroyed(function () {
    //add your statement here
});

