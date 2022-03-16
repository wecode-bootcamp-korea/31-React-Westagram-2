import React from "react";
import "../Nav/Nav.scss";

function Nav(){
    return (
        <nav>
            <div className="navbar">
                <div className="navbar__logo">
                    <i className="fa-brands fa-instagram"></i>
                    <div className="navbar__logo__text">Westagram</div>
                </div>
                <div className="navbar__search">
                    <input className="navbar__searchBar" placeholder="검색" />
                    <i className="fa-solid fa-magnifying-glass searchIcon"></i>
                    <i className="fa-solid fa-circle-xmark"></i>
                </div>
                <div className="navbar__moreFunctions">
                        <i className="fa-regular fa-compass"></i>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fas fa-regular fa-user-large"></i>
                </div>
        
                
                <div className="searchToggle">
                    <div className="toggle__arrow"></div>
                    <div className="searched__items"></div>
                </div>
        
                <div className="overlay"></div>
                <div className="profileOptions">
                    <div className="toggle__arrow"></div>
                    <div className="profileOptions__item">
                        <i className="fa-solid fa-user"></i>
                        <div className="profileOption__description">프로필</div>
                    </div>
                    <div className="profileOptions__item">
                        <i className="fa-regular fa-bookmark"></i>
                        <div className="profileOption__description">저장됨</div>
                    </div>
                    <div className="profileOptions__item">
                        <i className="fa-solid fa-gear"></i>
                        <div className="profileOption__description">설정</div>
                    </div>
                    <div className="profileOptions__item">로그아웃</div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;