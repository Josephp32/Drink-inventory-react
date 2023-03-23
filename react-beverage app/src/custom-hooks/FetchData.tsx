import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount is the list brackets
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch }
}