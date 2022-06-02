import React, { useState } from 'react'

function CommentForm({handleSubmitNewComment}) {
    const [newComment, setNewComment] = useState({
        comment: "",
        name: ""
    })

    function handleNewComment(e) {
        const { name, value } = e.target
        setNewComment((newComment) => ({ ...newComment, [name]: value }));
    }

    const handleSubmitComment = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/comments", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(newComment)
        })
            .then((res) => res.json())
            .then((newComment) => {handleSubmitNewComment(newComment)
                setNewComment({comment: "", name: ""})})
    }

    return (
        <form className="new-comment-form" onSubmit={handleSubmitComment}>
            <input placeholder="comment" name="comment" onChange={handleNewComment} value={newComment.comment} />
            <input placeholder="name" name="name" onChange={handleNewComment} value={newComment.name} />
            <input type="submit" value="Leave us your comments!" />
        </form>
    )
}


export default CommentForm