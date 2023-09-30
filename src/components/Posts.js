import React from "react";

import "src/assets/css/posts.css";

function Posts({ postObject }) {
  const [rating, setRating] = React.useState("");
  React.useEffect(() => {
    setRating({
      upvotes: postObject.upvotes,
      downvotes: postObject.downvotes,
    });
  }, []);

  /**
   * Esse método vai coordenar os likes e dislikes no post
   * Quando o botão for clicado, será enviado um request individual para
   * o servidor, assim, atualizando o rating do post.
   */
  const handleRatingClick = (event) => {
    event.preventDefault();

    /** Faz o update visual */
    setRating({
      ...rating,
      [event.target.id]: postObject[event.target.id] += 1,
    });

    /** Faz o update na base de dados */
    postObject.updateRating(event.target.id);
  };

  return (
    <div className="post-holder">
      <div className="post-contents">
        <a href={"/" + postObject.slug}>
          <div className="post-header">
            <h1 className="title">
              {postObject.title.length > 8
                ? postObject.title.slice(0, 6) + "..."
                : postObject.title}
            </h1>
            <p className="content">
              {postObject.content.length > 15
                ? postObject.content.slice(0, 15) + "..."
                : postObject.content}
            </p>
          </div>
        </a>
        <div className="rating-group">
          <a onClick={handleRatingClick}>
            <div className="rating" id="upvotes">
              {rating.upvotes} Like
            </div>
          </a>
          <a onClick={handleRatingClick}>
            <div className="rating" id="downvotes">
              {rating.downvotes} Dislike
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Posts;
