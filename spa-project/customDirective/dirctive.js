// copyRight Directive Starts
singhApp.directive('copyRight',function (){
   // alert('i am copyRight');
   return{
   	template : "Copyright © 1996-2017 Harkanwal Singh All rights reserved."
   	//transclude: none,  // check on net
   }    
});

//********************************************************

// leftMenu Directive Starts
singhApp.directive('leftMenu', function(){

	var dir = {};
	dir.restrict = "AE";
	dir.templateUrl = "view/menu.html";
	return dir;
});

//**********************************************

