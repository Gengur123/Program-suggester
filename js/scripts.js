$(document).ready(function() {
  var count_python = 0;
  var count_ruby = 0;
  var count_java = 0;
  function checkAnswer(answer){
    if (answer === "fun"){
      count_python += 1;
    }
    else if (answer === "job"){
      count_ruby += 1;
    }
    else if (answer === "yikes"){
      count_java += 1;
    }
  }

  $("form#Q1").submit(function(event) {
    event.preventDefault();
    const a1 = $("input:radio[name=a1]:checked").val();
    checkAnswer(a1)
    console.log(count_java + ", " + count_ruby + ", " + count_python)
    $("#Q1").hide();
    $("#Q2").show();
  });

  $("form#Q2").submit(function(event) {
    event.preventDefault();
    const a2 = $("input:radio[name=a2]:checked").val();
    checkAnswer(a2)
    console.log(count_java + ", " + count_ruby + ", " + count_python)
  $("#Q2").hide();
  $("#Q3").show();
  });

  $("form#Q3").submit(function(event) {
    event.preventDefault();
    const a3 = $("input:radio[name=a3]:checked").val();
    checkAnswer(a3)
    console.log(count_java + ", " + count_ruby + ", " + count_python)
  $("#Q3").hide();
  $("#Q4").show();
  });

  $("form#Q4").submit(function(event) {
    event.preventDefault();
    const a4 = $("input:radio[name=a4]:checked").val();
    checkAnswer(a4)
    console.log(count_java + ", " + count_ruby + ", " + count_python)
  $("#Q4").hide();
  $("#Q5").show();
  });

  $("form#Q5").submit(function(event) {
    event.preventDefault();
    const a5 = $("input:radio[name=a5]:checked").val();
    checkAnswer(a5)
    console.log(count_java + ", " + count_ruby + ", " + count_python)
  });
});