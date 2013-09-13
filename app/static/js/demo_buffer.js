var bigbox = angular.module('bigbox', ['ngResource'])
bigbox.factory('Search', function ($resource) {
    return $resource('http://127.0.0.1\\:8081/bb/api/v1.0/e/:term', {}, {
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
    $scope.show = "";
    $scope.bufferText = "";
    $scope.search = function(term) {
        Search.get({term: term}, 
        function(results) {
            $scope.show = term;
            $scope.results = results;
            if (term.length > 0) {
                $scope.bufferText = results.e[0].line;
            } else {$scope.bufferText = "";}
        });
    }
    $scope.entryText = "";
}


