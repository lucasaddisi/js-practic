var n1 = 0;

console.log("Esta funcion muestra salida en consola");

var num = 50;

var Auto= function(marca, modelo, color, maxKm){
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.maxKm =  maxKm;
}

var ferrari = new Auto("Ferrar", "458 Italia", "Rojo", 300);

Auto.prototype.acelerar = function () {
    for (i = 0; i <= maxKm; i += 1){
      console.log(i);
    }
};
console.log(ferrari);
ferrari.acelerar;
