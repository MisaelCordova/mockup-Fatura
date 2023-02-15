let btn = document.getElementById("btnModal");
let modal = document.getElementById("myModal");
console.log(modal)

btn.onclick = function () {
    modal.style.display = "block";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
}