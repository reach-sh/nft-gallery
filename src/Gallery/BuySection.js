import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import eth from "../../public/assets/ethereum.png";
import dropdown from "../../public/assets/dropdown.png";
import upArrow from "../../public/assets/upVector.svg";
import divider from "../../public/assets/divider.svg";

const Buy = styled.div`
  display: flex;
  flex-direction: column;
  width: 688px;
  height: 104px;
`;
const BuyButton = styled((props) => <Button {...props} />)`
  width: 112px;
  height: 44px;
  margin-left: 38px;
  align-self: center;
`;
const BuySpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 422.4px;
  height: 44px;
  justify-content: flex-end;
  align-self: center;
  margin-left: auto;
`;
const CostSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DropDownHandle = styled.img`
  margin-left: 8px;
`;
const Divider = styled.img`
  margin-top: 4px;
  justify-self: center;
`;
const EthLogo = styled.img`
  margin-right: 8px;
`;
const ExpandedSummary = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 688px;
  height: 234px;
  margin-top: 8px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;
const Fee = styled.div`
  color: #666666;
`;
const Item = styled.div`
  border: 1px solid #cccccc;
  height: inherit;
  width: 100%;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;
const Info = styled.div`
  height: auto;
`;
const Label = styled.div`
  height: auto;
`;
const ListButton = styled((props) => <Button {...props} />)`
  background-color: #000000;
  border-color: #ffffff;
  color: #ffffff;
`;
const NetworkToken = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  height: 20px;
  width: auto;
  align-self: center;
`;
const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
const Price = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  align-self: center;
  margin-top: 6px;
`;

const PriceSpan = styled.span`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  /* margin-top: 16px; */
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-content: center;
`;
const ShowSummary = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
`;

const Total = styled.div`
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  mix-blend-mode: normal;
  width: 331px;
  height: 28px;
`;

const UnlistButton = styled((props) => <Button {...props} />)`
  background-color: #000000;
  border-color: #ffffff;
  color: #ffffff;
`;

const Value = styled.div`
  width: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
  mix-blend-mode: normal;
`;

const SummaryItem = ({ label, token, value }) => {
  return (
    <Item>
      <Info>
        <Label>{label}</Label>
      </Info>
      <CostSpan>
        <NetworkToken>{token}</NetworkToken>
        <Value>{value}</Value>
      </CostSpan>
    </Item>
  );
};
const Summary = ({
  basePrice,
  discoveryFee,
  royaltyFee,
  networkToken,
  open,
}) => {
  if (open) {
    return (
      <ExpandedSummary>
        <SummaryItem label="Price" value={basePrice} token={networkToken} />
        <SummaryItem
          label="Discovery Fee"
          value={discoveryFee}
          token={networkToken}
        />
        <SummaryItem
          label="Royalty Fee"
          value={royaltyFee}
          token={networkToken}
        />
      </ExpandedSummary>
    );
  } else return null;
};

const PriceSummary = ({ open, onChange }) => {
  return open ? (
    <ShowSummary>
      Show Price Summary
      <DropDownHandle src={upArrow} onClick={() => onChange(!open)} />
    </ShowSummary>
  ) : (
    <ShowSummary>
      Show Price Summary
      <DropDownHandle src={dropdown} onClick={() => onChange(!open)} />
    </ShowSummary>
  );
};

export default ({ data }) => {
  const [showPriceSummary, toggleShowPrice] = useState(false);
  const history = useHistory();
  const location = useLocation();
  if (!data.owned) {
    return (
      <>
        {data.forSale ? (
          <Buy>
            <Total>Total</Total>
            <PriceInfo>
              <PriceBox>
                <PriceSpan>
                  <EthLogo src={eth} />{" "}
                  <NetworkToken>{data.networkToken} </NetworkToken>
                  <Divider src={divider} />
                  <Price>{data.price}</Price>
                </PriceSpan>
                <Fee>Network Fee not included</Fee>
              </PriceBox>
              <BuySpan>
                <PriceSummary
                  open={showPriceSummary}
                  onChange={toggleShowPrice}
                />
                <BuyButton backgroundColor={"primary"} label={"BUY"} />
              </BuySpan>
            </PriceInfo>
            <Summary
              basePrice={data.basePrice}
              discoveryFee={data.discoveryFee}
              royaltyFee={data.royaltyFee}
              networkToken={data.networkToken}
              open={showPriceSummary}
            />
          </Buy>
        ) : (
          ""
        )}
      </>
    );
  } else {
    return (
      <>
        {data.forSale ? (
          <UnlistButton label="Unlist" outline backgroundColor="#0000000;" />
        ) : (
          <ListButton
            label="List For Sale"
            outline
            onClick={() => history.push(`/gallery/list/${data.number}`, {background: location })}
          />
        )}
      </>
    );
  }
};
