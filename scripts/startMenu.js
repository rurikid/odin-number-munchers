import { gameController } from './gameController.js';
import { cssLoader } from './cssLoader.js';
cssLoader.load('styles.css');
const startMenu = () => {
  const drawHeader = (() => {
    const header = document.querySelector('#header');
    const titleHeader = document.createElement('h1');
    titleHeader.innerText = 'Math Mayhem';
    titleHeader.id = 'title-header';
    header.appendChild(titleHeader);

    const instructions = document.createElement('h2');
    instructions.innerText = 'Select Game Options';
    instructions.id = 'instructions';
    header.appendChild(instructions);
  })();

  function pageDirect() {
    console.log('page direct');
  }

  const startContainer = (() => {
    const container = document.querySelector('#container');

    const nameInputTitle = document.createElement('h3');
    nameInputTitle.innerHTML = 'User Name';
    container.appendChild(nameInputTitle);

    const userNameInput = document.createElement('input');
    userNameInput.type = 'text';
    userNameInput.className = 'user-name-input';
    userNameInput.style.backgroundColor = 'gray';
    container.appendChild(userNameInput);

    const practiceAreaTitle = document.createElement('h3');
    practiceAreaTitle.innerHTML = 'Practice Area';
    practiceAreaTitle.id = 'practice-title';
    container.appendChild(practiceAreaTitle);

    const practiceContainer = document.createElement('box');
    practiceContainer.className = 'practice-container';
    container.appendChild(practiceContainer);

    let practiceArea = 'multiples';
    let difficulty = 'intermediate';

    const selectMultiples = document.createElement('button');
    selectMultiples.innerHTML = 'Multiples';
    selectMultiples.className = 'practice-area';
    selectMultiples.id = 'multiples';
    practiceContainer.appendChild(selectMultiples);

    const multiplesButton = document.getElementById('multiples');
    multiplesButton.addEventListener('click', function () {
      practiceArea = 'multiples';
    });

    const selectFactors = document.createElement('button');
    selectFactors.innerHTML = 'Factors';
    selectFactors.className = 'practice-area';
    selectFactors.id = 'factors';
    practiceContainer.appendChild(selectFactors);

    const factorsButton = document.getElementById('factors');
    factorsButton.addEventListener('click', function () {
      practiceArea = 'factors';
    });

    const selectPrimes = document.createElement('button');
    selectPrimes.innerHTML = 'Primes';
    selectPrimes.className = 'practice-area';
    selectPrimes.id = 'primes';
    practiceContainer.appendChild(selectPrimes);

    const primesButton = document.getElementById('primes');
    primesButton.addEventListener('click', function () {
      practiceArea = 'primes';
    });

    // const selectInequalities = document.createElement('button');
    // selectInequalities.innerHTML = 'Inequalities';
    // selectInequalities.className = 'practice-area';
    // practiceContainer.appendChild(selectInequalities);
    // const selectEqualities = document.createElement('button');
    // selectEqualities.innerHTML = 'Equalities';
    // selectEqualities.className = 'practice-area';
    // practiceContainer.appendChild(selectEqualities);

    const beginContainer = document.createElement('div');
    beginContainer.className = 'begin-container';
    container.appendChild(beginContainer);

    const beginGame = document.createElement('button');
    beginGame.innerHTML = 'Begin!';
    beginGame.className = 'begin-button';
    beginGame.id = 'begin';
    beginContainer.appendChild(beginGame);

    const beginButton = document.getElementById('begin');
    beginButton.addEventListener('click', function () {
      gameController(practiceArea, difficulty);
    });
  })();
};

export { startMenu };
