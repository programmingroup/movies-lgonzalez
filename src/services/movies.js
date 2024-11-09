import { useState } from "react"
import { useEffect } from "react"

export function useMovies() {

    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch('https://whoa.onrender.com/whoas/random?results=5')
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    return { movies }
}