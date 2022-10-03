import React, { useEffect, useState, useRef } from "react";
import * as noUiSlider from "nouislider";
import styled from "styled-components";
import "nouislider/dist/nouislider.css";


const Container = styled.div`
width:260px;
& .noUi-origin{
    position: relative;
    left: 200px;
}

& .noUi-target{
    background: #000000; 
    border: none;
    box-shadow: none;
}

  & .noUi-base {
    height: 0px;
    left: 0px;
    top: 10px;
    border: 1px solid #999999;

  }

  & .noUi-handle{
    border-radius: 50%;
    background: #4536DA;
    width: 14px;
    height: 14px;
    box-shadow: none;
    border: none;
    right: -1px;
    left: 50px;

    ::before {
        display: none;
    }
    
    ::after{
        display: none;
    }
  }

`;

const PriceBar = styled.div`

`;

export default () => {

  const rangeSlider = useRef();
  useEffect(() => {
    noUiSlider.create(rangeSlider.current, {
      range: { min: 10, max: 10000 },
      start: [10, 10000],
      margin: 100,
      connect: false,
    });
  });

  return (
    <Container>
      <PriceBar ref={rangeSlider}>{}</PriceBar>
    </Container>
  );
};
