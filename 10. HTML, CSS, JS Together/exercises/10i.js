//localStorageden calculationun son dəyərini əldə edirik
let calculation = localStorage.getItem("calculation") || "";

//JS-də js-calculation elementini əldə edirik
const paragraphElement = document.querySelector(".js-calculation");

function displayCalculation() {
  //js-calculation elementinin innerHTMLni dəyişirik
  paragraphElement.innerHTML = calculation;
}

/*
    səhifə ilk dəfə yükləndikdə sonuncu 
    hesablamanın dəyərini göstəririk
*/
displayCalculation();

function updateCalculation(value) {
/*
    calculation variablena, istifadəçinin yazdığı dəyəri
    əlavə edib yadda saxlayırıq.
*/
  calculation += value;

  displayCalculation();

  //localStoragedə calculationı yaradırıq
  localStorage.setItem("calculation", calculation);
}
