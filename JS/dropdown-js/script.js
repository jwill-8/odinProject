// Is a click to a dropdown-button
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  // Are we inside a dropdown? - not a button and closest parent is dropdown - ignore
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  // if we are clicking a dropdown, get that dropdown
  let currDropdown;
  if (isDropdownButton) {
    currDropdown = e.target.closest("[data-dropdown]");
    // toggle to active
    currDropdown.classList.toggle("active");
  }

  // close all dropdowns besides what is being toggled in block in line 8
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currDropdown) return;
    dropdown.classList.remove("active");
  });
});
