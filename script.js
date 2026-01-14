function calcular() {
  const gramos = parseFloat(document.getElementById("gramos").value) || 0;
  const horas = parseFloat(document.getElementById("horas").value) || 0;
  const precioKilo = parseFloat(document.getElementById("precioKilo").value);
  const costoHora = parseFloat(document.getElementById("costoHora").value);
  const margen = parseFloat(document.getElementById("margen").value) / 100;

  const costoMaterial = (gramos / 1000) * precioKilo;
  const costoTiempo = horas * costoHora;
  const total = costoMaterial + costoTiempo;
  const precioFinal = total * (1 + margen);

  document.getElementById("resultado").innerHTML = `
    <p>material: $${costoMaterial.toFixed(2)}</p>
    <p>tiempo: $${costoTiempo.toFixed(2)}</p>
    <p>total: $${total.toFixed(2)}</p>
    <p><strong>precio sugerido: $${precioFinal.toFixed(2)}</strong></p>
  `;
}

