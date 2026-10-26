import { useCallback, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const request = useCallback(async (url, options) => {
        try {
            setError(null)
            setLoading(true)
            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)
        } catch (error) {
            setError('Erro no fetch')
        } finally {
            setLoading(false)
        }
    }, [])

    return { data, error, loading, request }
}

export default useFetch