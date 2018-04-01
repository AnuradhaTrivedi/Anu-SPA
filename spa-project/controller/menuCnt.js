
singhApp.controller('mainCntl', function($scope) {

// To set menu name and url on menu
$scope.menuItem = [
{name: 'Blog', url: 'home'},
{name: 'Gallery', url: 'gal'},
{name: 'Form', url: 'form'},
{name: 'Directive', url: 'dir'}
];

// To set active class on menu
$scope.activeM = $scope.menuItem[0];
$scope.setActive = function(menuItem){
    $scope.activeM = menuItem;
}

});// mainCntl ends here



