document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".hero_title");
  element.innerHTML = "La vie est belle";
  setTimeout(() => {
    element.innerHTML += "<br>Roberto Benigni";
  }, 1500);
});

const secondChildNode = document.body.childNodes[1];

console.log(secondChildNode);

let tableau = ["un", "deux", "trois", "quatre", "cinq"];

console.log(tableau[tableau.length - 1]);

let tableau2 = tableau.map((nums) => {
  return nums + "!";
});

console.log(tableau2);

// j aimerais utiliser node type

let tableau3 = tableau.map((nums) => {
  return nums.nodeType;
});

console.log(tableau3);
