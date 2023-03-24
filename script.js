//Mostrar Ocultar Skilss
const showMoreSkillsButton = document.getElementById("showMoreSkills");
const moreSkillsList = document.getElementById("moreSkills");

showMoreSkillsButton.addEventListener("click", function () {
  if (moreSkillsList.style.display === "none") {
    moreSkillsList.style.display = "block";
    showMoreSkillsButton.innerText = "Mostrar menos Skills";
  } else {
    moreSkillsList.style.display = "none";
    showMoreSkillsButton.innerText = "Mostrar mas Skills";
  }
});

//Modo Oscuro
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const body = document.querySelector("body");
let esModoOscuro = true;
console.log(esModoOscuro);

toggleModeBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (esModoOscuro) {
    toggleModeBtn.innerHTML = '<i class="fas fa-sun icono_blanco"></i>';
    esModoOscuro = false;
    console.log(esModoOscuro);
  } else {
    toggleModeBtn.innerHTML = '<i class="fas fa-moon icono_blanco"></i>';
    esModoOscuro = true;
    console.log(esModoOscuro);
  }
});
