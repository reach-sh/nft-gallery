import React from "react";
import logo from "../public/assets/ReachLogo-InLine.png";
import graphic from "../public/assets/ERC_GALLERY_GRAPHIC_1.png";
import wallet from "../public/assets/WalletIcon.png";
import spotify from "../public/assets/spotify.png"
import styled from "styled-components";
import { Link as L } from "react-router-dom";
import Button from "./Button";
import reddit from "../public/assets/reddit.png"
import github from "../public/assets/github.png"
import youtube from "../public/assets/youtube.png"
import discord from "../public/assets/discord.png"
import twitter from "../public/assets/twitter.png"


const links = [
  { displayText: "Gallery", address: "/" },
  { displayText: "About Reach", address: "/reach" },
  { displayText: "How To Build", address: "/how-to-build" },
];

const socials = [
  { logo: spotify, 
    address : "https://open.spotify.com/show/3Zu0ti3S9A950dHSqQCuLT?si=b21c8a6c82fe472a", 
    altText: "Crypto Curious with Estefania and JP"
  },
    { logo: twitter, 
    address : "https://twitter.com/reachlang", 
    altText: "Reach on Twitter"
  },
    { logo: reddit, 
    address : "https://www.reddit.com/r/reach_sh/", 
    altText: "Reach on Reddit"
  },
    { logo: discord, 
    address : "https://discord.com/invite/reachsh", 
    altText: "Reach on Discord"
  },
    { logo: youtube, 
    address : "https://www.youtube.com/c/Reachsh/featured", 
    altText: "Reach on Youtube"
  },
    { logo: github, 
    address : "https://github.com/reach-sh/", 
    altText: "Reach on Youtube"
  }

]

const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Navbar = styled.div`
  max-height: 8%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  padding: 24px 120px 24px 120px;
  background: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 11.25em;
  height: 2.3125em;
`;

const FooterLogo = styled.img`
  width:8.8125em;
  height: 1.8125em;
  align-self: center ;
`
const Graphic = styled.img`
  width: inherit;
  height: 100%;
  justify-self: center;
`;
const Links = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3%;
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
`;
const Connect = styled.div``;
const ConnectWalletButton = styled((props) => <Button {...props} />)`
  margin-right: 7%;
  width: 260px;
  height: 48px;
`;

const Main = styled.div`
  height: 73%;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;
const Interact = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Display = styled.div`
  width: 50vw;
  height: 100%;
`;

const Footer = styled.div`
  min-height: 18%;
  background: #000000;
  padding: 1%;
`;
const Socials = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

const Headline = styled.h2`
  max-width: 544px;
  max-height: 336px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 84px;
  color: #000000;
  margin-left: 25%;
`;

const Subtext = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  text-align: left;
  margin-left: 25%;
  max-width: 686px;
  max-height: 56px;
`;

const Link = styled((props) => <L {...props} />)`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;
const NetworkSelector = styled.select`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 8px;
gap: 8px;
width: 191px;
height: 40px;
border: 1px solid #999999;
border-radius: 8px;
margin-left: 24px;
`;
const Build = styled((props) => <Button {...props} />)`
  max-width: 195px;
  max-height: 44px;
  margin-top: 2%;
`;
const Gallery = styled((props) => <Button {...props} />)`
  max-width: 189px;
  max-height: 44px;
  margin-left: 24px;
`;

const ContainerDiv = styled.div`
display: flex; 
flex-direction:  column;
justify-content: space-between ;
width: 87.5%;
height: 101px;
margin-left: 6.25%;
`


const Action = styled.div`
  display: flex;
  flex-direction: column;
  width: 686px;
  margin-left: 25%;
  margin-top: 5%;
`;
const Selector = styled.span`
  height: 44px;
  width: 540px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

const Option = styled.option`
  width: 71px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #999999;
`;

const SocialLogo = styled.div`
  display: inline-block;
  margin-left: 4px; 
  margin-right: 4px;
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Logo src={logo} alt="logo" />
          <Links>
            {links.map((link) => (
              <Link key={link.displayText} to={link.address}>
                {link.displayText}
              </Link>
            ))}
          </Links>
          <Connect>
            <ConnectWalletButton
              label="Connect Wallet"
              backgroundColor="main"
              postIcon={wallet}
            />
          </Connect>
        </Navbar>
        <Main>
          <Interact>
            <Headline>
              Buy and sell NFTs [in] and [out] of the Reach Gallery
            </Headline>
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Subtext>
            <Action>
              <Selector>
                Select Network{" "}
                <NetworkSelector type={"select"}>
                  <Option value={"ethereum"}>Ethereum</Option>
                </NetworkSelector>
                <Gallery
                  label="See Gallery"
                  size="m"
                  decorative
                  backgroundColor="primary"
                />
              </Selector>
              <Build
                label="How to Build"
                size="m"
                decorative
                backgroundColor="main"
              />
            </Action>
          </Interact>
          <Display>
            <Graphic src={graphic} />
          </Display>
        </Main>
        <Footer>
          <ContainerDiv>
          <FooterLogo src={logo} alt="logo" />
          <Socials>
              {socials.map((social) => <SocialLogo><Link to={social.address}><img src={social.logo} alt={social.altText}/></Link></SocialLogo>)}
          </Socials>
          </ContainerDiv>
        </Footer>
      </Container>
    );
  }
}

export default Home;
