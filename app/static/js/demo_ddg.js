var bigbox = angular.module('bigbox', ['ngResource'])
bigbox.factory('Search', function ($resource) {
    return $resource('http://127.0.0.1\\:8081/bb/api/v1.0/d/:term', {}, {
        query: {
            method: 'GET',
            isArray: false,
            params: {
                term: "term"
            }
        }
    });
});

function BigboxCtrl($scope, Search) {
    $scope.term = "";
    $scope.thumbs = 'icon-globe';
    $scope.search = function(term) {
        Search.get({term: term}, 
        function(results) {
            $scope.term = term;
            $scope.results = results;
            if (results.d === false) {
                $scope.thumbs = 'icon-thumbs-down';
            } else {
                $scope.thumbs = 'icon-thumbs-up';
            }
        });
    }
}



