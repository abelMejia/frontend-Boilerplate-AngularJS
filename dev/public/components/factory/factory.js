angular
.module('app.factory', [])
.factory('testFactory', appFactory)

function appFactory(){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }  
    }               
}
