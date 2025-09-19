let reset = document.querySelector("#rbtn");
let box = document.querySelectorAll(".box");
let msg = document.querySelector(".container");
let msg_box = document.querySelector(".msgbox");
let gm = document.querySelector(".game");
let count = 0;
draw = () => {
  msg_box.innerText = "Draw!!";
  msg_box.style.display = "block";
  gm.style.display = "none";
  boxdisable();
};
let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let turn0 = true;
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.disabled = true;
    count++;
    let check = checkwin();
    if (count === 9 && !check) {
      draw();
    }
  });
});
resetGame = () => {
  turn0 = true;
  count = 0;
  box.forEach((b) => {
    b.innerText = "";
    b.disabled = false;
    gm.style.display = "flex";
    msg_box.innerText = "";
  });
};
reset.addEventListener("click", resetGame);
checkwin = () => {
  for (let i of winpattern) {
    let p1 = box[i[0]].innerText;
    let p2 = box[i[1]].innerText;
    let p3 = box[i[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showwinner(p1);
        return true;
      }
    }
  }
};
showwinner = (p1) => {
  msg_box.innerText = `${p1} is Winner!`;
  msg_box.style.display = "block";
  gm.style.display = "none";
  boxdisable();
};
let boxdisable = () => {
  box.forEach((b) => {
    b.disabled = true;
  });
};



