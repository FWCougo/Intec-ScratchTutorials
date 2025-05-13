'use strict';



document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the .aula-item click
    const aulaItem = document.querySelector("#aula1-Scratch");
    if (aulaItem) {
        aulaItem.addEventListener("click", function(){
            window.location.assign('scratch-Aula1.html');
        });
    }

    //-- Home Button --
    const home_btn = document.querySelector("h1");
    if(home_btn){
        home_btn.addEventListener("click", function(){
            window.location.assign('aulas_Scratch.html');
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

let slideIndex = [1,1];
    let slideId = ["mySlides1", "mySlides2"]
    showSlides(1, 0);
    showSlides(1, 1);

    function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
        let i;
        let x = document.getElementsByClassName(slideId[no]);
        if (n > x.length) {slideIndex[no] = 1}    
        if (n < 1) {slideIndex[no] = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        x[slideIndex[no]-1].style.display = "block";  
    }
