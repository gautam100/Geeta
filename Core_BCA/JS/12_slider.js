var slider = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var index = 0;

function prevImage() {
  index = index - 1;
  if (index < 0) {
    index = slider.length - 1;
  }
  document.getElementById("image_container").innerHTML =
    `<img src="./images/${slider[index]}" width="1300" height="500" />`;
}

function nextImage() {
  index = index + 1;
  if (index > slider.length - 1) {
    index = 0;
  }
  document.getElementById("image_container").innerHTML =
    `<img src="./images/${slider[index]}" width="1300" height="500" />`;
}
