const Comment = ({ comment }) => {
  const handleComment = comment.map((item, i) => {
    return (
      <li>
        <span className="commentId">sunntfterrain_ &nbsp;</span>
        {item}
      </li>
    );
  });

  return <ul className="footer__comment">{handleComment}</ul>;
};

export default Comment;
