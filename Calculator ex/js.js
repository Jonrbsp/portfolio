const display = document.getElementById("display");
const changeBlue = document.getElementById("change-blue");
const claculator = document.getElementById("calculator");
const keys = document.getElementById("keys").children;

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}







var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

