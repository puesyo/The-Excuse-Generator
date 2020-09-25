import "../style/index.scss";
window.onload = function() {
  // create variables
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // initialize variable with the content of H1 from index.html
  let newSentence = document.querySelector("#myH1");

  // generate a random number
  function getRandomInt(maxIndex) {
    return Math.floor(Math.random() * Math.floor(maxIndex));
  }

  // display new sentence in index.html
  newSentence.innerHTML =
    who[getRandomInt(who.length)] +
    " " +
    action[getRandomInt(action.length)] +
    " " +
    what[getRandomInt(what.length)] +
    " " +
    when[getRandomInt(when.length)];
};
