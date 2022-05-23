import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        
        <p>Download Our App for Android users</p>
        <img src={playStore} alt="playstore" />
        <p>Download Our App for IOS users </p>
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ShopZo</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Pankaj Shukla</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/pankaj__07d">Instagram</a>
        <a href="https://www.youtube.com/channel/UCLyIcqIn1RG7njUzSfnhuaw">Youtube</a>
        <a href="http://instagram.com/pankaj__07d">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
