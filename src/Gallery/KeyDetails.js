import React from "react";
import styled from "styled-components";
import Button from "../Button";
import eth from "../../public/assets/ethereum.png";
import reach from "../../public/assets/ReachLogo.png";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 402px;
  height: 631px;
  background: #333333;
  border-radius: 0px 16px 0px 0px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media only screen and (max-width: 375px) {
    align-items: flex-start;
    padding: 8px 8px 8px;
    width: 164px;
    height: 330px;
    border-radius: 0px 16px 0px 0px;
    margin-left: 4px;
  }
`;

const Image = styled.img`
  max-width: 370px;
  height: 397px;
  margin: 16px 16px 16px;
  @media only screen and (max-width: 375px) {
    width: 148px;
    height: 148px;
    margin: 0px;
    align-self: center;
  }
`;

const Rarity = styled.div`
  width: 113.7px;
  height: 38px;
  line-height: 38px;
  background: #000000;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 30px;
  @media only screen and (max-width: 375px) {
    width: 63px;
    height: 14px;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    text-align: right;
    top: 135px;
    left: 24px;
    align-items: center;
  }
`;

const ForSaleContainer = styled.div`
  position: relative;
  bottom: 16px;
  left: 16px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    margin-top: -24px;
  }
`;
const IsForSale = styled.div`
  width: 126px;
  height: 38px;
  background: #4536da;
  line-height: 38px;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 375px) {
    width: 73px;
    height: 16px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
`;
const AintForSale = styled.div`
  width: 163px;
  height: 38px;
  line-height: 38px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 375px) {
    width: 96px;
    height: 16px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
`;
const Owned = styled.div`
  width: 93px;
  height: 38px;
  background: #24d99e;
  border-radius: 20px;
  line-height: 38px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-left: 8px;
  @media only screen and (max-width: 375px) {
    width: 54px;
    height: 16px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    margin-top: 8px;
    margin-left: 0px;
    margin-bottom: 8px;
  }
`;

const Individual = styled.span`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 8px;
  width: 370px;
  height: 42px;
  @media only screen and (max-width: 375px) {
    width: 132px;
    height: 32px;
    font-family: "Reach Favorit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
const Actions = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-top: -8px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 70px;
  align-items: flex-start;
  margin-top: 16px;
  @media only screen and (max-width: 375px) {
    width: 132px;
    height: 52px;
    margin-top: 100px;
  }
`;

const SetName = styled.div`
  position: relative;
  width: 72px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  @media only screen and (max-width: 375px) {
    width: 45px;
    height: 16px;
    font-family: "Reach Favorit";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
`;

const Divider = styled.div`
  width: 370px;
  height: 0px;
  border: 1px solid #666666;
  margin-top: 24px;
  @media only screen and (max-width: 375px) {
    width: 148px;
    margin-top: 8px;
  }
`;

const LowerPart = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: -75px;
  width: 370px;
  height: 170px;
  @media only screen and (max-width: 375px) {
    margin-left: 8px;
    margin-top: -64px;
  }
`;

const ListItem = styled((props) => <Button {...props} />)`
  width: 255px;
  height: 52px;
  margin-top: 24px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  @media only screen and (max-width: 375px) {
    width: 126px;
    height: 24px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
  }
`;
const UnlistItem = styled((props) => <Button {...props} />)`
  width: 167px;
  height: 52px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  background: transparent;
  border-color: #ffffff;
  margin-top: 24px;
  @media only screen and (max-width: 375px) {
    width: 78px;
    height: 24px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    p {
      align-self: center;
    }
  }
`;

const BuyButton = styled((props) => <Button {...props} />)`
  width: 129px;
  height: 52px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  @media only screen and (max-width: 375px) {
    width: 57px;
    height: 24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
  }
`;

const Price = styled.div`
  color: #ffffff;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 95px;
  height: 28px;
  gap: 10px;
  white-space: nowrap;
  @media only screen and (max-width: 375px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

const StatusContainer = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;

  position: relative;
  top: -64px;
  left: 5px;
  @media only screen and (max-width: 375px) {
    position: absolute;
    top: 204px;
    flex-direction: column;
    height: auto;
    left: 0px;
    width: 90%;
  }
`;
const EthLogo = styled.img`
  height: 32px;
  width: 32px;
  align-self: middle;
  @media only screen and (max-width: 375px) {
    height: 16px;
    width: 16px;
  }
`;

const BuySpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 370px;
  height: 52px;
  margin-top: 16px;
  justify-content: space-between;
  align-content: center;
  @media only screen and (max-width: 375px) {
    flex-direction: column;
    width: 148px;
    height: 50px;
    align-items: flex-start;
  }
`;

const ReachLogo = styled.img`
  width: 24px;
  height: 17.66px;
  align-content: center;
  margin-top: 15%;
  margin-left: -12px;
  @media only screen and (max-width: 375px) {
    height: 8px;
    width: 11px;
    margin-top: unset;
    margin-left: unset;
    gap: 16px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const ForSale = ({ forSale, owned }) => {
  return (
    <ForSaleContainer>
      {forSale ? (
        <IsForSale>For Sale</IsForSale>
      ) : (
        <AintForSale>Not For Sale</AintForSale>
      )}
      {owned ? <Owned>Owned</Owned> : ""}
    </ForSaleContainer>
  );
};

const Info = ({ name, number, setName }) => {
  return (
    <InfoContainer>
      <SetName>{setName}</SetName>
      <Individual>
        {name} #{number}
      </Individual>
    </InfoContainer>
  );
};

const GetCTA = ({ forSale, owned, price }) => {
  if (!forSale && !owned) {
    return;
  }
  if (forSale && !owned) {
    return (
      <BuySpan>
        <Price>
          <EthLogo src={eth} />
          {`${price} ETH`}
        </Price>
        <BuyButton label="BUY" backgroundColor="primary" />
      </BuySpan>
    );
  }
  if (!forSale && owned) {
    return <ListItem label={"LIST FOR SALE"} backgroundColor="main" />;
  }
  if (forSale && owned) {
    return <UnlistItem label="UNLIST" outline />;
  }
};

export default (props) => {
  const { url, rarity, forSale, owned, setName, name, number, price } = props;
  return (
    <Card>
      <Image src={url} />
      <Rarity>
        <Inner>
          <ReachLogo src={reach} />
          <span style={{ marginLeft: "16px" }}>{rarity}</span>
        </Inner>
      </Rarity>
      <StatusContainer>
        <ForSale forSale={forSale} owned={owned} />
      </StatusContainer>
      <LowerPart>
        <Info name={name} number={number} setName={setName} />
        <Divider />
        <Actions>{GetCTA({ forSale, owned, price })}</Actions>
      </LowerPart>
    </Card>
  );
};
