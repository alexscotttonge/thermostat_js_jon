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
           return 'orange';
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


// $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=560af2d8a5d3aa69f69a24cdcd57f6f1&units=metric', function(data) {
//   $('#current-temperature').text(data.main.temp);
// });

//   $('#select-city').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp);
//   });
// });
