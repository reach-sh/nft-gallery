import React from 'react';
import styled from 'styled-components';
import wallet from "../public/assets/WalletIcon.png";
import logo from "../public/assets/ReachLogo-InLine.png";
import Button from './Button'
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
`;
const Logo = styled.img`
  width: 11.25em;
  height: 2.3125em;
`;

const ConnectWalletButton = styled((props) => <Button {...props} />)`
  margin-right: 7%;
  width: 260px;
  height: 48px;
`;

const Connect = styled.div``;

const Links = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3%;
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
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
  { displayText: "About Reach", address: "/reach" },
  { displayText: "How To Build", address: "/how-to-build" },
];


export default () => 
        (<Navbar>
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
        </Navbar>)