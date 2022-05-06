var x = document.getElementById("anthem");

function begin(){
  alert("Please stand up. The national anthem is about to play.");
  alert("You may not pause the national anthem as it is playing.");
  x.play();
  setTimeout(function(){
    document.getElementById("beginButton").innerHTML = "Next";
    alert("You may now sit down.");
  }, 73000);
}
