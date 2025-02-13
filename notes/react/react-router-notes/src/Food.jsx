import { useParams } from "react-router-dom";

function Food() {
    const params = useParams();
    return (
        <div>
            <h1>You must like {params.name}</h1>
        </div>);
}

export default Food;