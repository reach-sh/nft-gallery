import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import magnifyingGlass from "../../public/assets/magnifyingGlass.png";
import x from "../../public/assets/x.png";
import plus from "../../public/assets/plus.png";
import dash from "../../public/assets/dash.png";
import unchecked from "../../public/assets/checkBox.png";
import checkedbox from "../../public/assets/checkedBox.png";
import RangeSlider from "./RangeSlider";

const Attributes = styled.div`
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* justify-content: flex-start; */
   @media only screen and (max-width: 375px) {
    display: none;
   }

`;
const ResetButton = styled((props) => <Button {...props} />)`
  background-color: #000000;
  color: #ffffff;
  border-color: #ffffff;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-top: 24px;
  @media only screen and (max-width: 375px) {
    display: none;
   }
`;
const SearchInput = styled.div`
  width: 352px;
  height: 40px;
  border: 1px solid #4536da;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 24px;
`;
const SidePanel = styled.div`
  margin-left: 120px;
  margin-top: 48px;
  @media only screen and (max-width: 375px) {
    margin-left: 10px;
   }
`;
const SearchInner = styled.input`
  width: 240px;
  height: 20px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  border: none;
  background: #000000;
  margin-left: 20px;
  margin-right: 20px;
`;

const criteria = [1, 2, 3, 4, 5];
const RangeGuide = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
`;
const MinOrMax = styled.div`
${(props) => props.minOrMax === 'MAX' ? 'text-align: right;': ""};
color: #999999;
`;
const Value = styled.div``;
const RP = styled.div`
`
const RangePoint = ({ minOrMax, value, networkToken }) => (
  <RP>
    <MinOrMax minOrMax={minOrMax}>{minOrMax}</MinOrMax>
    <Value>{`${value} ${networkToken}`}</Value>
  </RP>
);

const Title = styled.div`
  width: 220px;
`;
const MagnifyingGlass = styled.img``;
const X = styled.img``;
const Plus = styled.img``;
const Minus = styled.img`
  height: 2px;
  width: 14px;
`;
const Heading = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  color: #ffffff;
  width: 264px;
  height: 28px;
  font-family: "Reach Favorit";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

const Checked = styled.img`
  width: 18px;
  height: 18px;
`;
const Unchecked = styled.img`
  width: 18px;
  height: 18px;
`;

const Crit = styled.span`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const CriteriaNumber = styled.div`
  color: #999999;
`;

const PlusOrMinus = (open) =>
  open ? <Minus src={dash} /> : <Plus src={plus} />;
const Criteria = ({ criteria, checked }) => (
  <Crit>
    <Checkbox checked={checked} />
    <span style={{ marginLeft: "3px" }}> Criteria {criteria}</span>
    <CriteriaNumber>19</CriteriaNumber>
  </Crit>
);
const Checkbox = ({ checked }) =>
  checked ? <Checked src={checkedbox} /> : <Unchecked src={unchecked} />;
export default ({ networkToken }) => {
  const [lowerLimit, setLowerLimit] = useState(10);
  const [upperLimit, setUpperLimit] = useState(10000);
  return (
    <SidePanel>
      <SearchInput>
        <MagnifyingGlass src={magnifyingGlass} />
        <SearchInner />
        <X src={x} />
      </SearchInput>
      <Attributes>
        <Heading>
          <Title>BACKGROUND</Title>
          <Minus src={dash} />
        </Heading>
        <RangeSlider />
        <RangeGuide>
          <RangePoint
            minOrMax="MIN"
            value={lowerLimit}
            networkToken={networkToken}
            onChange={(e) => setLowerLimit(e.target.value)}
          />
          <RangePoint
            minOrMax="MAX"
            value={upperLimit}
            networkToken={networkToken}
            onChange={(e) => setUpperLimit(e.target.value)}
          />
        </RangeGuide>
        <Heading>
          <Title>FACE</Title>
          <Plus src={plus} />
        </Heading>
        {criteria.map((crit) => (
          <Criteria criteria={crit} checked={Math.random() < 0.5}>
            {crit}
          </Criteria>
        ))}
        <Heading>
          <Title>GLASSES</Title>
          <PlusOrMinus open />
        </Heading>
         {/* {criteria.map((crit) => (
          <Criteria criteria={crit} checked={Math.random() < 0.5}>
            {crit}
          </Criteria>
        ))} */}
        <Heading>
          <Title>OUTFIT</Title>
          <PlusOrMinus open />
        </Heading>
         {/* {criteria.map((crit) => (
          <Criteria criteria={crit} checked={Math.random() < 0.5}>
            {crit}
          </Criteria>
        ))} */}
        <Heading>
          <Title>SKIN</Title>
          <PlusOrMinus open />
        </Heading>
         {/* {criteria.map((crit) => (
          <Criteria criteria={crit} checked={Math.random() < 0.5}>
            {crit}
          </Criteria>
        ))} */}
      </Attributes>
      <ResetButton label="RESET FILTER" outline />
    </SidePanel>
  );
};
{
}
