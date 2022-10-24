// Slider
let passwordLength = document.querySelector('.slider-length__number');
document.querySelector('.slider-wrapper__slider').oninput = function() {
  let percent = (this.value - 1) * 5.25;
  this.style.background = `linear-gradient(90deg, #fc751a ${percent}%, #1f1c1b ${percent}%)`;
  passwordLength.innerText = this.value;
}

// Strength level
let checkCounter = 0;
let strengthBlockChildren = Array.from(document.querySelectorAll('.strength-block__strength-level-wrapper > div'));
let strengthBlockText = document.querySelector('.strength-block__strength-level');
let includeUppercase = false;
let includeLowercase = false;
let includeNumbers = false;
let includeSymbols = false;
document.querySelector('.settings-block__list').oninput = function(event) {
  switch(event.target.id) {
    case 'checkbox-includeUppercase':
      includeUppercase = event.target.checked;
      break;
    case 'checkbox-includeLowercase':
      includeLowercase = event.target.checked;
      break;
    case 'checkbox-includeNumbers':
      includeNumbers = event.target.checked;
      break;
    case 'checkbox-includeSymbols':
      includeSymbols = event.target.checked;
      break;
  }
  if (event.target.checked) {
    checkCounter++;
  } else {
    strengthBlockChildren[checkCounter - 1].style.backgroundColor = '';
    strengthBlockChildren[checkCounter - 1].style.borderColor = '#ededed';
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
  for (let i = 0; i < checkCounter; i++) {
    strengthBlockChildren[i].style.backgroundColor = color;
    strengthBlockChildren[i].style.borderColor = color;
  }
}

// Generator
let password = document.querySelector('.password-block__password');
document.querySelector('.settings-block__generate-button').onclick = function() {
  let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let numbersCharacters = '0123456789'.split('');
  let symbolsCharacters = '!@#$%^&*()-_+=;:,./?~[]{}^\'"<>~.'.split('');
  let availableCharacters = [
    ...includeUppercase ? uppercaseCharacters : [],
    ...includeLowercase ? lowercaseCharacters : [],
    ...includeNumbers ? numbersCharacters : [],
    ...includeSymbols ? symbolsCharacters : []
  ];
  let generatedPassword = '';
  if (availableCharacters.length) { // at least one checkbox checked
    for (let i = 0; i < +passwordLength.innerText; i++) {
      let charIndex = Math.floor(Math.random() * availableCharacters.length);
      generatedPassword += availableCharacters[charIndex];
    }
  }
  password.value = generatedPassword;
}

// Copy button
document.querySelector('.password-block__copy-button').onclick = function() {
  navigator.clipboard.writeText(password.value);
}
