const express = require( 'express' );
const app = express();

app.use( express.static( 'server/public' ) );
const port = process.env.PORT || 5000;

app.listen( port, function( req, res ) {
    console.log( 'Listening on port ', port );
})