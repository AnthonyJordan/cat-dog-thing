import React from 'react'
import CommentList from './CommentList'

function CommentContainer({ commentList, onCommentDelete }) {
const commentElements =  commentList.map((comment) => (
        <CommentList key={comment.id} id={comment.id} comment={comment.comment} name={comment.name} onCommentDelete={onCommentDelete}/>))
    return (
        <div className="comment-container">
            {commentElements}
        </div>
    );
}

export default CommentContainer;