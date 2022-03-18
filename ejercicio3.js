document.getElementById("btn-sumar").addEventListener("click", () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let resultado = parseInt(valor1) + parseInt(valor2);
  mostrarResultado(resultado);
});

document.getElementById("btn-restar").addEventListener("click", () => {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;
  let resultado = parseInt(valor1) - parseInt(valor2);
  mostrarResultado(resultado);
});

let mostrarResultado = (resultado) => {
  if (resultado < 0) {
    resultado = 0;
  }
  document.querySelector(".resultado").innerHTML = resultado;
};
