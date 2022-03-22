import './ArticleJihyeon.scss';
import React, { useState, useEffect } from 'react';

const ArticleJihyeon = props => {
  const replyWriter = props.article.replyWriterNickName;
  const replyContent = props.article.replyContent;

  return (
    <article className="articleJihyeon">
      <section className="articleProfile">
        <img
          className="articleProfilePhoto"
          src={`images/jihyeon/profilePhoto/profPhoto${props.article.articleWriterId}.jpg`}
          alt="image load error"
        />
        <span className="articleProfileName" />
        {props.article.articleWriterNickname}
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
          src={`images/jihyeon/articlePhoto/articlePhoto${props.article.articleWriterId}.avif`}
          className="articlePhoto"
          alt="image load error"
        />
      </section>

      <section className="articleTextContent">
        <p>{props.article.articleContent}</p>
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
          {replyWriter.map(nick => (
            <li key={replyWriter}>{nick}</li>
          ))}
        </ul>
        <ul className="replyContentArea">
          {replyContent.map(content => (
            <li key={replyWriter}>{content}</li>
          ))}
        </ul>
      </section>

      <form className="articleInsertReplyArea">
        <input
          type="text"
          className="articleInsertReplyContent"
          placeholder="댓글 달기.."
          // onChange={replyNowHandler}
          // value={replyNow}
        />
        <button type="submit" className="articleInsertReplyBtn">
          <span>게시</span>
        </button>
      </form>
    </article>
  );
};

export default ArticleJihyeon;
