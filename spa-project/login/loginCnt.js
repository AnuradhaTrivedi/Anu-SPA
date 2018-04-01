
singhApp.controller('loginCnt', login);

//alert("Login controller works");

function login($scope, $http){
	$scope.userName = false;
	$scope.loginShow = function(){
		$scope.loginView = true;
	};
	$scope.loginClose = function(){
		$scope.loginView = false;
	};

	$scope.insertData = function(){ 
		//alert("start data inserting");
		$http.post(  
			"http://localhost/SLA/SLA-Angular/prj-SPA/13-8-17/spa-project/login/insert.php",  
			{'firstname':$scope.firstname, 'lastname':$scope.lastname}  
			).success(function(data){  
				//alert(data);  
				$scope.firstname = $scope.firstname;  
				$scope.lastname = $scope.lastname;
				$scope.loginView = false;  //to close the login
				$scope.userName = true;
			});  
		};  


};