$(document).ready(function() {
  $("form#Q1").submit(function(event) {
    event.preventDefault();
  $("#Q1").hide();
  $("#Q2").show();
  });
  $("form#Q2").submit(function(event) {
    event.preventDefault();
  $("#Q2").hide();
  $("#Q3").show();
  });
  $("form#Q3").submit(function(event) {
    event.preventDefault();
  $("#Q3").hide();
  $("#Q4").show();
  });
  $("form#Q4").submit(function(event) {
    event.preventDefault();
  $("#Q4").hide();
  $("#Q5").show();
  });
});