const API_KEY = "YWfo3UVAmQIvnh8TCcKbHtiWsrRtKQlk";

async function fetchGIF(toSearch) {
  try {
    console.log(toURL(toSearch));
    const response = await fetch(toURL(toSearch), { mode: "cors" });
    const queriedGIF = await response.json();
    img.src = queriedGIF.data.images.original.url;
  } catch (error) {
    console.error("Error fetching from Giphy API:", error);
    img.alt = "Could not load image.";
  }
}
function toURL(toSearch) {
  return (
    "https://api.giphy.com/v1/gifs/translate?api_key=" +
    API_KEY +
    "&s=" +
    toSearch
  );
}

let url;
const search = document.querySelector("#search");
const img = document.querySelector("img");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", () => {
  fetchGIF(search.value.trim());
});
