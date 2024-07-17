const textBox = document.getElementById("textBox");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
let temp;
const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");





function calculateTotal(){
    
    if (temp1.value == "celcius" && temp2.value == "fahrenheit"){
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        result.textContent=temp.toFixed(2)+"°F";
        tempImgFahrenheit();
    }
    else if (temp1.value == "celcius" && temp2.value == "celcius"){
        temp = Number(textBox.value);
        result.textContent=temp+"°C";
        tempImgCelcius();
    }
    else if (temp1.value == "fahrenheit" && temp2.value == "celcius"){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5/9;
        result.textContent=temp.toFixed(2)+"°C";
        tempImgCelcius();
    }
    else if (temp1.value == "fahrenheit" && temp2.value == "fahrenheit"){
        temp = Number(textBox.value);
        result.textContent=temp+"°F";
        tempImgFahrenheit();
    }
    else if (temp1.value == "celcius" && temp2.value == "kelvin"){
        temp = Number(textBox.value);
        temp = temp + 273.15;
        result.textContent=temp.toFixed(2)+"°K";
        tempImgKelvin();
    }
    else if (temp1.value == "kelvin" && temp2.value == "celcius"){
        temp = Number(textBox.value);
        temp = temp - 273.15;
        result.textContent=temp.toFixed(2)+"°C";
        tempImgCelcius();
    }
    else if (temp1.value == "kelvin" && temp2.value == "kelvin"){
        temp = Number(textBox.value);
        result.textContent=temp+"°K";
        tempImgKelvin();
    }
    else if (temp1.value == "fahrenheit" && temp2.value == "kelvin"){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9 + 273.15;
        result.textContent=temp.toFixed(2)+"°K";
        tempImgKelvin();
    }
    else if (temp1.value == "kelvin" && temp2.value == "fahrenheit"){
        temp = Number(textBox.value);
        temp = (temp - 273.15) * 9 / 5 + 32;
        result.textContent=temp.toFixed(2)+"°F";
        tempImgFahrenheit();
    }


    else{
        result.textContent="Choose a conversion type!"
    }
    
    


    }

    function tempImgFahrenheit (){
        if (temp <= 50){
            document.body.style.backgroundImage = "url('./images/cold.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#347CC8";
        }else if (temp < 86){
            document.body.style.backgroundImage = "url('./images/good.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#F39D46";
        }else{
            document.body.style.backgroundImage = "url('./images/hot.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#E40A09";
        }
    }

    function tempImgCelcius (){
        if (temp <= 10){
            document.body.style.backgroundImage = "url('./images/cold.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#347CC8";
        }else if (temp < 30){
            document.body.style.backgroundImage = "url('./images/good.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#F39D46";
        }else{
            document.body.style.backgroundImage = "url('./images/hot.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#E40A09";
        }
    }

    function tempImgKelvin (){
        if (temp <= 283.15){
            document.body.style.backgroundImage = "url('./images/cold.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#347CC8";
        }else if (temp < 303.15){
            document.body.style.backgroundImage = "url('./images/good.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#F39D46";
        }else{
            document.body.style.backgroundImage = "url('./images/hot.png')";
            document.body.style.backgroundPosition = "left";
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundColor = "#E40A09";
        }
    }


    textBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          calculateTotal();
        }
      });