import {useState, useEffect} from "react";

function CatDisplay(){
    const [catImage, setCatImage]= useState("")
    const [animeQuote, setAnimeQuote] =useState({})
    useEffect(()=>fetchData(),[])

    function fetchData(){
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quote => setAnimeQuote(quote))
        fetch("https://cataas.com/cat?json=true").then(r=>r.json()).then(cat => setCatImage(`https://cataas.com${cat.url}`))
    }
    return(
        <div>
            <img src={catImage} alt="cat"></img>
            <div>
                <h3>{animeQuote.quote}</h3>
                <p>{animeQuote.character}</p>
            </div>
            <button onClick={fetchData}>New Cat!</button>
        </div>
    )
}

export default CatDisplay