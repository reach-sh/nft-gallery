import React from "react";
import styled from "styled-components";
import x from "../../public/assets/closeX.svg";
import Button from "../Button";
import { example } from "../App";
import Truncate from "react-truncate";

const ListModal = styled.div`
  position: absolute;
  z-index: 0;
  left: 710px;
  top: 287px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 500px;
  height: 510px;
  background: #ffffff;
  border-radius: 8px;
`;

const CloseDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 468px;
  height: 24px;
`;

const CloseX = styled.img``;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 40px;

  width: 468px;
  height: 454px;
`;

const Headline = styled.div`
  width: 436px;
  height: 43px;

  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  /* identical to box height */

  text-align: center;

  /* Primary/Main/Reach Black */

  color: #000000;
`;

const SubHeader = styled.div`
  width: 436px;
  height: 20px;

  /* Desktop/Body/B1 - Regular */

  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  text-align: center;

  /* Primary/Grey/Reach Grey 900 */

  color: #333333;
`;

const HeaderContainer = styled.div``;

export default () => {
  return (
    <ListModal>
      <CloseDiv>
        <CloseX src={x} />
      </CloseDiv>
      <MainDiv>
        <HeaderContainer>
          <Headline>List NFT for Sale</Headline>
          <SubHeader>Enter desired price and discovery price below</SubHeader>
        </HeaderContainer>
        <InfoBox info={example} />
      </MainDiv>
    </ListModal>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;

  width: 436px;
  height: 295px;
`;
const NftInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 436px;
  height: 64px;
`;
const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 436px;
  height: 86px;
`;
const ConfirmButton = styled((props) => <Button {...props} />)`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
const CancelLink = styled.a`
    text-decoration: underline;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 218.5px;
  height: 64px;
`;

const Title = styled.div``;
const Description = styled((props) => <Truncate>{props.description}</Truncate>)`
  width: 218.5px;
  height: 36px;

  /* Desktop/Body/B2 - Regular */

  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  /* Primary/Grey/Reach Grey 900 */

  color: #333333;
`;

const Thumbnail = styled.img`
  width: 64px;
  height: 67px;
  border-radius: 0px 0px 16px 0px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #4536da;
  border-radius: 8px;
`;

const Discovery = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #4536da;
  border-radius: 8px;
  background: #ffffff;
`;

const PriceInput = styled.input`
  width: 109px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  border: none;
  align-self: center;
  margin-left: 8px;
  :focus {
    outline: none;
  }
`;

const Denomination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  width: auto;
  height: 40px;
  background: #cccccc;
  border-radius:  0px 8px 8px 0px ;
`;

const Label = styled.label`
  ::after {
    content: " *";
    color: red;
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoBox = (nft) => {
  console.log(nft);
  const info = nft.info;
  return (
    <Info>
      <NftInfo>
        <Thumbnail src={info.url} />
        <DescriptionBox>
          <Title>{`${info.name} ${info.number}`}</Title>
          <Description description={info.description} />
        </DescriptionBox>
      </NftInfo>{" "}
      <PriceInfo>
        <PriceBox>
          <Label>Price</Label>
          <Price>
            <PriceInput />
            <Denomination>ETH</Denomination>
          </Price>
        </PriceBox>
        <PriceBox>
          <Label>Discovery Fee</Label>
          <Discovery>
            <PriceInput />
            <Denomination>%</Denomination>
          </Discovery>
        </PriceBox>
      </PriceInfo>
      <ConfirmButton label="CONFIRM" backgroundColor="primary" />{" "}
      <CancelLink> Cancel</CancelLink>
    </Info>
  );
};
