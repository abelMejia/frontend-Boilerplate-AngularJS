angular
.module('mainController', ['app.factory'])
.controller('mainController', mainController)

function mainController($scope, testFactory) {
	$scope.home = 'Home'
	$scope.services = 'Services'

	this.services = 'Directiva'

	//factory
	var say = testFactory.sayHello('Hello')
	console.log(say)
}

mainController.$inject = ['$scope', 'testFactory']