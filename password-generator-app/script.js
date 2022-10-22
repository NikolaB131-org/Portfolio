// Slider
let sliderNumber = document.querySelector('.slider-title__number');
document.querySelector('.slider-wrapper__slider').oninput = function() {
  let percent = (this.value - 1) * 5.25;
  this.style.background = `linear-gradient(90deg, #fc751a ${percent}%, #1f1c1b ${percent}%)`;
  sliderNumber.innerText = this.value;
}

// Strength level
let checkCounter = 0;
let strengthBlockChildren = [...document.querySelector('.strength-block__strength-level-wrapper').children]
let strengthBlockText = document.querySelector('.strength-block__strength-level');
document.querySelector('.settings-block__list').oninput = function(event) {
  if (event.target.checked) {
    checkCounter++;
  } else {
    strengthBlockChildren[checkCounter].style.backgroundColor = '';
    strengthBlockChildren[checkCounter].style.borderColor = '#ededed';
    checkCounter--;
  }

  let color = '';
  switch (checkCounter) {
    case 0:
      strengthBlockText.innerText = '';
      break;
    case 1:
      strengthBlockText.innerText = 'WEAK';
      color = '#459b13';
      break;
    case 2:
    case 3:
      strengthBlockText.innerText = 'MEDIUM';
      color = '#e0d315';
      break;
    case 4:
      strengthBlockText.innerText = 'STRONG';
      color = '#d1240f';
      break;
  }
  for (let i = 1; i < checkCounter + 1; i++) {
    strengthBlockChildren[i].style.backgroundColor = color;
    strengthBlockChildren[i].style.borderColor = color;
  }
}

// Generator
let availableCharacters = [];