$(document).ready(function() {
  $('buttonRun').click(function() {
    $.get(
      {

        url: "http://localhost/findnearbyplacename/libs/php/findnearbyplacename.php",
        data: {
          $lat: $('lat').val(),
          $lng: $('lng').val()
        },
        success: function(result){
          $('div1').html('HEYYEYEYEY')
        }
      },)
  });
});
