import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/pankaj__07d";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
      <h1>About Us</h1>

        <div>
        
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/instantpro/image/upload/c_scale,h_150,w_150/v1652608566/avatars/AboutProfile_j1y4sd.jpg"
              alt="Founder"
            />
            <h2>Pankaj Shukla</h2>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an Ecommerce website project created by US as a demo project for our institution......
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Network</h2>
            <a
              href="https://youtube.com/channel/UCLyIcqIn1RG7njUzSfnhuaw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/pankaj__07d" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
