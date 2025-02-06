import React, { useState } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
  
    // setInterval(() => {
    //     setSeconds(seconds => seconds + 1)
    // }, 1000)

    return <h1>{seconds}</h1>
}

export default Timer;