var array_color=["green","red","blue","yellow"];
var blink_color;
var color_seqn=[];
var i=0;
var j=1;
$("h1").removeClass("h");
restart();
function restart(){
  i=0;
  j=1;
  color_seqn=[];
  $(document).keypress(function(){
    $("body").removeClass("body-color");
    $("h1").removeClass("h");
      $("h1").text("Level 1");
    add_color();
  });
}

function add_color(){
  var n=Math.floor(Math.random()*4);
  blink_color=array_color[n];
  color_seqn.push(blink_color);
  add_sound(color_seqn[color_seqn.length-1]);
  $(document).unbind();
  start_game();
}

function add_sound(color){
  if(color==="green")
  new Audio("sounds/green.mp3").play();
  if(color==="red")
  new Audio("sounds/red.mp3").play();
  if(color==="blue")
  new Audio("sounds/blue.mp3").play();
  if(color==="yellow")
  new Audio("sounds/yellow.mp3").play();
  flash(color);
}

function start_game(){
  $("button").click(function(){
    match_seqn($(this).attr("class"));
  });
}

function flash(color){
  $("."+color).fadeOut(80).fadeIn(80);
}
function match_seqn(button_color){
  $("button").unbind();
    if(color_seqn[i]===button_color){
      i++;
      add_sound(button_color);
      $("."+button_color).addClass("blink_button");
      setTimeout(function (){$("."+button_color).removeClass("blink_button");},80);
      if(i<color_seqn.length){
      start_game();}
      else{setTimeout(next_seqn,1000);}
    }
    else{
      gameOver();
      restart();
    }
}

function gameOver(){
  $("body").addClass("body-color");
  $("h1").text("Game Over, Press any key to Restart");
  $("h1").addClass("h");
  new Audio("sounds/wrong.mp3").play();
}

function next_seqn(){
  i=0;
  j++;

  $("h1").text("Level "+j);
  add_color();
}
