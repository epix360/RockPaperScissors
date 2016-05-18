(function () {

    var Game = function () {

        this.items = ['rock', 'paper', 'scissors'];
        this.computerItem;
    };

    Game.prototype.start = function () {
        var computerChoice = Math.floor(Math.random() * 3);

        this.computerItem = this.items[computerChoice];

        console.log('Computer Item: ', this.computerItem);
        document.getElementById('result').innerHTML = 'Computer is ready. Make your move.';
    };

    Game.prototype.play = function(playerItem) {

        //Player = Rock
        if (playerItem === 'rock' && this.computerItem === 'rock') {
            document.getElementById('result').innerHTML = 'Computer chose rock. It\'s a tie.';
        } else if (playerItem === 'rock' && this.computerItem === 'paper') {
            document.getElementById('result').innerHTML = 'Computer chose paper. Computer wins!';
        } else if (playerItem === 'rock' && this.computerItem === 'scissors') {
            document.getElementById('result').innerHTML = "Computer chose scissors. You win!";
        }

        //Player = Paper
        if (playerItem === 'paper' && this.computerItem === 'rock') {
            document.getElementById('result').innerHTML = 'Computer chose rock. You win!';
        } else if (playerItem === 'paper' && this.computerItem === 'paper') {
            document.getElementById('result').innerHTML = 'Computer chose paper. It\'s a tie.';
        } else if (playerItem === 'paper' && this.computerItem === 'scissors') {
            document.getElementById('result').innerHTML = 'Computer chose scissors. Computer wins!';
        }

        //Player = Scissors
        if (playerItem === 'scissors' && this.computerItem === 'rock') {
            document.getElementById('result').innerHTML = 'Computer chose rock. Computer wins!';
        } else if (playerItem === 'scissors' && this.computerItem === 'paper') {
            document.getElementById('result').innerHTML = 'Computer chose paper. You win!';
        } else if (playerItem === 'scissors' && this.computerItem === 'scissors') {
            document.getElementById('result').innerHTML = 'Computer chose scissors. It\'s a tie.';
        }
    };

    window.RockPaperScissors = Game;
})();