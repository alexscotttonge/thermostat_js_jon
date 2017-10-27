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

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=560af2d8a5d3aa69f69a24cdcd57f6f1', function(data) {
  console.log(data.main.temp);
});

});
