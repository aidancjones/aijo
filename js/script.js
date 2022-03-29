const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName () {
  const name = peompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
