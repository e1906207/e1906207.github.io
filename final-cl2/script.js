let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ 1〜100の数字を入力してください。";
  } else if (userGuess < answer) {
    message.textContent = "📈 もっと大きい数字です！";
  } else if (userGuess > answer) {
    message.textContent = "📉 もっと小さい数字です！";
  } else {
    message.textContent = ` 正解！${attempts}回目で当たりました！`;
  }
}

function resetGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "新しいゲームを始めました！";
}

