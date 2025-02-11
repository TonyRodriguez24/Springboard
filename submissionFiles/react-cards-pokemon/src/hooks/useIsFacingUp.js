import { useState } from "react";

const useIsFacingUp = () => {
    const [state, setState] = useState(true);

    const flipCard = () => {
        setState(previousState => !previousState)
    }

    return [state, flipCard]
}

export default useIsFacingUp;