/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import '../../../styles/common.scss';
import './MainJihyeon.scss';
import Nav from '../../../components/Nav/Nav';
import ArticleJihyeon from './ArticleJihyeon/ArticleJihyeon';
import MainRight from './MainRight/MainRight';

const MainJihyeon = () => {
  const [articleInfo, setArticleInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/articleData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setArticleInfo(data);
      });
  }, []);

  return (
    <main className="mainJihyeon">
      <Nav />
      <div className="article">
        {articleInfo.map(articleInfo => (
          <ArticleJihyeon
            key={articleInfo.articleWriterId}
            // article={articleInfo}
            {...articleInfo}
          />
        ))}
      </div>
      <MainRight />
    </main>
  );
};

export default MainJihyeon;
