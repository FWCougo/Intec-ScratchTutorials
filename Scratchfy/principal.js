'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the .aula-item click
    const aulaItem = document.querySelector("#aula1-Scratch");
    if (aulaItem) {
        aulaItem.addEventListener("click", function(){
            window.location.assign('scratch-Aula1.html');
        });
    }

    // Button event listeners
    const inicio_btn = document.getElementById("home-btn");
    const Scratch_btn = document.getElementById("acess-Scratch");

    if (inicio_btn) {
        inicio_btn.addEventListener("click", function(){
            window.location.assign('index.html');
        });
    }

    if (Scratch_btn) {
        Scratch_btn.addEventListener("click", function(){
            window.location.assign('aulas_Scratch.html');
        });
    }

    const toggleButton = document.getElementById('toggleIndice');
    const indice = document.querySelector('.indice');

    toggleButton.addEventListener('click', () => {
    indice.classList.toggle('collapsed');
  });
});
