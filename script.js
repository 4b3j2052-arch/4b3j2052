const today = new Date();
today.setHours(0, 0, 0, 0);

const showDate = new Date(2026, 11, 20);
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const daysRemaining = Math.ceil((showDate - today) / millisecondsPerDay);
const countdown = document.getElementById("倒數");

if (countdown) {
  countdown.textContent = daysRemaining > 0
    ? `還有 ${daysRemaining} 天`
    : daysRemaining === 0
      ? "就是今天，期待與你相見"
      : "活動已開始，期待與你相見";
}