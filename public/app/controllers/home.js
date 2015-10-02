'use strict';

app
    .controller('homeController', function ($scope, $location) {
        $scope.breadcrumbs = [];
        $scope.breadcrumbs.push({
            title: 'Accueil',
            path: $location.path(),
            active: true
        });
    
        console.log('Home Controller has been executed');
    });