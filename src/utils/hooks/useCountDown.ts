import { useState, useEffect } from 'react';

const useCountdown = (initialTimeInSeconds: number) => {

    // Retrieve the stored countdown state from localStorage
    const storedCountdownState = localStorage.getItem('countdownState');
    const storedState = storedCountdownState ? JSON.parse(storedCountdownState) : null;

    // Calculate the initial time based on the stored state
    const initialTime = storedState ? storedState.currentTime : initialTimeInSeconds;

    const [timeInSeconds, setTimeInSeconds] = useState(initialTime);
    const [stopped, setStopped] = useState(false);

    useEffect(() => {
        if (timeInSeconds <= 0) {
            setStopped(true);
            return;
        }

        const interval = setInterval(() => {
            if (timeInSeconds > 0) {
                setTimeInSeconds(timeInSeconds - 1);
            }
        }, 1000);

        // Store the current countdown state in localStorage every second
        const countdownState = { initialTime: initialTimeInSeconds, currentTime: timeInSeconds };
        localStorage.setItem('countdownState', JSON.stringify(countdownState));

        return () => clearInterval(interval);
    }, [timeInSeconds, initialTimeInSeconds]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return {
            hour: `${String(hours).padStart(2, '0')}`,
            minute: `${String(minutes).padStart(2, '0')}`,
            second: `${String(seconds).padStart(2, '0')}`
        }
    };

    return {
        time: formatTime(timeInSeconds),
        stopped,
        reset: () => {
            setTimeInSeconds(initialTimeInSeconds)
            setStopped(false);

            // Reset and remove the countdown state from localStorage
            localStorage.removeItem('countdownState');
        },
    };
}

export default useCountdown;