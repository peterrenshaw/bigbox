angular.module('bigbox', ['ui.bootstrap']);
function TodoCtrl($scope, $http) {
    // array of entries    
    $scope.entries = [];
    // list of commands in use
    $scope.commands = ['!ddg', '!duckduckgo', '!twit', '!twitter', ':clr', ':clear',':h',
                       ':help', ':img', ':loc', ':local', ':per', ':person', ':q', 
                       ':query', ':sav', ':save', ':url', ':w', ':words'];


    /*
     #---
     # addEntry: add a entry command to the list
     #---
     */
    $scope.addTodo = function() {
        if ( $scope.entryText ) {
            // generate new date
            var d = new Date();
            $scope.bufferText = "";
            
            // add command to command list
            $scope.entries.push({line:$scope.entryText,
                                 length:$scope.entryText.length,
                                 datetime:d.getTime()});

            // clear littlebox for new command
            $scope.entryText = '';

            // query the endpoints
            
        }
    };

    /*
     #---
     # remaining: count remaining entries in report
     #---
     */
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.entries, function(entry) {
            count += entry.done ? 0 : 1;
        });
        return count;
    };

    /*
     #---
     # remove: remove commands save in report
     #---
     */
    $scope.remove = function() {
        var oldEntries = $scope.entries;
        $scope.entries = [];
        angular.forEach(oldEntries, function(entry) {
            if (!entry.done) {
                $scope.entries.push(entry);
            }
        });
        return true;
    };
}
