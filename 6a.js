function CelsiusToFahrenheit(){
    let Celsius = document.getElementById("Celsius").value;
    document.getElementById("output").value = Celsius * 9 / 5 + 32;
}

function FahrenheitToCelsius(){
    let Fahrenheit = document.getElementById("Fahrenheit").value;
    document.getElementById("output1").value = (Fahrenheit - 32)/(9/5);
}