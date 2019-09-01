function checkGuess(){
  let userguess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = '上次猜的数： ' ;
  }
  guesses.textContent += userguess + ' ';

  if (userguess === radomNumber) {
    lastResult = '猜对了';
    lastResult.style.backgroundColor = green;
    setGameOver();
  }
  else if (guessCount === 10) {
    lastResult = '游戏结束';
    setGameOver();
  }
  else () {
    lastResult = '猜错了';
    lastResult.style.backgroundColor = red;
    if (userguess < radomNumber) {
      lowOrHi.textContent = '猜小了';
    }
    else if (userguess > radomNumber) {
      lowOrHi.textContent = '猜大了';
    }
  }

  guessSubmit.addEventListener('click',checkGuess);

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver(){
  //禁用表单文本输入和按钮
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '开始新游戏';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
