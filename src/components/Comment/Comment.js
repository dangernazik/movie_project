import React, {useEffect, useState} from 'react';
import {
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    query,
    where
} from "firebase/firestore";
import {db} from "../../index"
import css from "../CommentForm/CommentForm.module.css";
    const Comment = ({filmId, filmName}) => {
        const [newUsername, setNewUsername] = useState("");
        const [newComment, setNewComment] = useState("");
        const [comments, setComments] = useState([]);
        const commentsCollectionRef = collection(db, "comments");
        const keywords = localStorage.getItem('email')

        const createComment = async () => {
            await addDoc(commentsCollectionRef, { username: newUsername, comment: newComment, filmId: filmId, filmName: filmName, email:keywords });
        };

        useEffect(() => {
            const unsubscribe = onSnapshot(
                query(commentsCollectionRef, where("filmId", "==", filmId)),
                (snapshot) => {
                    const comments = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }));
                    setComments(comments);
                }
            );

            return () => unsubscribe();
        }, [filmId]);

        const isSubmitDisabled = !newComment || !newUsername;


        return (
            <div className="App">
                <div className={css.formAdd}>
                    <input className={css.name}
                        placeholder="Username..."
                        onChange={(event) => {
                            setNewUsername(event.target.value);
                        }}
                    />
                    <input className={css.comment}
                        placeholder="Comment..."
                        onChange={(event) => {
                            setNewComment(event.target.value);
                        }}
                    />
                    <button onClick={createComment} disabled={isSubmitDisabled}>Send comment</button>
                </div>

                {comments.map((comment) => {
                    return (
                        <div className={css.comments}>
                            <div  className={css.oneComment}>
                                {" "}
                                <div> <b> {comment.username}:</b></div>
                                <div>{comment.comment}</div>
                            </div>
                        </div>

                    );
                })}
            </div>
        );
    }

export {Comment};