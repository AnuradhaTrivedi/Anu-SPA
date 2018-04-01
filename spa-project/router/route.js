var singhApp = angular.module("singhApp", ['ui.router']);



singhApp.config(function($stateProvider, $urlRouterProvider){
  
  // For any unmatched url, send to /home
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "view/home.html"
    })
    .state('gal', {
        url: "/gal",
        templateUrl: "view/gallery.html"
    })
    .state('form',{
        url: "/form",
        templateUrl: "view/form.html"
    })
    .state('dir',{
        url: "/dir",
        templateUrl: "view/directive.html"
    })

})