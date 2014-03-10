app.controller('myController', function($scope){
	$scope.todo = '';
	$scope.list = ['Learn Angular'];

	$scope.addToList = function() {
		$scope.list.push($scope.todo); 
		$scope.list; 
		console.log($scope.list);
	}
});