import React from 'react';
import { Link } from 'react-router-dom';
import './MainRight.scss';

function MainRight() {
  return (
    <div className="main__right">
      <div className="myId">
        <div className="img__container">
          <img
            className="avatar__img"
            alt="my profile"
            src="/images/minju/myprofile.jpeg"
          />
        </div>
        <div className="id__container">
          <div className="avatar__id">wecode_bootcamp</div>
          <div className="avatar__description">Wecode | 위코드</div>
        </div>
      </div>

      <div className="story">
        <div className="story__header">
          <div className="header__text">스토리</div>
          <div className="header__seeAll">모두 보기</div>
        </div>
        <div className="story__items">
          <div className="story__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile3.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">_yum_s</div>
              <div className="avatar__description">16분 전</div>
            </div>
          </div>
          <div className="story__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile4.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">drink_eat_drink</div>
              <div className="avatar__description">3시간 전</div>
            </div>
          </div>
          <div className="story__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile5.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">hyukyc</div>
              <div className="avatar__description">20시간 전</div>
            </div>
          </div>
          <div className="story__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile8.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">jminkeek</div>
              <div className="avatar__description">2주 전</div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <div className="recommendations__header">
          <div className="header__text">회원님을 위한 추천</div>
          <div className="header__seeAll">모두 보기</div>
        </div>
        <div className="recommendations__items">
          <div className="recommendations__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile6.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">saranghaeeee</div>
              <div className="avatar__description">
                joahaee님 외 2명이 팔로우합니다
              </div>
            </div>
            <button className="follow">팔로우</button>
          </div>
          <div className="recommendations__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile7.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">wecode_bootcamp</div>
              <div className="avatar__description">
                mijnink님 외 14명이 팔로우합니다
              </div>
            </div>
            <button className="follow">팔로우</button>
          </div>
          <div className="recommendations__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile8.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">weworkspace</div>
              <div className="avatar__description">
                wecode_bootcamp님 외 300명이 팔로우합니다
              </div>
            </div>
            <button className="follow">팔로우</button>
          </div>
          <div className="recommendations__items__item">
            <div className="img__container">
              <img
                className="avatar__img"
                alt="random user"
                src="/images/minju/profile8.jpeg"
              />
            </div>
            <div className="id__container">
              <div className="avatar__id">weworkspace</div>
              <div className="avatar__description">
                wecode_bootcamp님 외 300명이 팔로우합니다
              </div>
            </div>
            <button className="follow">팔로우</button>
          </div>
        </div>
      </div>

      <div className="moreInfos">
        <ul className="infolists">
          <li>
            <Link to="#">Instagram 정보</Link>
          </li>
          <li>
            <Link to="#">지원</Link>
          </li>
          <li>
            <Link to="#">홍보 센터</Link>
          </li>
          <li>
            <Link to="#">API</Link>
          </li>
          <li>
            <Link to="#">채용 정보</Link>
          </li>
          <li>
            <Link to="#">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="#">약관</Link>
          </li>
          <li>
            <Link to="#">위치</Link>
          </li>
          <li>
            <Link to="#">디렉토리</Link>
          </li>
          <li>
            <Link to="#">프로필</Link>
          </li>
          <li>
            <Link to="#">해시태그</Link>
          </li>
          <li>
            <Link to="#">언어</Link>
          </li>
        </ul>
      </div>
      <div className="copyright">© 2022 INSTAGRAM FROM META</div>
    </div>
  );
}

export default MainRight;
