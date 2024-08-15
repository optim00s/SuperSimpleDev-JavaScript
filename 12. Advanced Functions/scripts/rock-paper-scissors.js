//indi səhifə yükləndikdə score, localStoragedən yüklənəcək
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
    js-score elementinin textini, veb 
    səhifə açıldığı an göstərir. 

    və hər oyundan sonra yeni xallar
    göstərilir.
*/
updateScoreElement();

let isAutoPlaying = false;
let intervalId;

const autoPlayButton = document.querySelector('.auto-play-button');

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);

    isAutoPlaying = true;
    autoPlayButton.innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayButton.innerHTML = 'Auto Play';
  }
}

/*
    Kompüterin həmləsi seçilərək, istifadəçinin və kompüterin
    həmlələri müqayisə edilir və nəticə result variablena təyin olunur.
*/
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  //cari xalların artırılması
  if (result === "You win.") {
    score.wins = score.wins + 1;
  } else if (result === "You lose.") {
    score.losses = score.losses + 1;
  } else if (result === "Tie.") {
    score.ties = score.ties + 1;
  }

  //score objectini localStorageda təyin edirik
  localStorage.setItem("score", JSON.stringify(score));

  //oyun bitdikdən sonra xallar yenilənir
  updateScoreElement();

  //oyunun nəticəsi göstərilir
  document.querySelector(".js-result").innerHTML = `${result}`;

  //kompüterin və istifadəçinin həmləsi göstərilir
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img class='move-icon' src='images/${playerMove}-emoji.png'>  <img class='move-icon' src='images/${computerMove}-emoji.png'> Computer`;
}

/*
    yenidən istifadə rahat olsun deyə
    js-score elementinin yenilənməsi
    funksiya daxilində təyin olunur
*/
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//kompüterin həmləsini seçməsi
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

//xalın sıfırlanması
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem("score");

  //sıfırlanmış xal göstərilir
  updateScoreElement();
}
