var items = ['rock', 'paper', 'scissors'];
var computerChoice = Math.floor(Math.random() * 3);
var computerItem = items[computerChoice];

console.log('Computer Item: ', computerItem);

window.play = function (playerItem) {
  
  //Player = Rock
  if(playerItem === 'rock' && computerItem === 'rock') {
      document.getElementById('result').innerHTML = "Computer chose rock. It's a tie.";
  } 
  else if(playerItem === 'rock' && computerItem === 'paper') {
      document.getElementById('result').innerHTML = "Computer chose paper. Computer wins!";
  } 
  else if(playerItem === 'rock' && computerItem === 'scissors') {
      document.getElementById('result').innerHTML = "Computer chose scissors. You win!";
  } 
  
  //Player = Paper
  if(playerItem === 'paper' && computerItem === 'rock') {
      document.getElementById('result').innerHTML = "Computer chose rock. You win!";
  } 
  else if(playerItem === 'paper' && computerItem === 'paper') {
      document.getElementById('result').innerHTML = "Computer chose paper. It's a tie.";
  } 
  else if(playerItem === 'paper' && computerItem === 'scissors') {
      document.getElementById('result').innerHTML = "Computer chose scissors. Computer wins!";
  } 
  
  //Player = Scissors
  if(playerItem === 'scissors' && computerItem === 'rock') {
      document.getElementById('result').innerHTML = "Computer chose rock. Computer wins!";
  } 
  else if(playerItem === 'scissors' && computerItem === 'paper') {
      document.getElementById('result').innerHTML = "Computer chose paper. You win!";
  } 
  else if(playerItem === 'scissors' && computerItem === 'scissors') {
      document.getElementById('result').innerHTML = "Computer chose scissors. It's a tie.";
  } 
  
};


