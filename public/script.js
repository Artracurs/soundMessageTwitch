let count = false;
// function clickLeft() {
//   count = count - 50;
//   // let block1 = document.querySelector(".block1").style.position = "left: 24px"
//   document.getElementById("block3").style.left = `${count}px`;
//   console.log(block3);
// }

// function clickRight() {
//   count = count + 50;
//   // let block1 = document.querySelector(".block1").style.position = "left: 24px"
//   document.getElementById("block3").style.left = `${count}px`;
//   console.log(block3);
// }

let x = 0;

let y = document.getElementById("marker");
let box = document.getElementById("box")



function Move() {
  y.style.left = `${box.style.left}`
  document.getElementById("marker").style.position = "relative";
  document.getElementById("marker").style.right = `${-e.offsetX}px`;



};



box.onmouseup = (e) => {

  document.getElementById("marker").style.position = "relative";
  document.getElementById("marker").style.right = `200px`;

};


box.addEventListener("mousemove", Move)