app.controller('myController', function($scope){
	$scope.todo = '';
	$scope.list = ['Learn Angular'];

	/* addToList function on myController */
	$scope.addToList = function() {
		$scope.list.push($scope.todo); 
		$scope.list; 
		// console.log($scope.list);
	}
});