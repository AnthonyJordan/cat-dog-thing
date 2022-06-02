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
        <div className="display">
            <img src={catImage} alt="cat"></img>
            <div className="quote">
                <h3>{animeQuote.quote}</h3>
                <p style={{textAlign:"center"}}>-{animeQuote.character}</p>
            </div>
            <button className="button" onClick={fetchData}>New Cat!</button>
        </div>
    )
}

export default CatDisplay