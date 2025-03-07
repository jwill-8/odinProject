// grab existing DOM elements
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItemtoList() {
  // stash item
  const itemToAdd = input.value.trim();
  // check if the item is not empty
  if (itemToAdd === "") return; // do nothing if item is empty or just spaces

  // update input
  input.value = "";
  // create li, span, and button
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const itemButton = document.createElement("button");
  // add listener to button to remove item
  itemButton.addEventListener("click", () => listItem.remove());
  // add span and button to li
  listItem.appendChild(span);
  listItem.appendChild(itemButton);
  //add textContent to span and button
  span.textContent = itemToAdd;
  itemButton.textContent = "Delete";
  // add list item to list
  ul.appendChild(listItem);
  //focus input
  input.focus();
}

// run with a direct click
button.addEventListener("click", () => addItemtoList());
// run with enter key pressed:
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addItemtoList();
});
