let cambioColor = (color) => {
  document.getElementById("caja").style.backgroundColor = color;
};

document.getElementById("btn-1").addEventListener("click", () => {
  cambioColor("#e53e3e");
});

document.getElementById("btn-2").addEventListener("click", () => {
  cambioColor("#dd6b20");
});

document.getElementById("btn-3").addEventListener("click", () => {
  cambioColor("#faf089");
});

document.getElementById("btn-4").addEventListener("click", () => {
  cambioColor("#48bb78");
});

document.getElementById("btn-5").addEventListener("click", () => {
  cambioColor("#81e6d9");
});

document.getElementById("btn-6").addEventListener("click", () => {
  cambioColor("#d53f8c");
});
