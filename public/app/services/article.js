'use strict'

app
    .factory('articleService', function ($http) {
        
        return  {
            // then est une promesse prends trois entrée, la première en cas de succès, deuxième en cas d'erreur, 3ème en cours de la requête
            // sucess et error sont supprimés
            getArticles: function () {
                return $http.get('/articles').then(
                    function (response) { //success
                        return response.data;
                    },
                    function (response) {}, //error
                    function (response) {} // pending
                );
            },
            getArticle: function (id) {
                return $http.get('/articles/' + id).then(
                    function (response) { //success
                        return response.data;
                    },
                    function (response) {}, //error
                    function (response) {} // pending
                );
            },
            addArticle: function (article) {
                return $http.post('/articles', article);
            },
            updateArticle: function (article) {
                return $http.put('/articles/' + article.id, article);
            }
        }
    });