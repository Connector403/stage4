$(document).ready(function() {
  $('buttonRun').click(function() {
    $.ajax(
      {
        type: "POST",
        url: "libs/php/findnearbyplacename.php",
        data: {
          $lat: $('lat').val(),
          $lng: $('lng').val()
        },
        success: function(result){
          $('div1').html(result);
        }
      },)
  });
});
