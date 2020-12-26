$(document).ready(function() {
  $('buttonRun').click(function() {
    $.ajax(
      {
        type: "POST",
        url: "http://localhost/findnearbyplacename/libs/php/findnearbyplacename.php",
        data: {
          lat: $('#lat').val(),
          lng: $('#lng').val(),
        },
        success: function(result){
          console.log(result);

          $('#div1').html(result['data'][0]['distance'])
        }
      },)
  });
});
