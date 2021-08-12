let slider = document.getElementById("slider");
let icon = document.getElementById("icon");
let moods = [
  "mood_bad",
  "sentiment_very_dissatisfied",
  "sentiment_satisfied",
  "sentiment_satisfied_alt",
  "sentiment_very_satisfied",
];

function changeMood() {
  icon.innerHTML = moods[slider.value];
}
