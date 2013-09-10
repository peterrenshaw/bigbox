angular.module('bigbox', ['ui.bootstrap']);
function TodoCtrl($scope, $http) {
    // array of entries    
    $scope.entries = []; 
    $scope.icon = "icon-ok";
    $scope.status = "ready";

    /*
     #---
     # addEntry: add a entry command to the list
     #---
     */
    $scope.addTodo = function() {
        //var maxlen = $scope.entryText.length;
       $scope.command = $scope.entryText.substring(0,2);

       if ($scope.command === ':s') {
            // query icon to query area
           $scope.icon = "icon-ok-circle";
           $scope.status = "save";

           // generate new date
           var d = new Date();
           //$scope.bufferText = "";
           var maxlen = $scope.entryText.length;
           var line = $scope.entryText.substring(2, maxlen);
         
           if ( line.length > 0 ) {
               // add command to command list
               $scope.entries.push({line:line,
                                 length:$scope.entryText.length,
                                 datetime:d.getTime()});
           } else {
                $scope.icon = "icon-warning-sign";
                $scope.status = "enter something after the ':s', like ':s melbourne'";
           }
           // clear littlebox for new command
           $scope.entryText = '';

            // query the endpoints
        } else if ( $scope.command === ':q') {
           var term = $scope.entryText.substring(3, maxlen); // assumes space (split?)

           // message to status box area
           // imge button to status area - icon-ok
           $scope.icon = "icon-search";
           $scope.status = "search" + " for " + term;

           
        } else {
           $scope.icon = "icon-warning-sign";
           $scope.status = "you have to enter (:q or :s)";
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
