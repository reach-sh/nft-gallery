import React, { useState, useReducer } from "react";
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

const RangeGuide = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
`;
const MinOrMax = styled.div`
  ${(props) => (props.minOrMax === "MAX" ? "text-align: right;" : "")};
  color: #999999;
`;
const Value = styled.div``;
const RP = styled.div``;
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
  ${(props) => (props.open ? "" : "display: none;")}
`;

const CriteriaNumber = styled.div`
  color: #999999;
`;

const PlusOrMinus = ({ open, onClick }) =>
  open ? (
    <Minus src={dash} onClick={onClick} />
  ) : (
    <Plus src={plus} onClick={onClick} />
  );
const Criteria = ({ criteria, checked, open, onClick }) => {
  return (
    <Crit open={open}>
      <Checkbox checked={checked} onClick={onClick} />
      <span style={{ marginLeft: "3px" }}> {criteria.name}</span>
      <CriteriaNumber>{criteria.value}</CriteriaNumber>
    </Crit>
  );
};
const Checkbox = ({ checked, onClick }) =>
  checked ? (
    <Checked src={checkedbox} onClick={onClick} />
  ) : (
    <Unchecked src={unchecked} onClick={onClick} />
  );

const attributePossibilities = {
  face: [
    { name: "Cute", value: 0, howMany: 2 },
    { name: "Ugly", value: 1, howMany: 2 },
    { name: "Butter", value: 2, howMany: 2 },
    { name: "Stone", value: 3, howMany: 2 },
  ],
  outfit: [
    { name: "Butter", value: 0, howMany: 12 },
    { name: "Disco", value: 1, howMany: 3 },
    { name: "Hiesenberg", value: 2, howMany: 4 },
    { name: "Disco", value: 3, howMany: 3 },
  ],
  glasses: [
    { name: "Aviator", value: 0, howMany: 12 },
    { name: "Nerd", value: 1, howMany: 3 },
    { name: "Wraparound", value: 2, howMany: 4 },
    { name: "Safety", value: 3, howMany: 3 },
  ],
  skin: [
    { name: "Butter", value: 0, howMany: 1 },
    { name: "Bacon", value: 1, howMany: 3 },
    { name: "Egg", value: 2, howMany: 4 },
    { name: "Toast", value: 3, howMany: 3 },
  ],
};
export default ({ networkToken, dispatch, selectedCriteria, resetFilters, rangeSlider, priceRange, setPriceRange }) => {
  const [face, openFace] = useState(false);
  const [glasses, openGlasses] = useState(false);
  const [outfit, openOutfit] = useState(false);
  const [skin, openSkin] = useState(false);
  const toggleCriteria = (cat, index) => {
    dispatch({ category: cat, attribute: index });
  };
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
        <RangeSlider priceRange={priceRange} setPriceRange={setPriceRange}/>
        <RangeGuide>
          <RangePoint
            minOrMax="MIN"
            value={priceRange.min}
            networkToken={networkToken}
            // onChange={(e) => setLowerLimit(e.target.value)}
          />
          <RangePoint
            minOrMax="MAX"
            value={priceRange.max}
            networkToken={networkToken}
            // onChange={(e) => setUpperLimit(e.target.value)}
          />
        </RangeGuide>
        <Heading>
          <Title>FACE</Title>
          <PlusOrMinus open={face} onClick={() => openFace(!face)} />
        </Heading>
        {attributePossibilities.face.map((crit, index) => (
          <Criteria
            criteria={crit}
            key={`face${crit.value}`}
            open={face}
            checked={selectedCriteria.face[index]}
            onClick={() => toggleCriteria("face", index)}
          />
        ))}
        <Heading>
          <Title>GLASSES</Title>
          <PlusOrMinus open={glasses} onClick={() => openGlasses(!glasses)} />
        </Heading>
        {attributePossibilities.glasses.map((crit, index) => (
          <Criteria
            criteria={crit}
            key={`glasses${crit.value}`}
            open={glasses}
            checked={selectedCriteria.glasses[index]}
            onClick={() => toggleCriteria("glasses", index)}
          />
        ))}
        <Heading>
          <Title>OUTFIT</Title>
          <PlusOrMinus open={outfit} onClick={() => openOutfit(!outfit)} />
        </Heading>
        {attributePossibilities.outfit.map((crit, index) => (
          <Criteria
            criteria={crit}
            key={`outfit${crit.value}`}
            open={outfit}
            checked={selectedCriteria.outfit[index]}
            onClick={() => toggleCriteria("outfit", index)}
          />
        ))}
        <Heading>
          <Title>SKIN</Title>
          <PlusOrMinus open={skin} onClick={() => openSkin(!skin)} />
        </Heading>
        {attributePossibilities.skin.map((crit, index) => (
          <Criteria
            criteria={crit}
            key={`skin${crit.value}`}
            open={skin}
            checked={selectedCriteria.skin[index]}
            onClick={() => toggleCriteria("skin", index)}
          />
        ))}
      </Attributes>
      <ResetButton label="RESET FILTER" outline onClick={() => resetFilters()}/>
    </SidePanel>
  );
};
