function updateScore(team, points) {
    const scoreEl = document.getElementById(`${team}-score`);
    const currentScore = parseInt(scoreEl.textContent, 10);
    scoreEl.textContent = currentScore + points;
  }

  function newGame() {
    document.getElementById('home-score').textContent = '0';
    document.getElementById('guest-score').textContent = '0';
  }

  
  