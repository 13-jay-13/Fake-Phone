function updateClock() {

    const clockElement = document.getElementById("clock");

    if (!clockElement) {
        return;
    }

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formattedMinutes = String(minutes).padStart(2, "0");

    clockElement.textContent =
        `${hours}:${formattedMinutes}`;
}

updateClock();

setInterval(
    updateClock,
    1000
);