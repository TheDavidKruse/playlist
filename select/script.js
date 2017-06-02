$( document ).ready( function() {
  $.ajax( { url: "https://lit-fortress-6467.herokuapp.com/object" } ).done( function( data ) {

    data.results.forEach( function( f ) {

      $( ".album_lists" ).append( `
      <div class="album_item">
        <img class='album_img' src="../images/${f.cover_art}">
      </div>
  ` );
      // ( "object" ).
    } );
    var f = data.results;
    var hold = [];
    $( "img" ).click( function() {
      var findMe = $( this ).attr( "src" ).slice( 10 );
      var thething = f.find( function( { cover_art } ) {
        return cover_art === findMe;
      } );
      hold.push( thething );
      $( ".track_list" ).append( `
<div class='track_info'>
  ${thething.artist} : ${thething.title}
</div>


` );
    } );
    $( "input[name=clear]" ).click( function() {
      $( ".track_list" ).empty();
    } );
    $( "input[name=submit]" ).click( function() {
      console.log( hold );
      $.ajax( { method: "POST", url: "https://lit-fortress-6467.herokuapp.com/post", data: hold } ).done( function( data ) {
        console.log( data );
      } );
    } );
  } );
} );
