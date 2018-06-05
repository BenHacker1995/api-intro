const app = angular.module( 'apiApp', [] );

app.controller( 'apiController', [ '$http', function( $http ) {
    let vm = this;
    vm.welcome = "Welcome to my awesome SWAPI app!!!";
    vm.person = {};
    
    $http({
        method: 'GET',
        url: 'https://swapi.co/api/people/10'
    }).then( function( response ) {
        vm.person = response.data;
        console.log( 'Response from SWAPI ', response.data );
    }).catch( function( error ) {
        console.log( `Oh no! Error ${ error } occurred` );
    })
}]);