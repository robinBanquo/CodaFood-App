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

Template.registerHelper('carousselVisible', function (index) {
    return (index<3) ? "" : "hidden";
});

Template.registerHelper('showPrice', function (price) {
  let goodPrice =  price.toString().replace(".", "€");
    goodPrice =  goodPrice.replace("€5", "€50");
    if(goodPrice.indexOf("€") === -1){
      goodPrice += "€";
    }

  return goodPrice;
});