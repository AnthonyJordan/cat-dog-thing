import './App.css';
import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import CatDisplay from './components/CatDisplay';
import Home from './components/Home';
import CommentContainer from './components/CommentContainer';
import CommentForm from './components/CommentForm';
import DogFact from './components/DogFacts';


function App() {

  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then((res) => res.json())
      .then((data) => setCommentList(data))
  }, []);

  function addNewComment(newComment){
    const updatedComments = [...commentList, newComment]
    setCommentList(updatedComments)
  }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cats">
          <CatDisplay />
        </Route>
        <Route exact path="/dogs">
          <DogFact />
        </Route>
      </Switch>
      <CommentContainer commentList={commentList}/>
      <CommentForm handleSubmitNewComment={addNewComment}/>
    </div>
  );
}

export default App;
