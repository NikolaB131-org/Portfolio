let sliderNumber = document.querySelector('.slider-title__number');
document.querySelector('.slider-wrapper__slider').oninput = function() {
  let percent = (this.value - 1) * 5.25;
  this.style.background = `linear-gradient(90deg, #fc751a ${percent}%, #1f1c1b ${percent}%)`;
  sliderNumber.innerText = this.value;
}