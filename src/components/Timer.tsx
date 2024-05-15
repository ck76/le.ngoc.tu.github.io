"use client";
import { useState, useEffect } from 'react';

interface TimerProps {
    startDate: Date;
}

const Timer: React.FC<TimerProps> = ({ startDate }) => {
    const [duration, setDuration] = useState('');
    const [format, setFormat] = useState('days');

    useEffect(() => {
        const calculateDuration = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();
            let formattedDuration = '';

            switch (format) {
                case 'seconds':
                    formattedDuration = `${Math.floor(diff / 1000)} seconds`;
                    break;
                case 'minutes':
                    formattedDuration = `${Math.floor(diff / 1000 / 60)} minutes`;
                    break;
                case 'hours':
                    formattedDuration = `${Math.floor(diff / 1000 / 60 / 60)} hours`;
                    break;
                case 'days':
                default:
                    formattedDuration = `${Math.floor(diff / 1000 / 60 / 60 / 24)} days`;
                    break;
            }

            setDuration(formattedDuration);
        };

        calculateDuration();
        const intervalId = setInterval(calculateDuration, 1000);

        return () => clearInterval(intervalId);
    }, [startDate, format]);

    const toggleFormat = () => {
        const formats = ['days', 'hours', 'minutes', 'seconds'];
        const nextFormatIndex = (formats.indexOf(format) + 1) % formats.length;
        setFormat(formats[nextFormatIndex]);
    };

    return (
        <div className="text-white text-center">
            <h1 className="text-4xl mb-4">We have been together for:</h1>
            <p className="text-2xl mb-4">{duration}</p>
            <button
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700"
                onClick={toggleFormat}
            >
                Toggle Format
            </button>
        </div>
    );
};

export default Timer;
