angular
.module('app.factory', [])
.factory('testFactory', appFactory)

function appFactory($http, $q){
    return {
        sayHello: function(){
        	var defered = $q.defer()
        	var promise = defered.promise

          	$http
          	.get('components/data/say.json')
          	.success(function (data) {
				defered.resolve(data)
			})
			.error(function(err) {
				defered.reject(err)
			})

			return promise

        }  
    }               
}