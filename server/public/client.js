const app = angular.module( 'apiApp', [] );

app.controller( 'apiController', [ '$http', function( $http ) {
    let vm = this;
    vm.welcome = "Welcome to my awesome SWAPI app!!!";
    
    
}]);