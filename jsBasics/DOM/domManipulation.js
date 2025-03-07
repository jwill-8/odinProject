/*
The tasks are:
a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the 
following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, 
append the <h1> and <p> to it before adding it to the container.

I am NOT going to add all the styling in the JS script, rather I will create the elements
and add a class to them, those classes will  be styled in the .css file
*/ 

function createElAndAddClass(element, textContent = "", ...classes) {
  const createdEl = document.createElement(element);
  createdEl.classList.add(...classes);
  // add textContent if arg is truthy
  if (textContent) {
    createdEl.textContent = textContent;
  }
  return createdEl;
}
// query container
const container = document.querySelector(".container");
// red para
const redP = createElAndAddClass("p", "Hey, i'm red!", "red-p");
// blue h3
const blueH3 = createElAndAddClass("h3", "I'm a blue h3!", "blue-h3");
//styled div
const styledDiv = createElAndAddClass("div", "", "styled-div");
//create elements to go in styled div
const h1ForDiv = document.createElement("h1");
h1ForDiv.textContent = "I'm in a div";
const pForDiv = document.createElement("p");
pForDiv.textContent = "ME TOO!";

const childrenToAdd = [h1ForDiv, pForDiv];

childrenToAdd.forEach((child) => {
  styledDiv.appendChild(child);
});

const childrenForContainer = [redP, blueH3, styledDiv];

childrenForContainer.forEach((child) => {
  container.appendChild(child);
});







