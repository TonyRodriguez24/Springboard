import axios from "axios";
import { useState } from "react";


const useAxios = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const getData = async (endpoint = "") => {
        setLoading(true) //set this to true while we get response
        setError(null)
        try {
            const response = await axios.get(`${url}${endpoint}`); //get response
            setData(previousData => [...previousData, response.data])
            return response.data
        }
        catch (error) {
            setError(error)
            return null
        }
        finally {
            setLoading(false)

        }
    }


    return [data, loading, error, getData]
}

export default useAxios;


// const [state, setState] = useAxios(url)