$('#btnRun').click(function() {
  $.ajax(
    {
      method: "POST",
      url: "libs/php/findnearbyplacename.php",
      data: {
        lat: $('#lat').val(),
        lng: $('#lng').val(),
      },
      success: function(result){
        console.log(result['data']);

        $('#div1').html(result['data'][0]['distance']);
        // $('#timezone').html(result['data'][0][1]['timeZoneId']);
        $('#countryCode').html(result['data'][0]['countryCode']);
        $('#countryName').html(result['data'][0]['countryName']);
        $('#fclName').html(result['data'][0]['fclName']);
        $('#continentCode').html(result['data'][0]['continentCode']);
        $('#timezone').html(result['data'][0]['timezone']['timeZoneId']);



      },
       error: function(jqXHR, textStatus, errorThrown){
        // error code
        console.log("we have reached error ");


       }
    });
});
