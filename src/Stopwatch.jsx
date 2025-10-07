import React, {useState, useEffect, useRef} from 'react'

export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef = useRef(null);
    const StartTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            IntervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - StartTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(IntervalIdRef.current);
        }

    }, [isRunning])

    function start() {
        setIsRunning(true);
        StartTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className='stopwatch'>
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={stop} className="stop-btn">Stop</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
    )
}
