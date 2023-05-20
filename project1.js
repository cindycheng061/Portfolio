console.log("Hello");

const readHeader = document.getElementById("read");

const imageBox = document.getElementById("image-box");

readHeader.addEventListener("mouseover", () => {
  imageBox.style.backgroundImage = `url("image/Read.jpg")`;
});
