$( document ).ready(function() {

  var thermo = new Thermostat();

  $('#temp_reading').html(thermo._temperature);

  $( "#up" ).click(function(){
    thermo.up();
    $('#temp_reading').html(thermo._temperature);
  });

  $( "#down" ).click(function() {
    thermo.down();
    $('#temp_reading').html(thermo._temperature);
  });

  $( "#reset" ).click(function() {
    thermo.reset();
    $('#temp_reading').html(thermo._temperature);
  });

  $( "#psm_on" ).click(function() {
    thermo.powerSavingModeOn();
  });

  $( "#psm_off" ).click(function() {
    thermo.powerSavingModeOff();
  });

  $( "#energy_usage1" ).click(function() {
    $("#current_energy_usage").html(thermo.energy_usage());
    $("#current_energy_usage").css('color', function() {
       if (thermo._temperature <= 17) {
           return 'green';
        }
        else if (thermo._temperature >= 18 && thermo._temperature <= 24) {
           return 'blue';
        }
        else if (thermo._temperature >= 24) {
           return 'red';
        }
    });
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function displayWeather(city) {
     var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
     var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
     var units = '&units=metric';
     $.get(url + token + units, function(data) {
     $('#city-temperature').text(data.main.temp);
    });
  }

});
