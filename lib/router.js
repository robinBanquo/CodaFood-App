Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
    waitOn: function() {
    return [Meteor.subscribe('products'), Meteor.subscribe('commands')]
  }
});

Router.route('/',{
  name: "home"
});

Router.route('/login',{
    name: "login"
});

Router.route('/subscribe',{
    name: "subscribe"
});

Router.route('/panier',{
    name: "panier"
});
Router.route('/history',{
    name: "history"
});