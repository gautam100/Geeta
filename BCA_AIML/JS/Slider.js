var sliderArr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var index = 0;
var slider = document.getElementById("slider");

function prevSlide() {
  index--;
  if (index < 0) {
    index = sliderArr.length - 1;
  }
  slider.innerHTML = `<img src="./images/${sliderArr[index]}" height="400px" width="1400px">`;
  document.getElementById("image_index").innerHTML = `${index}`;
}

function nextSlide() {
  index++;
  if (index >= sliderArr.length) {
    index = 0;
  }
  slider.innerHTML = `<img src="./images/${sliderArr[index]}" height="400px" width="1400px">`;
  document.getElementById("image_index").innerHTML = `${index}`;
}
