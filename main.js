document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".hero_title");
  element.innerHTML = "La vie est belle";
  setTimeout(() => {
    element.innerHTML += "<br>Roberto Benigni";
  }, 1500);
});

const secondChildNode = document.body.childNodes[1];

console.log(secondChildNode);

// cree moi un tableau avec 5 elements de strings
let tableau = ["un", "deux", "trois", "quatre", "cinq"];

console.log(tableau[tableau.length - 1]);

let tableau2 = tableau.map((element) => {
  return element + "!";
});

console.log(tableau2);
