import './ArticleJihyeon.scss';
import React from 'react';

const ArticleJihyeon = ({
  replyWriterNickName,
  replyContent,
  articleContent,
  articleWriterId,
  articleWriterNickname,
}) => {
  return (
    <article className="articleJihyeon">
      <section className="articleProfile">
        <img
          className="articleProfilePhoto"
          src={`images/jihyeon/profilePhoto/profPhoto${articleWriterId}.jpg`}
          alt="/images/jihyeon/cross.png"
        />
        <span className="articleProfileName" />
        {articleWriterNickname}
        <span />
        <button className="articleProfileOptBtn">
          <img
            src="images/jihyeon/articleMenuBtn.png"
            alt="/images/jihyeon/cross.png"
          />
        </button>
      </section>
      <section className="articlePhotoArea">
        <img
          src={`images/jihyeon/articlePhoto/articlePhoto${articleWriterId}.avif`}
          className="articlePhoto"
          alt="/images/jihyeon/cross.png"
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
          alt="/images/jihyeon/cross.png"
        />
        <span className="infoLikeWho">
          첫번째 좋아요 닉네임외의 n명이 좋아합니다. lorem
        </span>
      </section>

      <section className="articleReplyArea">
        <ul className="replyWriterArea">
          {replyWriterNickName.map((nick, index) => (
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
