import "../assets/css/expanded.css";

function Details ({ title, content }) {
  return (
    <div className="page">
      <div className="page-content">
        <div className="post-title-holder">
          <h4 className="post-title">{title}</h4>
        </div>
        <div className="post-content-holder">
          <p className="post-content">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
