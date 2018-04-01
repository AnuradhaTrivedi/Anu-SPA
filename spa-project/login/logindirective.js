
//login form directive Starts

singhApp.directive('login', login);

function login(){
	var login ={};
	login.templateUrl = "login/login.html";
	login.controller = "loginCnt";
	return login;

}