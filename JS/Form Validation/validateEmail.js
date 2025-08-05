export function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorEl = document.getElementById("email-error");

  // Clear previous custom message
  emailInput.setCustomValidity("");

  if (!emailInput.checkValidity()) {
    if (emailInput.validity.valueMissing) {
      emailInput.setCustomValidity("Email is required.");
    } else if (emailInput.validity.typeMismatch) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    }

    errorEl.textContent = emailInput.validationMessage;
    emailInput.classList.add("error");
    return false;
  }

  errorEl.textContent = "";
  emailInput.classList.remove("error");
  return true;
}
