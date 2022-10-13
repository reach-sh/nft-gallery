import React from "react";
import styled from "styled-components";
import wallet from "../public/assets/WalletIcon.png";
import logo from "../public/assets/ReachLogo-InLine.png";
import hamburger from "../public/assets/hamburger.svg";
import Button from "./Button";
import { Link as L } from "react-router-dom";

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
  align-items: center;
  @media only screen and (max-width: 375px) {
    width: 375px;
    padding: 24px;
    justify-content: space-around;
  }
`;
const Logo = styled.img`
  width: 11.25em;
  height: 2.3125em;
  @media only screen and (max-width: 375px) {
    width: 100px;
    height: 21px;
    justify-self: flex-start;
  }
`;

const Hamburger = styled.img`
  display: none;
  @media only screen and (max-width: 375px) {
    display: block;
    height: 16px;
    width: 24px;
    margin-right: 4px;
  }
`;

const ConnectWalletButton = styled((props) => <Button {...props} />)`
  margin-right: 7%;
  width: 260px;
  height: 48px;
  @media only screen and (max-width: 375px) {
    background-image: no-repeat url(${wallet});
    background-size: cover;
    background-color: transparent;
    height: 24px;
    width: 25px;
    padding: 0px;
    margin-right: 0px;
    p {
      display: none;
    }
  }
`;

const Connect = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 211px;
    height: 32px;
    margin-left: -64px;
  }
`;

const Links = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3%;
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (max-width: 375px) {
    display: none;
  }
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

const links = [
  { displayText: "Gallery", address: "/" },
  { displayText: "About Reach", address: "/about" },
  { displayText: "How To Build", address: "/how-to-build" },
];

export default () => (
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
      <Hamburger src={hamburger} />
    </Connect>
  </Navbar>
);
