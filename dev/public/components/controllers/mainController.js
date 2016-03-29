angular
.module('mainController', ['app.factory'])
.controller('mainController', mainController)

function mainController($scope, testFactory) {
	$scope.home = 'Home'
	$scope.services = 'Services'

	this.services = 'Directiva'

	//FACTORY
	testFactory
	.sayHello()
	.then(function(data) { console.log(data) })
	.catch(function(err) { console.log(err) })
}

mainController.$inject = ['$scope', 'testFactory']