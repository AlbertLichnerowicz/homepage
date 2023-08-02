console.log("Hej, miłego dnia")

let buttonElement = document.querySelector(".button");

let imageElement = document.querySelector(".image");

buttonElement.addEventListener("click", () => {
    imageElement.remove();
});