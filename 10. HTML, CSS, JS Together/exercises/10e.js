/*
  toggledButton funksiyası, className adlı parameter alır

  bu parameterin dəyəri hər bir button üçün, fərdi olan 
  həmin buttonların class adıdır

  js-gaming-button
  js-music-button
  js-tech-button  

  buttonElement variablena, fərdi class adı vasitəsiylə
  əldə olunmuş HTML button elementini təyin edirik

  if daxilində buttonun is-toggled classına sahib olub-olmasına 
  baxırıq

  buttonlar ilkin halda bu classa sahib deyil ona görə də,
  buttonElement.classList.contains("is-toggled") ifadəsinin
  dəyəri false olacaq

  ancaq false dəyərinin, qabağında NOT operatoru olduğundan
  son dəyər trueya çeviriləcək və if-statement işə salınacaq
*/
function toggledButton(className) {
  const buttonElement = document.querySelector(`.${className}`); 

    if (!buttonElement.classList.contains("is-toggled")) {
        buttonElement.classList.add("is-toggled");
    } else {
        buttonElement.classList.remove("is-toggled");
    }
}
