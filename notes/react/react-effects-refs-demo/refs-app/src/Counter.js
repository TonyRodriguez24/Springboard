import React, { useEffect, useState } from 'react';

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1)
    }

    useEffect(() => {
        console.log('running')
        document.title = `Hi${'!'.repeat(num)}`

    })
    return (
        <div>
            Lets get excited
            <button onClick={increment}>Get more excited</button>
            <p>Counter:{num}</p>
        </div>
    )
}

export default Counter;