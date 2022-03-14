const fireBtn = document.getElementById('fire-canon');
const porkalam = document.getElementById('porkalam');
const blueWarriors = document.getElementById('blue-warriors');
const redWarriors = document.getElementById('red-warriors');
const randomNumber = document.getElementById('rand-gen');
const killMsg = document.getElementById('kill-message');
const deathForm = document.getElementById('death-form');
const deathNo = document.getElementById('deathNo');
const nodePath = document.createElement('path');
minRandomNumber = 1;
maxRandomNumber = 5;
// getting random numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// generating random numbers and switching players
fireBtn.addEventListener('click', function () {
  randomNumber.innerHTML = getRandomNumber(minRandomNumber, maxRandomNumber);
  if (blueWarriors.classList.contains('play')) {
    changeEmoji(blueWarriors.getElementsByClassName('soldier'), 'blue-warrior');
    blueWarriors.classList.remove('play');
    redWarriors.classList.add('play');
    fireBtn.style.backgroundColor = '#960018';
  } else {
    changeEmoji(redWarriors.getElementsByClassName('soldier'), 'red-warrior');
    blueWarriors.classList.add('play');
    redWarriors.classList.remove('play');
    fireBtn.style.backgroundColor = '#0077b6';
  }
});
// changing emoji relevent to stages
function changeEmoji(warriors, play) {
  for (let warrior of warriors) {
    if (randomNumber.innerText === warrior.innerText) {
      chooseStage(warrior, play);
      break;
    }
  }
}
//#region Stage of players
function chooseStage(warrior, play) {
  let stage = parseInt(warrior.parentElement.getAttribute('data-stage'));
  if (stage !== 'dead') {
    switch (stage === 5 ? 5 : stage + 1) {
      case 2: {
        this.stageTwo(warrior, play);
        break;
      }
      case 3: {
        this.stageThree(warrior, play);
        break;
      }
      case 4: {
        this.stageFour(warrior, play);
        break;
      }
      case 5: {
        this.stageFive(warrior, play);
        break;
      }
      default: {
      }
    }
  }
}
function stageTwo(warrior, play) {
  warrior.parentElement.setAttribute('data-stage', 2);
  if (play === 'blue-warrior') {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-eyes.png');
  } else {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-eyes.png');
  }
}
// emoji-with-smile
function stageThree(warrior, play) {
  warrior.parentElement.setAttribute('data-stage', 3);
  if (play === 'blue-warrior') {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-smile.png');
  } else {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-smile.png');
  }
}
function stageFour(warrior, play) {
  warrior.parentElement.setAttribute('data-stage', 4);
  if (play === 'blue-warrior') {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-moustache.png');
  } else {
    warrior.parentElement
      .querySelector('img')
      .setAttribute('src', 'assets/images/emoji-with-moustache.png');
  }
}
function stageFive(warrior, play) {
  if (parseInt(warrior.parentElement.getAttribute('data-stage')) === 4) {
    warrior.parentElement.setAttribute('data-stage', 5);
    if (play === 'blue-warrior') {
      warrior.parentElement
        .querySelector('img')
        .setAttribute('src', 'assets/images/emoji-with-gun.png');
    } else {
      warrior.parentElement
        .querySelector('img')
        .setAttribute('src', 'assets/images/emoji-with-gun.png');
    }
  } else {
    if (play === 'blue-warrior') {
      killMsg.innerHTML = 'Blue turn to kill red';
    } else {
      killMsg.innerHTML = 'Red turn to kill blue';
    }
    killMsg.classList.remove('display-none');
    deathForm.classList.remove('display-none');
    fireBtn.classList.add('display-none');
    randomNumber.classList.add('display-none');
    /*
    if (play === 'red-warrior') {
      redWarriors.classList.add('display-none');
      fireBtn.classList.add('display-none');
      randomNumber.classList.add('display-none');
      blueWarriors.classList.add('dead-mode');

    } else {
      blueWarriors.classList.add('display-none');
      fireBtn.classList.add('display-none');
      randomNumber.classList.add('display-none');
      redWarriors.classList.add('dead-mode');
    }
    */
  }
}
//#endregion
//#region kill
function kill(warriors, deadMan, warriorFlag) {
  for (let warrior of warriors) {
    if (deadMan === warrior.innerText) {
      if (warriorFlag === 'blue') {
        warrior.parentElement
          .querySelector('img')
          .setAttribute('src', 'assets/images/dead-emoji.png');
        break;
      } else {
        warrior.parentElement
          .querySelector('img')
          .setAttribute('src', 'assets/images/dead-emoji.png');
        break;
      }
    }
  }
  killMsg.classList.add('display-none');
  deathForm.classList.add('display-none');
  fireBtn.classList.remove('display-none');
  randomNumber.classList.remove('display-none');
}
function validateDeath() {
  let deadMan = deathNo.value;
  if (deadMan <= maxRandomNumber && deadMan >= minRandomNumber) {
    if (!blueWarriors.classList.contains('play')) {
      if (!deathBook(redWarriors.getElementsByClassName('soldier'), deadMan)) {
        kill(redWarriors.getElementsByClassName('soldier'), deadMan, 'red');
      } else {
        alert('You can not kill a dead one');
      }
    } else {
      if (!deathBook(blueWarriors.getElementsByClassName('soldier'), deadMan)) {
        kill(blueWarriors.getElementsByClassName('soldier'), deadMan, 'blue');
      } else {
        alert('You can not kill a dead one');
      }
    }
  } else {
    alert(`Enter death number between ${minRandomNumber} and ${maxRandomNumber}`);
  }
}
function deathBook(warriors, deadMan) {
  for (let warrior of warriors) {
    if (
      warrior.parentElement.getAttribute('data-stage') === 'dead' &&
      warrior.innerHTML === deadMan
    ) {
      return true;
      break;
    }
  }
}
//#endregion
