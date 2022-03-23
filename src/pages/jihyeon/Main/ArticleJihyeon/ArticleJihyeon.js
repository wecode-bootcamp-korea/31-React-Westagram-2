import './ArticleJihyeon.scss';
import React from 'react';

const ArticleJihyeon = props => {
  const {
    replyWriterNickName: replyWriter,
    replyContent,
    articleContent,
    articleWriterId: articleId,
    articleWriterNickname,
  } = props.article;

  return (
    <article className="articleJihyeon">
      <section className="articleProfile">
        <img
          className="articleProfilePhoto"
          src={`images/jihyeon/profilePhoto/profPhoto${articleId}.jpg`}
          alt="image load error"
        />
        <span className="articleProfileName" />
        {articleWriterNickname}
        <span />
        <button className="articleProfileOptBtn">
          <img
            src="images/jihyeon/articleMenuBtn.png"
            alt="article option button"
          />
        </button>
      </section>
      <section className="articlePhotoArea">
        <img
          src={`images/jihyeon/articlePhoto/articlePhoto${articleId}.avif`}
          className="articlePhoto"
          alt="image load error"
        />
      </section>

      <section className="articleTextContent">
        <p>{articleContent}</p>
      </section>

      <section className="articleBtnArea">
        <button className="articleLikeBtn">
          <img src="images/jihyeon/blackEmptyHeart.png" alt="emepty heart" />
        </button>
        <button className="articleReplyBtn">
          <img src="images/jihyeon/textBtn.png" alt="go reply button" />
        </button>
        <button className="articleSaveBtn">
          <img src="images/jihyeon/downloadBtn.png" alt="save article button" />
        </button>
        <button className="articleBookmarkBtn">
          <img src="images/jihyeon/bookmarkEmpty.png" alt="bookmark button" />
        </button>
      </section>

      <section className="articleLikeArea">
        <img
          className="whoFirstLikePhoto"
          src="images/jihyeon/fullRedHeart.png"
          alt="first like person's photo"
        />
        <span className="infoLikeWho">
          첫번째 좋아요 닉네임외의 n명이 좋아합니다. lorem
        </span>
      </section>

      <section className="articleReplyArea">
        <ul className="replyWriterArea">
          {replyWriter.map((nick, index) => (
            <li key={index}>{nick}</li>
          ))}
        </ul>
        <ul className="replyContentArea">
          {replyContent.map((content, index) => (
            <li key={index}>{content}</li>
          ))}
        </ul>
      </section>

      <form className="articleInsertReplyArea">
        <input
          type="text"
          className="articleInsertReplyContent"
          placeholder="댓글 달기.."
        />
        <button type="submit" className="articleInsertReplyBtn">
          <span>게시</span>
        </button>
      </form>
    </article>
  );
};

export default ArticleJihyeon;
