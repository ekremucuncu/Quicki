$("#phone").click(function() {
  $('#phone-desktop').attr("src","images/iphone.png");
  $('#phone').css("background-color","#fff");
  $('#desktop').css("background-color","");
});

$("#desktop").click(function() {
  $('#phone-desktop').attr("src","images/desktop.png");
  $('#desktop').css("background-color","#fff");
  $('#phone').css("background-color","");
});

$( "#click" ).click(function() {
  var turn = $(this).attr("class").charAt($(this).attr("class").length - 1);
  if (turn=="1"){
    var left1=$( "#box1" ).position().left;
    var left2=$( "#box2" ).position().left;
    var distance = left2-left1;
    var double = 2*distance;
    $('#box1').fadeOut(10).promise().done(function(){
      $("#box1").animate({ "left": "+="+double+"px"},"slow");
      $('#box1').fadeIn(100);
      $( "#box2" ).animate({ "left": "-="+distance+"px"},"slow");
      $( "#box3" ).animate({ "left": "-="+distance+"px"},"slow");
    });
  }

  if (turn=="2"){
    var left1=$( "#box2" ).position().left;
    var left2=$( "#box3" ).position().left;
    var distance = left2-left1;
    var double = 2*distance;
    $('#box2').fadeOut(10).promise().done(function(){
      $("#box2").animate({ "left": "+="+double+"px"},"slow");
      $('#box2').fadeIn(100);
      $( "#box3" ).animate({ "left": "-="+distance+"px"},"slow");
      $( "#box1" ).animate({ "left": "-="+distance+"px"},"slow");
    });
  }

  if (turn=="3"){
    var left1=$( "#box3" ).position().left;
    var left2=$( "#box1" ).position().left;
    var distance = left2-left1;
    var double = 2*distance;
    $('#box3').fadeOut(10).promise().done(function(){
      $("#box3").animate({ "left": "+="+double+"px"},"slow");
      $('#box3').fadeIn(100);
      $( "#box1" ).animate({ "left": "-="+distance+"px"},"slow");
      $( "#box2" ).animate({ "left": "-="+distance+"px"},"slow");
    });
  }

  var new_turn = parseInt(turn) + 1;
  if (new_turn==4){
    new_turn=1;
  }
  $(this).attr("class","btn btn-primary "+new_turn)
});
