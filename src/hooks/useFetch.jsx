import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                const result = await response.json()

                setData(result)

            } catch (error) {
                setError(error)
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}