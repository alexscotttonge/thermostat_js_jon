$( document ).ready(function() {

  $('#temp_reading').html(thermo._temperature);

  $( "#firebutton" ).click(function() {
    $( "#weirdgif" ).toggle();
  })

  $( "#up" ).click(function(){
    thermo.up();
    $('#temp_reading').html(thermo._temperature);
  })

  $( "#down" ).click(function() {
    thermo.down();
    $('#temp_reading').html(thermo._temperature);
  })

  $( "#reset" ).click(function() {
    thermo.reset();
    $('#temp_reading').html(thermo._temperature);
  })

  $( "#psm_on" ).click(function() {
    thermo.powerSavingModeOn();
  })

  $( "#psm_off" ).click(function() {
    thermo.powerSavingModeOff();
  })

  $( "#energy_usage1" ).click(function() {
     $("#current_energy_usage").html(thermo.energy_usage());
  })

})


$( "#weirdgif" ).hide();
