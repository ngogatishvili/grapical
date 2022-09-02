export const revealed = (arr, x, y, newNonMineCount) => {
  if (arr[x][y].revealed) {
    return;
  }

  let flipped = [];

  flipped.push(arr[x][y]);
 

  while (flipped.length !== 0) {
    console.log("ert daklikvaze")
    let single = flipped.pop();

    if (!single.revealed) {
      console.log("ariyo da daareveala")
      single.revealed = true;
    }

    if (single.value !== 0) {
      break;
    }

    // top left check

    if (
      single.x > 0 &&
      single.y > 0 &&
      arr[single.x - 1][single.y - 1].value === 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    // top right check

    if (
      single.x > 0 &&
      single.y < arr.length - 1 &&
      arr[single.x - 1][single.y + 1].value === 0 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y - 1]);
    }

    // bottom right check

    if (
      single.x < arr.length - 1 &&
      single.y < arr.length - 1 &&
      arr[single.x + 1][single.y + 1].value === 0 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y + 1]);
    }

    // bottom left check

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      arr[single.x + 1][single.y - 1].value === 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y - 1]);
    }

    // top check

    if (
      single.x > 0 &&
      arr[single.x - 1][single.y].value === 0 &&
      !arr[single.x - 1][single.y].revealed
    ) {
      flipped.push(arr[single.x - 1][single.y]);
    }

    // bottom check

    if (
      single.x < arr.length - 1 &&
      arr[single.x + 1][y].value === 0 &&
      !arr[single.x + 1][y].revealed
    ) {
      flipped.push(arr[single.x + 1][single.y]);
    }

    // left check

    if (
      single.y > 0 &&
      arr[single.x][single.y - 1].value === 0 &&
      !arr[single.x][single.y - 1].revealed
    ) {
      flipped.push(arr[single.x][single.y - 1]);
    }

    // right check

    if (
      single.y < arr.length - 1 &&
      arr[single.x][single.y + 1].value === 0 &&
      !arr[single.x][single.y + 1].revealed
    ) {
      flipped.push(arr[single.x][single.y + 1]);
    }

    // start revealing

    // topleft

    if (
      single.x > 0 &&
      single.y > 0 &&
      !arr[single.x - 1][single.y - 1].revealed
    ) {
      arr[single.x - 1][single.y - 1].revealed = true;
    }

    // top right

    if (
      single.x > 0 &&
      single.y < arr.length - 1 &&
      !arr[single.x - 1][single.y + 1].revealed
    ) {
      arr[single.x - 1][single.y + 1].revealed = true;
    }

    // top

    if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
      arr[single.x - 1][single.y].revealed = true;
    }

    // left

    if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {
      arr[single.x][single.y - 1].revealed = true;
    }

    // right

    if (single.y < arr.length - 1 && !arr[single.x][single.y + 1].revealed) {
      arr[single.x][single.y + 1].revealed = true;
    }

    // bottom left

    if (
      single.x < arr.length - 1 &&
      single.y > 0 &&
      !arr[single.x + 1][single.y - 1].revealed
    ) {
      arr[single.x + 1][single.y - 1].revealed = true;
    }

    // bottom right

    if (
      single.x < arr.length - 1 &&
      single.y < arr.length - 1 &&
      !arr[single.x + 1][single.y + 1].revealed
    ) {
      arr[single.x + 1][single.y + 1].revealed = true;
    }

    // bottom

    if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].revealed) {
      arr[single.x + 1][single.y].revealed = true;
    }

    console.log(flipped)



  }

 

  return arr;
};
