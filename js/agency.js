var myModule = angular.module('todo', []);

myModule.directive('sort', function() {
  return {
    restrict: 'E',
    scope: {
      name: "@",
      sort: "=",
	  
    },
	
    template: '<i class="fa fa-sort" ng-click="sort = name" ng-hide="sort == name || sort == \'-\'+name"></i><i class="fa fa-sort-desc" ng-click="sort = name" ng-show="sort == \'-\'+name"></i><i class="fa fa-sort-asc" ng-click="sort = \'-\'+name" ng-show="sort == name"></i>'
  };
});

myModule.controller('todo', ['$scope', function($scope) {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log($scope.name)

  $scope.tasks = [
  	{
  		done: "",
		name: "Finish Homework",
  		description: "Finish the GUI hw",
  		date: new Date()
  	},
  	{
  		done: "",
		name: "Sleep",
  		description: "Get 8 hours of sleep",
  		date: tomorrow
  	},
  	{
		done: "",
  		name: "Bake",
  		description: "Bake Jeffery a birthday cake",
  		date: tomorrow
  	}
  ];
  
  $scope.submit = function() {
    console.log("called");
	  console.log(this.date);
      var x = {done:"",name:$scope.name, description:$scope.description, date:$scope.date};
	  console.log(x);
      $scope.tasks.push(x);
      $scope.name = '';
      $scope.description = '';
      $scope.date = '';

  };
  $scope.done = function($index){
  		console.log($index);
		console.log($scope.tasks[$index]);
		$scope.tasks[$index].done = "done";
		console.log($scope.tasks[$index]);
  };
   
}]);
// JavaScript Document