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