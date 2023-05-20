const imageBox = document.getElementById("image-box");

const readHeader = document.getElementById("read");
readHeader.addEventListener("mouseover", () => {
  imageBox.style.backgroundImage = `url("image/Read.jpg")`;
});
const walkheader = document.getElementById("walk");
walkheader.addEventListener("mouseover", () => {
  imageBox.style.backgroundImage = `url("image/Walk.jpg")`;
});
