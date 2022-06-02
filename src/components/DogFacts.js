import React, { useState, useEffect } from 'react'

function DogFact() {
    const [dogFact, setDogFact] = useState([])
    const [dogImage, setDogImage] = useState([])
    const [like, setLike] = useState(true)

    useEffect(() => { fetchData()}, []);


   function fetchData(){
    fetch('https://dog-api.kinduff.com/api/facts',)
            .then((res) => res.json())
            .then((fact) => setDogFact(fact.facts));
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then(dog => setDogImage(dog.message));
   }

    return (
        <div>
            <h2>'Sick Random Dog Facts!!</h2>
            <img src={dogImage} alt="dog"/>
            <p>
                {dogFact}
            </p>
            <button onClick={() => setLike(!like)}> {like ? "Like" : "Dislike"}</button>
            <button onClick={fetchData}>New Dog!</button>
        </div>
    )
}

export default DogFact