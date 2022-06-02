import React from "react";
import catDogImage from "../cat-and-dog.jpg"

function Home(){
    return(
        <div>
            <h3>Welcome to our React App! Would you like to see a cat or a dog? Feel free to leave a comment!</h3>
            <img src={catDogImage} alt="cat and dog"></img>
        </div>
    )
}

export default Home
