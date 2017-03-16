function converFarenheit(){
var far =document.getElementById("farenheit").value;
var resultado = (far-32)*5/9;
document.getElementById("farenheit").value = resultado.toFixed(2);
console.log(resultado.toFixed(2));
}
function converCelsius(){
var cel =document.getElementById("celsius").value;
var resultad = cel*5/9+32;
document.getElementById("celsius").value = resultad.toFixed(2);
console.log(resultad.toFixed(2));
}
