const Comment = ({ comment }) => {
  const handleComment = comment.map((commentItem, i) => {
    return (
      <li>
        <span className="commentId">sunntfterrain_ &nbsp;</span>
        {commentItem}
      </li>
    );
  });

  return <ul className="footer__comment">{handleComment}</ul>;
};

export default Comment;
