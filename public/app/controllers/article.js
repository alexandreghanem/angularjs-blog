'use strict';

app
    .controller('articlesController', function ($scope, $location, articleService) {
        $scope.breadcrumbs = [];
        $scope.breadcrumbs.push({
            title: 'Blog',
            path: $location.path(),
            active: false
        });
        $scope.breadcrumbs.push({
            title: 'Liste des articles',
            path: $location.path(),
            active: true
        });
    
        articleService.getArticles().then(
            function (data) {
                $scope.articles = data;
            }
        );

        console.log('List Articles Controller has been executed');
    })
    .controller('showArticleController', function ($scope, articleService, $location, $routeParams) {
        $scope.breadcrumbs = [];
        $scope.breadcrumbs.push({
            title: 'Blog',
            path: $location.path(),
            active: false
        });
        $scope.breadcrumbs.push({
            title: 'Article',
            path: $location.path(),
            active: true
        });
    
        var id =$routeParams.id;
        articleService.getArticle(id).then(
            function (data) {
                $scope.article = data;
            }            
        );
    
        console.log('Show Article Controller has been executed');
    })
    .controller('addArticleController', function ($scope, articleService, $location) {
        $scope.breadcrumbs = [];
        $scope.breadcrumbs.push({
            title: 'Blog',
            path: $location.path(),
            active: false
        });
        $scope.breadcrumbs.push({
            title: 'Ajout d\'article',
            path: $location.path(),
            active: true
        });

        $scope.save = function (form, article) {
            if (form.$valid) {
                articleService.addArticle(article);
                $location.path('/blog/articles');
            }
        };
    
        console.log('Add Article Controller has been executed');
    })
    .controller('updateArticleController', function ($scope, articleService, $location, $routeParams) {
        $scope.breadcrumbs = [];
        $scope.breadcrumbs.push({
            title: 'Blog',
            path: $location.path(),
            active: false
        });
        $scope.breadcrumbs.push({
            title: 'Edition d\'article',
            path: $location.path(),
            active: true
        });
    
        var id =$routeParams.id;
        articleService.getArticle(id).then(
            function (data) {
                $scope.article = data;
            }            
        );
    
        $scope.save = function (form, article) {
            if (form.$valid) {
                articleService.updateArticle($scope.article);
                $location.path('/blog/articles');
            }
        }

        console.log('Update Article Controller has been executed');
    });