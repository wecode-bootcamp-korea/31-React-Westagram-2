import React from 'react';
import './FooterJihyeon.scss';

function Footer() {
  return (
    <footer className="footer">
      <button className="showCsBtn">고객 문의</button>
      <button className="showTermsBtn">약관</button>
      <span className="companyInfo">
        2022 Westagram 31th Jihyeon Jeon By React
      </span>
    </footer>
  );
}

export default Footer;
