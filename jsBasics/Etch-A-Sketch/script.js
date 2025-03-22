const container = document.querySelector(".container");
const reset = document.querySelector(".reset-grid");
const changeGridDimsButton = document.querySelector(".change-grid-dims");
// sets up inital 16x16 grid
toGrid(container, 16);

// reset grid back to 16x16
reset.addEventListener("click", () => {
  toGrid(container, 16);
});

changeGridDimsButton.addEventListener("click", () => {
  const userDims = prompt("Enter Number For Grid Layout - Must Bee <= 100");
  // if > 100 default to 16
  if (Number(userDims) > 100) {
    alert("The value you enetered was > 100. Defaulting to 16x16 grid");
    return;
  }
  toGrid(container, Number(userDims));
});

// change grid dims to custom dim x dim layout

function toGrid(container, dim) {
  // reset if needed
  container.innerHTML = "";
  for (let i = 1; i <= dim; i++) {
    // create 16 rows, of 16 elemnts (cols) which gets us to
    // 16x16 grid
    // Create the outer div which is a row, this will be flex at the
    // end and appended to container
    // All styling is  handled in css file.
    const divRow = document.createElement("div");
    //apply class that flexed divRow
    divRow.classList.add("sketch-row");
    //now create all content for each divRow and append
    for (let col = 1; col <= dim; col++) {
      const divEl = document.createElement("div");
      // apply class
      divEl.classList.add("sketch-cell");

      // add listener - apply class that "fills" divEl
      divEl.addEventListener("mouseover", () => {
        divEl.classList.add("color-box");
      });
      // add listener - rm class that fills divEl
      // append
      divRow.appendChild(divEl);
    }
    container.append(divRow);
  }
}

function changeGridDims(container, newDims) {
  container.innerHTML = "";

  toGrid(newDims);
}
