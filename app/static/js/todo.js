/*
  blatent rippoff, source ~ http://angularjs.org/#todo-js 
*/
angular.module('bigbox', ['ui.bootstrap']);
function TodoCtrl($scope) {
    $scope.commands = ['!ddg', '!duckduckgo', '!twit', '!twitter', ':clr', ':clear',':h',
                       ':help', ':img', ':loc', ':local', ':per', ':person', ':q', 
                       ':query', ':sav', ':save', ':url', ':w', ':words'];
    $scope.todos = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}];
     
        $scope.addTodo = function() {
        if ( $scope.todoText ) {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        }
    };
     
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };
     
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}
