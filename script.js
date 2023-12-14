document.addEventListener('DOMContentLoaded', function() {
    const checkSentenceBtn = document.getElementById('checkSentence');
    const userSentenceInput = document.getElementById('userSentence');
    const feedbackContainer = document.getElementById('feedbackContainer');
    const shuffledSentenceContainer = document.getElementById('shuffledSentenceContainer');

    let currentSentence = '';

    function loadRandomSentence() {
        currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
        const words = currentSentence.split(' ');
        shuffleArray(words);
        shuffledSentenceContainer.textContent = words.join(' ');
        userSentenceInput.value = '';
        feedbackContainer.textContent = '';
        checkSentenceBtn.textContent = 'Check Sentence';
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Event listener for the Check Sentence/Next Sentence button
    checkSentenceBtn.addEventListener('click', function() {
        if (checkSentenceBtn.textContent === 'Next Sentence') {
            loadRandomSentence();
            return;
        }

        const userSentence = userSentenceInput.value.trim();
        if (userSentence === currentSentence) {
            feedbackContainer.textContent = 'Correct! You have arranged the sentence correctly.';
            feedbackContainer.style.color = 'green';
            checkSentenceBtn.textContent = 'Next Sentence';
        } else {
            feedbackContainer.textContent = 'Sorry, that is not correct. Try again.';
            feedbackContainer.style.color = '#e74c3c';
        }
    });

    // Event listener to check the sentence when the Enter key is pressed
    userSentenceInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            checkSentenceBtn.click();
        }
    });

    loadRandomSentence();
});
