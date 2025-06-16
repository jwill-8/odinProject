const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // refrence the data attributes we assigned in html to determine what button is clicked
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    // from current button look for parent with data attribute below, then grab slides via data attribute
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    // convert slides to array, get indx of activeSlide in the array, add or subtract 1 based on button clicked
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    // backwards past first slide, go to "end" of array
    if (newIndex < 0) newIndex = slides.children.length - 1;
    // once we click through from last slide to what will return to slide 1, we need to reset index
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
