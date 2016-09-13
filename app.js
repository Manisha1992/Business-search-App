var myApp = angular.module("myApp", ['ngRoute']);
myApp.config(['$routeProvider', function ($routeProvider) {
         $routeProvider
             .when('/', {
                 templateUrl:'templates/home.html'
             }).when('/:menuName', {
                 templateUrl:'templates/view-data.html',
                 controller: 'viewDataCtrl'
             })     
             .otherwise({redirectTo: '/'});
     }]);

myApp.controller("MainController", function($scope, $location){
	$scope.find = function () {
		$scope.data = [];
		$scope.data.push(angular.element('#search').val());
		$scope.data.push(angular.element('#city').val());

		if ($scope.data[0] != "Search item" && $scope.data[0] != '') {
			$location.path('/' + $scope.data);
		}
	}
})
