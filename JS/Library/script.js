const myLibrary = [];
const modal = document.querySelector(".modal");
const openModal = document.getElementById("add-book");
const closeModal = document.querySelector(".close");
const bookForm = document.querySelector("#book-form");

// Control modal appear/disapear
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//Add event listener that adds books to lib
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector("#read");

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const pages = pagesInput.value.trim();
  const read = readInput.checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  // Reset form fields
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  // Close modal
  modal.style.display = "none";

  // Render books
  displayBooksInLibrary(myLibrary);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(bookToAdd, myLibrary) {
  myLibrary.push(bookToAdd);
}

function displayBooksInLibrary(myLibrary) {
  // query selector
  const docLibrary = document.querySelector("#library");
  // clear contents before rerender
  docLibrary.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookContainer = document.createElement("div");
    Object.keys(book).forEach((key) => {
      if (key === "id") return;
      const keyValContainer = document.createElement("div");
      if (key === "read") {
        const textContent = book[key] ? "Yes" : "No";
      } else {
        const textContent = book[key];
      }
      const h4 = document.createElement("h4");
      h4.textContent = key.toUpperCase();
      const currBookInfoContainer = document.createElement("span");
      if (key === "read") {
        currBookInfoContainer.textContent = book[key] ? "Yes" : "No";
      } else {
        currBookInfoContainer.textContent = book[key];
      }

      keyValContainer.appendChild(h4);
      keyValContainer.appendChild(currBookInfoContainer);
      bookContainer.appendChild(keyValContainer);
    });

    bookContainer.classList.add("book");

    docLibrary.appendChild(bookContainer);
  });
}
