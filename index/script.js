$( document ).ready( function() {
$.ajax( {
url: "https://lit-fortress-6467.herokuapp.com/object"
} ).done( function( data ) {
var arr = data.results;
var int = [];

// Data.results.reduce( function( acc, curr, i, arr ) {
  while ( int.length < 3 ) {
    var min = 0;
    var max =  arr.length;
    var num = ( Math.floor( Math.random() * ( max - min ) ) );
    if ( !( int.includes( arr[ num ] ) ) ) {
      int.push( arr[ num ] );
    }
  }

// }, 0 );
int.forEach( function( f ) {

  $( ".dickshoe Mcgees" ).append( `
      <div class="album_item">
        <img class='album_img' src="../images/${f.cover_art}">
      </div>



  ` );
} );
} );
} );
