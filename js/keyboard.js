const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  console.log(e.key);
  console.log(e.keyCode);
  console.log(limitsStage, limitsBall);

  //const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      //move("left");
      e.preventDefault();
      if (limitsBall.left > limitsStage.left) x--;
      break;

    case 38:
      //move("up");
      y--;
      e.preventDefault();
      break;

    case 39:
      //move("right");
      x++;
      e.preventDefault();
      break;

    case 40:
      //move("down");
      y++;
      e.preventDefault();
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  console.log(e);

  if (e.key === "a" && e.ctrlKey) {
    alert("Comando incorrecto");
  }
}
