document.addEventListener('DOMContentLoaded', () => {
    const team1PointsButton = document.getElementById('team1-points');
    const team2PointsButton = document.getElementById('team2-points');
    const team1FoulsButton = document.getElementById('team1-fouls');
    const team2FoulsButton = document.getElementById('team2-fouls');
    const gamePeriodButton = document.getElementById('game-period');
    const gameTimerButton = document.getElementById('game-timer');
    const possessionTimerButton = document.getElementById('possession-timer');
    const timer24Button = document.getElementById('timer-24');
    const timer14Button = document.getElementById('timer-14');

    let gameTimerInterval;
    let possessionTimerInterval;

    function padNumber(num, size) {
        let s = "000" + num;
        return s.substr(s.length - size);
    }

    team1PointsButton.addEventListener('click', () => {
        team1PointsButton.textContent = padNumber(parseInt(team1PointsButton.textContent) + 1, 3);
    });

    team2PointsButton.addEventListener('click', () => {
        team2PointsButton.textContent = padNumber(parseInt(team2PointsButton.textContent) + 1, 3);
    });

    team1FoulsButton.addEventListener('click', () => {
        team1FoulsButton.textContent = parseInt(team1FoulsButton.textContent) + 1;
    });

    team2FoulsButton.addEventListener('click', () => {
        team2FoulsButton.textContent = parseInt(team2FoulsButton.textContent) + 1;
    });

    gamePeriodButton.addEventListener('click', () => {
        gamePeriodButton.textContent = parseInt(gamePeriodButton.textContent) + 1;
    });

    gameTimerButton.addEventListener('click', () => {
        if (gameTimerInterval) {
            clearInterval(gameTimerInterval);
            gameTimerInterval = null;
        } else {
            let seconds = 0;
            gameTimerInterval = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const displaySeconds = seconds % 60;
                gameTimerButton.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
            }, 1000);
        }
    });

    possessionTimerButton.addEventListener('click', () => {
        if (possessionTimerInterval) {
            clearInterval(possessionTimerInterval);
            possessionTimerInterval = null;
        } else {
            let seconds = parseInt(possessionTimerButton.textContent);
            possessionTimerInterval = setInterval(() => {
                if (seconds > 0) {
                    seconds--;
                    possessionTimerButton.textContent = `${seconds}`;
                } else {
                    clearInterval(possessionTimerInterval);
                    possessionTimerInterval = null;
                }
            }, 1000);
        }
    });

    timer24Button.addEventListener('click', () => {
        possessionTimerButton.textContent = '24';
    });

    timer14Button.addEventListener('click', () => {
        possessionTimerButton.textContent = '14';
    });
});