function countdown() {
    const newYearDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDifference = newYearDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const d = Math.floor(timeDifference / days);
    const h = Math.floor((timeDifference % days) / hours);
    const m = Math.floor((timeDifference % hours) / minutes);
    const s = Math.floor((timeDifference % minutes) / seconds);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');

    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.querySelector('h1').innerText = "Happy New Year!";
    }
}

const countdownInterval = setInterval(countdown, 1000);