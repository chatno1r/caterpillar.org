angular.module("Caterpillars", ["ngRoute", "ngResource", "Caterpillars.controllers", "Caterpillars.services", "Caterpillars.factories", "ui.unique"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .when("/contact", {
        templateUrl: "views/contact.html"
    })
    .when("/bugs", {
        templateUrl: "views/bugs.html",
        controller: "BugsController"
    })
    .when("/la", {
        templateUrl: "views/la.html",
        controller: "LaController"
    })
    .when("/la/arc", {
        templateUrl: "views/families/la/arc.html"
    })
    .when("/la/gel", {
        templateUrl: "views/families/la/gel.html"
    })
    .when("/la/geo", {
        templateUrl: "views/families/la/geo.html"
    })
    .when("/la/noc", {
        templateUrl: "views/families/la/noc.html",
        controller: "LaNocController"
    })
    .when("/la/sph", {
        templateUrl: "views/families/la/sph.html"
    })
    .when("/cr", {
        templateUrl: "views/cr.html"
    })
    .when("/cr/lim", {
        templateUrl: "views/families/cr/lim.html",
        controller: "CrLimController"
    })
    .when("/misc", {
        templateUrl: "views/misc.html"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);