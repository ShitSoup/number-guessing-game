function setGameOver(){
  //禁用表单文本输入和按钮
  guessField.disable = true;
  guessSubmit.disable = true;

  guessCount = 0;
  guessField.textContent = ' ';

}

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
