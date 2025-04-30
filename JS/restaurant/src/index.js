// index.js
import "./style.css";
import { greeting } from "./greeting.js";
import { toHome } from "./home.js";
import { toMenu } from "./menu.js";
import { toContact } from "./contact.js";

// Query main Div to append html to dependent on what button is clicked
const content = document.querySelector("#content");
// fn to rm currently rendered content prior to adding "new" content
function resetContent() {
  content.innerHTML = "";
}
//define obj of handlers to display various content
const handlers = {
  home: toHome,
  menu: toMenu,
  contact: toContact,
};
// Query all nav-buttons and apply asscoiated handler
document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", () => {
    // define currrent id
    const id = button.id;
    // reset content
    resetContent();
    // append "new" content via button being clicked by applying it's handler
    handlers[id]?.(content);
  });
});

toHome(content);
