var x = document.getElementById("anthem");

function begin(){
  alert("Please stand up. The national anthem is about to play.");
  alert("You may not pause the national anthem as it is playing.");
  x.play();
  document.getElementById("beginButton").innerHTML = "Next";
  alert("You may now sit down. Click 'Next' to continue the journey.");
}
