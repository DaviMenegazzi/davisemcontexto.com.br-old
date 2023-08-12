import '../assets/css/posts.css';

function Posts ({title, content, id}) {
    let href = id;
    return (
        <div className="post-background">
            <div className="post-fill">
                <a href={href} className='post-fill-div'>
                    <h3 className="post-content-title"> {title} </h3>
                    <p className="post-content">  {content} </p>
                </a>
            </div>
        </div>
    )
}

export default Posts;