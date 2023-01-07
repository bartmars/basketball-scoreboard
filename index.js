let homeTeamScore = 0;
let guestTeamScore = 0;

let homeTeamEl = document.getElementById("hometeam-score-el");
let guestTeamEl = document.getElementById("guestteam-score-el");

function add1Point() {
    console.log("Button clicked, score updated by 1.");
    homeTeamScore += 1;
    homeTeamEl.textContent = homeTeamScore;
}

function add2Points() {
    console.log("Button clicked, score updated by 2.");
    homeTeamScore += 2;
    homeTeamEl.textContent = homeTeamScore;
}

function add3Points() {
    console.log("Button clicked, score updated by 2.");
    homeTeamScore += 3;
    homeTeamEl.textContent = homeTeamScore;
}