import {React, useEffect, useState} from 'react'

function App() {

    const [randomDog, setRandomDog] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.message)
            setRandomDog(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
    <div>
        <img
        alt={"A Random Dog"}
        src={randomDog}
        />
    </div>
    )
    }

export default App