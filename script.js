const countdown = document.getElementById("countdown");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bg-music");
const playMusicBtn = document.getElementById("play-music");

// Set the target date
const targetDate = new Date("April 30, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        countdown.style.display = "none";
        surprise.style.display = "block";
    }
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Enable Music Playback After User Clicks
playMusicBtn.addEventListener("click", () => {
    music.play().then(() => {
        playMusicBtn.style.display = "none"; // Hide button after playing
    }).catch(error => {
        console.error("Music playback failed:", error);
    });
});

// Show floating hearts when the surprise is revealed
function showHearts() {
    alert("🎉 Happy Birthday, Juwon! You are loved! 💖💖💖");
}