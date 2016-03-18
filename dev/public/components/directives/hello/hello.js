angular
.module('Hello', [])
.directive('helloWorld', function() {
	return {
		replace: true,
		controller: 'mainController as main',
		template: '<div><h1>{{main.services}}</h1></div>'
	}

})