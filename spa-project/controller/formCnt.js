// Form Page Controller Starts
singhApp.controller('formObj', dVal);
singhApp.service('sService',customService);

function dVal($scope,sService) {
    $scope.cService = sService;
    $scope.dataSubmit = function(){alert("I am working");}
}

function customService(){
    this.mobile = '';
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.adrs = '';
    var dt = new Date();
    this.TodayDateTime = dt.toDateString();
}
