// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
  $('#sizePicker').submit(function makeGrid(event){
    event.preventDefault();
    $('tr').remove();
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    for (var i=1; i <= height; i++){
      $('#pixelCanvas').append('<tr></tr>');
      for (var j=1; j <= width; j++){
        $('tr:last').append('<td></td>');
      }
    }

  $('td').click(function(){
  var color = $('#colorPicker').val();
    $(this).css('background-color', color);
  });
  });
});

  // Your code goes here!
