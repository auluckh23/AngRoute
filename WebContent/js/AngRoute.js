var app = angular.module("AngRoute",['ngRoute']);

app.controller("homecont", function($scope){
	$scope.fdi=true;
	$scope.sdi=false;
	
	$scope.subs=function(){
		$scope.sdi=true;
		$scope.fdi=false;
		var dats = new Date();
		var hrs = dats.getHours();
		if(hrs < 12)
		{$scope.datey ="Morning"}
		else {$scope.datey ="Evening"}
	};
	
	$scope.changes=function(){
		$scope.fdi=true;
		$scope.sdi=false;
	};
	
});

app.controller("biocont", function(){
	
});

app.controller("contactcont", function(){
	
});

app.config(function($routeProvider){
	$routeProvider.when("/home",{
		templateUrl:"home.html",
		controller:"homecont"
	}).when("/bio",{
		templateUrl:"bio.html",
		controller: "biocont"
	}).when("/contact",{
		templateUrl:"contact.html",
		controller: "contactcont"
	}).otherwise({redirectTo: '/home'});
});