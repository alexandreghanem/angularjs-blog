'use strict';

var app = angular
                .module("blogger", ["ngRoute"])
                .config(function ($routeProvider) {
                    $routeProvider
                        .when("/", {
                            controller: "homeController",
                            templateUrl: "views/home.html"
                        })
                        .when("/blog/articles", {
                            controller: "articlesController",
                            templateUrl: "views/articles/list.html"
                        })
                        .when("/blog/articles/show/:id", {
                            controller: "showArticleController",
                            templateUrl: "views/articles/show.html"
                        })
                        .when("/blog/articles/add", {
                            controller: "addArticleController",
                            templateUrl: "views/articles/form.html"
                        })                        
                        .when("/blog/articles/update/:id", {
                            controller: "updateArticleController",
                            templateUrl: "views/articles/form.html"
                        })
                        .otherwise({
                            redirectTo: "/"
                        });                    
                })
                .controller('frontController', function ($rootScope, $location) {
                    $rootScope.isActive = function (viewLocation) {
                        var active = (viewLocation === $location.path());
                        return active;
                    };
                });