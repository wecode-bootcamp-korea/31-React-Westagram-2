const Comment = ({ userName, content }) => {
  return (
    <li>
      <span className="commentId">{userName}&nbsp;</span>
      <span className="commentContent">{content}</span>
    </li>
  );
};

export default Comment;
