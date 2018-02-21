(function(){

  angular
    .module("WearApp")
    .config(function($routeProvider){
      $routeProvider
      .when("/form", {
          template: "<form-component></form-component>"
      })
      .when("/welcome", {
          template: "<welcome-component></welcome-component>"
      })
      .otherwise({ redirectTo: "/welcome" });
  });


})();
