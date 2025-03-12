import React, { useState } from "react";

function Time() {
  const [time, setTime] = useState("");

const fetchTime = async () => {
    try {
        const token = sessionStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/time`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
            const data = await response.json();
            setTime(data.time);
        } else {
            setTime("Unauthorized");
        }
    } catch (error) {
        console.error("Error fetching time:", error);
        setTime("Error fetching time");
    }
};

const formatTime = (timeString) => {
    const date = new Date(timeString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString(undefined, options);
};

return (
    <div>
        <h2>Get Server Time</h2>
        <button onClick={fetchTime}>Get Time</button>
        {time && <p>Time: { time === 'Unauthorized' ? time : formatTime(time) }</p>}
    </div>
);
}

export default Time;
