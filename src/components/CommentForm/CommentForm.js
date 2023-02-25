import React, {useEffect, useState} from 'react';

import css from './CommentForm.module.css'
import {useParams} from "react-router-dom";
const CommentForm = () => {
    const [name, setName] = useState("");
    const {movie_id} = useParams()
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${movie_id}`));
        if (savedComments) {
            setComments(savedComments);
        }
    }, [movie_id]);

    useEffect(() => {
        localStorage.setItem(`comments-${movie_id}`, JSON.stringify(comments));
    }, [comments, movie_id]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !comment) {
            alert("Please enter both your name and a comment");
            return;
        }
        const newComment = {
            name,
            comment,
            id: Date.now(),
        };
        setComments([...comments, newComment]);
        setName("");
        setComment("");
    };

    const renderComments = () => {
        return comments.map((comment) => (
            <div key={comment.id} className={css.oneComment}>
                <div className="comment-author"><b>{comment.name}:</b></div>
                <div className="comment-text">{comment.comment}</div>
            </div>
        ));
    };
    const isSubmitDisabled = !comment || !name;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={css.formAdd}>
                Add comment
                    <label >
                        <input className={css.name} placeholder={'Your name'} type="text" value={name} onChange={handleNameChange} />
                    </label>
                    <label>
                        <input className={css.comment} placeholder={"Add comment"} type="text" value={comment} onChange={handleCommentChange} />
                    </label>
                    <button type="submit" disabled={isSubmitDisabled}>
                        Add comment
                    </button>
                </div>
            </form>
            <div className={css.comments}>{renderComments()}</div>
        </div>
    );
};

export {CommentForm};