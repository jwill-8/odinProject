const API_KEY = "YWfo3UVAmQIvnh8TCcKbHtiWsrRtKQlk";

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
  url = toURL(search.value);
  fetch(url, { mode: "cors" })
    .then(function (response) {
      // initial promise resolution returns another promise
      return response.json();
    })
    .then(function (response) {
      // this returns an obj that contains the img we need to append
      //console.log(response.data.images.original.url);
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.error("Error fetching from Giphy API:", error);
      img.alt = "Could not load image.";
    });
});
