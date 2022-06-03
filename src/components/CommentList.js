import React from 'react'


function CommentList({ id, comment, name, onCommentDelete }) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/comments/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onCommentDelete(id));
      }

    return (
        <div className="comments">
            <p>{comment}<br></br>
            -{name}<br></br><button className='button' onClick={handleDeleteClick}>X</button></p>
        </div>
    );
}
export default CommentList