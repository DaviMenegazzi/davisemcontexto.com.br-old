import React from 'react';

import '../assets/css/posts.css';
import {
    Post
} from "../pages/api/models";

function Posts ({ postObject }) {

    const [rating, setRating] = React.useState("");
    React.useEffect(() => {
        setRating({
            upvotes: postObject.upvotes,
            downvotes: postObject.downvotes
        });
    }, [])

    /**
     * Esse método vai coordenar os likes e dislikes no post
     * Quando o botão for clicado, será enviado um request individual para
     * o servidor, assim, atualizando o rating do post.
     */
    const handleRatingClick = (event) => {
        event.preventDefault();

        if (event.target.id === "upv") {
            setRating({upvotes: postObject.upvotes+1, downvotes: postObject.downvotes});
        }
        if (event.target.id === "downv") {
            setRating({upvotes: postObject.upvotes, downvotes: postObject.downvotes+1});
        }

        // Faz o update do rating do post pelo nome da tag
        postObject.updateRating(event.target.id);
    }

    return (
        <div className="post-holder">
            <div className="post-contents">
                <a href={"/"+postObject.slug}>
                    <div className="post-header">
                        <h1 className='title'> 
                            { 
                                (postObject.title.length > 8)  ?  
                                    postObject.title.slice(0, 6) + "..." : postObject.title 
                            } 
                        </h1>
                        <p className='content'>
                            { 
                                (postObject.content.length > 15) ? 
                                    postObject.content.slice(0, 15) + "..." : postObject.content 
                            } 
                        </p>
                    </div>
                </a>
                <div className="rating-group">
                    <a onClick={handleRatingClick}>
                        <div className="rating" id="upv">
                            { rating.upvotes } Like
                        </div>
                    </a>
                    <a onClick={handleRatingClick} >
                        <div className="rating" id="downv">
                            { rating.downvotes } Dislike
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Posts;