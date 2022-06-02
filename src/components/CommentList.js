import React from 'react'


function CommentList({ id, comment, name }) {


    return (
        <div className="comment-list">
            <p>{comment}</p>
            <p>{name}</p>
        </div>
    );
}
export default CommentList