/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { fetchApi } from "./fetchApi"

export const FetchSettings = (endPoint) => {
    const [settings, setSettings] = useState(null)
    const [dataloading, setLoading] = useState(false)
    const [dataerror, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetchApi.get(endPoint);
                setSettings(res.data.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }

        fetchData()
    }, [endPoint])

    return { settings, dataloading, dataerror }
}