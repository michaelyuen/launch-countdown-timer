import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

const flip = keyframes`
  0% {
    transform: rotateX(0);
  }

  100% {
    border-bottom: 1px solid black;
    transform: rotateX(0.5turn);
    z-index: 1;
  }
`;

const FlippingNumberContainer = styled.div`
  position: relative;

  .bottom {
    background: rgb(52, 53, 81);
    background: linear-gradient(
        rgba(188, 167, 216, 0.1),
        rgba(72, 66, 95, 0.1) 50%,
        rgb(52, 53, 81)
      ),
      rgb(52, 53, 81);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 7px 2px rgb(26, 26, 37);
  }

  .top {
    background: linear-gradient(to bottom, rgb(44, 43, 70), rgb(59, 60, 95));

    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    overflow: hidden;

    position: absolute;
    left: 0;
    top: 0;
    height: 50%;
    width: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.9),
      inset 0 3px 0 rgba(255, 255, 255, 0.4);
  }

  .bottom.current {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50%;
    overflow: hidden;
    width: 100%;

    border-top: 2px solid black;
  }

  .flipper {
    position: absolute;
    left: 0;
    top: 0;
    height: 50%;
    width: 100%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    animation: ${({ animationDuration, shouldAnimate }) =>
      shouldAnimate
        ? css`
            ${flip} ${animationDuration}ms ease-in forwards
          `
        : "none"};

    transform-origin: bottom;
    transform-style: preserve-3d;

    .bottom,
    .top {
      display: flex;
      justify-content: center;
      backface-visibility: hidden;
      overflow: hidden;

      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }

    .bottom {
      align-items: flex-end;
      transform: rotateX(-0.5turn);
    }

    .top {
      background: linear-gradient(to bottom, rgb(44, 43, 70), rgb(59, 60, 95));

      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: inset 0 2px rgba(0, 0, 0, 0.9),
        inset 0 3px 0 rgba(255, 255, 255, 0.4);
    }
  }
`;

export default function FlippingNumber2({ animationDuration, number }) {
  const previousNumberRef = useRef(number);
  const { current: previousNumber } = previousNumberRef;

  useEffect(() => {
    previousNumberRef.current = number;
  }, [number]);

  return (
    <FlippingNumberContainer
      animationDuration={animationDuration}
      key={number}
      shouldAnimate={previousNumber !== number}
    >
      <div className="top next">{number}</div>
      <div className="flipper">
        <div className="bottom">{number}</div>
        <div className="top">{previousNumber}</div>
      </div>
      <div className="bottom current">{previousNumber}</div>
    </FlippingNumberContainer>
  );
}
