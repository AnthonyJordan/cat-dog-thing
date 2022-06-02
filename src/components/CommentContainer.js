import React from 'react'
import CommentList from './CommentList'

function CommentContainer({ commentList }) {
const commentElements =  commentList.map((comment) => (
        <CommentList key={comment.id} comment={comment.comment} name={comment.name} />))
    return (
        <div className="comment-container">
            {commentElements}
        </div>
    );
}

export default CommentContainer;