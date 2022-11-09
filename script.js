var input = document.getElementById("valor");
var select = document.getElementById("unidades");
var divResultado = document.getElementById("valorConvertido");

input.addEventListener("input", calcular);
select.addEventListener("change", calcular);

function calcular() {
  var valorInput = Number(input.value);
  var valorSelect = select.value;

  if (valorInput === 0) {
    divResultado.innerHTML = "Enter a valid number";
  } else {
    var valorEmKm = valorInput * (9.46 * 10 ** 12);
    var valorEmM = valorInput * (9.4607 * 10 ** 15);
    switch (valorSelect) {
      case "km":
        divResultado.innerHTML = `${valorEmKm} km<br>ou<br>${valorInput} × <strong>9.46×10<sup>12</sup></strong> km`;
        break;
      case "m":
        divResultado.innerHTML = `${valorEmM} m<br>ou<br>${valorInput} × <strong>9.4607×10<sup>15</sup></strong> m`;
        break;
    }
  }
}
document.body.setAttribute("onmousemove", "moverFundo(event)");
document.body.setAttribute("ontouchmove", "moverFundoTouch(event)");

function moverFundo(event) {
  document.body.style.backgroundPositionX = -event.clientX / 100 + "px";
  document.body.style.backgroundPositionY = -event.clientY / 100 + "px";
}

function moverFundoTouch(event) {
  document.body.style.backgroundPositionX =
    -event.touches[0].clientX / 30 + "px";
  document.body.style.backgroundPositionY =
    -event.touches[0].clientY / 30 + "px";
}