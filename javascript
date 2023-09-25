const mascot = document.getElementById("mascot");
const poop = document.getElementById("poop");

let hungerInterval, poopInterval, playInterval;

function randomPosition(element, container) {
    const x = Math.random() * (container.clientWidth - element.clientWidth);
    const y = Math.random() * (container.clientHeight - element.clientHeight);
    element.style.left = x + "px";
    element.style.top = y + "px";
}

function moveMascot() {
    randomPosition(mascot, mascot.parentElement);
}

function feedPet() {
    clearInterval(hungerInterval); // Stop any existing hunger timer
    hungerInterval = setInterval(() => {
        moveMascot(); // Pet moves when hungry
        randomPosition(poop, poop.parentElement); // And eventually poops
        poop.style.display = 'block';
    }, 5000); // Every 5 seconds
}

function cleanPet() {
    poop.style.display = 'none';
}

function playWithPet() {
    clearInterval(playInterval); // Stop any existing play timer
    let playCount = 0;
    playInterval = setInterval(() => {
        if (playCount < 10) { // Let's say the pet moves 10 times while playing
            moveMascot();
            playCount++;
        } else {
            clearInterval(playInterval);
        }
    }, 500); // Moves every 0.5 seconds while playing
}

// Move the mascot around randomly every 3 seconds
setInterval(moveMascot, 3000);
