var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    
  $routeProvider
    .when("/", {
      templateUrl: "index.html",
      controller: "LawwaController",
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: "LawwaController",
    })
    .when("/loggedIn", {
        templateUrl: "loggedIn.html",
        controller: "LawwaController",
      })
    .when("/employees", {
      templateUrl: "admin.employee.html",
      controller: "LawwaController",
    })
    .when("/registry", {
      templateUrl: "admin.registry.html",
      controller: "LawwaController",
    })
    .otherwise({
      redirectTo: "/login",
    });
});
