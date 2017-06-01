"use strict";

var app = angular.module("App", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: "../partials/navbar.html",
        controller: "NavCtrl"
    })
    .otherwise('/');
});
