import '../assets/css/posts.css';

function ExpendedPage ({title, content}) {
    return (
        <div className="post-background">
            <div className="post-fill">
                <a className='post-fill-div'>
                    <h3 className="post-content-title"> {title} </h3>
                    <p className="post-content">  {content} </p>
                </a>
            </div>
        </div>
    )
}

export default ExpendedPage;