var x = document.getElementById("anthem");

function begin(){
  alert("Please stand up. The national anthem is about to play.");
  alert("You may not pause the national anthem as it is playing.");
  setTimeout(function(){
    document.getElementById("beginButton").innerHTML = "Next";
    alert("You may now sit down.");
  }, 3000);
  document.getElementById("beginButton").onclick = "next1()";
  document.getElementById("beginButton").innerHTML = "Next";
}

function next1(){
  alert("This is the next stage.");
}
