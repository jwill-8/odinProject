// script.js
import { validateEmail } from "./validateEmail.js";

const form = document.querySelector("form");
console.log("Form:", form);

form.addEventListener("submit", (e) => {
  console.log("click");
  e.preventDefault();

  const isEmailValid = validateEmail();

  if (isEmailValid) {
    // Proceed with form or validate next field
    console.log("Email is valid");
  } else {
    console.log("Email is invalid");
  }
});
