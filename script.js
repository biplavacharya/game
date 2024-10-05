document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start-button');
    const mainScreen = document.getElementById('main-screen');
    const gameScreen = document.getElementById('game-screen');
    const alphabetButtons = document.getElementById('alphabet-buttons');
    const audioPlayer = document.getElementById('audio-player');

    // Array of alphabet letters
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // Sounds to play when game starts
    const startSound1 = new Audio('assets/start-sound-1.mp3');
    const startSound2 = new Audio('assets/start-sound-2.mp3');

    // Event listener for start button
    startButton.addEventListener('click', function () {
        // Hide main screen and show game screen
        mainScreen.style.display = 'none';
        gameScreen.style.display = 'block';

        // Play the first and second sounds in sequence
        startSound1.play();
        startSound1.addEventListener('ended', () => {
            startSound2.play();
        });
    });

    // Create alphabet buttons and set event listeners for each
    alphabet.forEach(function (letter) {
        let button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('alphabet-button');

        // Event listener for alphabet buttons
        button.addEventListener('click', function () {
            playAudio(letter);
        });

        alphabetButtons.appendChild(button);
    });

    // Function to play audio based on clicked alphabet
    function playAudio(letter) {
        let audioFile = `assets/${letter.toLowerCase()}.mp3`; // Path to respective audio
        audioPlayer.src = audioFile;
        audioPlayer.play();
    }
});
