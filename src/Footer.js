import React from "react";
import styled from "styled-components";
import logo from "../public/assets/ReachLogo-InLine.png";
import spotify from "../public/assets/spotify.png";
import reddit from "../public/assets/reddit.png";
import github from "../public/assets/github.png";
import youtube from "../public/assets/youtube.png";
import discord from "../public/assets/discord.png";
import twitter from "../public/assets/twitter.png";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
display: flex; 
flex-direction:  column;
justify-content: space-between ;
width: 87.5%;
height: 101px;
margin-left: 6.25%;
`
const SocialLogo = styled.div`
  display: inline-block;
  margin-left: 4px; 
  margin-right: 4px;
`

const FooterLogo = styled.img`
  width: 8.8125em;
  height: 1.8125em;
  align-self: center;
`;

const Footer = styled.div`
  background: #000000;
  padding: 1%;
  display: flex;
  align-items: center;
  height: 197px;;
  @media only screen and (max-width: 375px) {
    position: relative;
    width: 375px;
    bottom: 0px;
    margin-top: 64px;
    height: 197px;
  }
`;
const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 375px) {
    /* gap: 24px; */
    justify-content: space-between;
  }
`;

const socials = [
  {
    logo: spotify,
    address:
      "https://open.spotify.com/show/3Zu0ti3S9A950dHSqQCuLT?si=b21c8a6c82fe472a",
    altText: "Crypto Curious with Estefania and JP",
  },
  {
    logo: twitter,
    address: "https://twitter.com/reachlang",
    altText: "Reach on Twitter",
  },
  {
    logo: reddit,
    address: "https://www.reddit.com/r/reach_sh/",
    altText: "Reach on Reddit",
  },
  {
    logo: discord,
    address: "https://discord.com/invite/reachsh",
    altText: "Reach on Discord",
  },
  {
    logo: youtube,
    address: "https://www.youtube.com/c/Reachsh/featured",
    altText: "Reach on Youtube",
  },
  {
    logo: github,
    address: "https://github.com/reach-sh/",
    altText: "Reach on Youtube",
  },
];
export default () => (
  <Footer>
    <ContainerDiv>
      <FooterLogo src={logo} alt="logo" />
      <Socials>
        {socials.map((social) => (
          <SocialLogo>
            <Link to={social.address}>
              <img src={social.logo} alt={social.altText} />
            </Link>
          </SocialLogo>
        ))}
      </Socials>
    </ContainerDiv>
  </Footer>
);
