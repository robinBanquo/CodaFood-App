Template.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

Template.registerHelper('showCategoryMobile', function (currentCategory, selectedCategory) {
    return (currentCategory === selectedCategory)? "": "hidden";

});

Template.registerHelper('isItemActive', function (index) {
    return (index == 0) ? "active" : "";
});

Template.registerHelper('showPrice', function (price) {
  return goodprice(price);
});

Template.registerHelper('nameOfProduct', function (productId) {
    return Products.findOne({_id : productId}).name
});

Template.registerHelper('subTotalPrice', function (productId , quantity) {
    return goodprice(Products.findOne({_id : productId}).price * parseInt(quantity));
});

function goodprice(price) {
    let goodPrice = price.toString().replace(".", "€");
    goodPrice = goodPrice.replace("€5", "€50");
    if (goodPrice.indexOf("€") === -1) {
        goodPrice += "€";
    }
    return goodPrice;
}