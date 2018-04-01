//calculator controller and service @Harkanwal Singh

singhApp.controller('calcCnt', calCnt);

function calCnt($scope, calFactry, calService){

	//factory implementation starts	
	$scope.add = function(){
		$scope.result = calFactry.sumF($scope.a, $scope.b);
	};

	//Service implementation starts	
	$scope.cal = calService;

	$scope.subtract = function(){
		$scope.result = $scope.cal.minus($scope.a, $scope.b);
	};

	$scope.multiply = function(){
		$scope.result = $scope.cal.multi ($scope.a, $scope.b);
	};

	$scope.devision = function(){
		$scope.result = $scope.cal.devision($scope.a, $scope.b);
	};
};

// calculator service function
singhApp.service('calService', calSrv);
function calSrv(){
	this.sum = function(a,b){
		return a+b;
	};
	this.minus = function(a,b){
		return a-b;
	};
	this.multi = function(a,b){
		return a*b;
	};
	this.devision = function(a,b){
		return a/b;
	}
}

singhApp.factory('calFactry', function(){

	var thisfact = {};
	thisfact.sumF = function(a,b){
		return a+b;
	}
	return thisfact;
});

