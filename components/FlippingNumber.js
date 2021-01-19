import { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

const flip = keyframes`
  0% {
    transform: rotateX(0);
  }

  100% {
    border-bottom: 1px solid black;
    transform: rotateX(-0.5turn);
    z-index: 1;
  }
`;

const show = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const FlippingNumberContainer = styled.div`
  perspective: 500px;
  position: relative;

  div {
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;

    &:not(.flipper) {
      overflow: hidden;
    }

    &:not(.bottom.current) {
      top: 0;
    }

    &.top {
      backface-visibility: hidden;
      background: linear-gradient(to bottom, rgb(44, 43, 70), rgb(59, 60, 95));
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      box-shadow: 0px -2px 5px rgb(26, 26, 37), inset 0 2px rgba(0, 0, 0, 0.9),
        inset 0 3px 0 rgba(255, 255, 255, 0.4);
      height: 50%;

      &.next {
        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration /
                  2}ms ease-in reverse forwards ${animationDuration / 2}ms
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.bottom {
      align-items: flex-end;
      background: linear-gradient(
          rgba(188, 167, 216, 0.1),
          rgba(72, 66, 95, 0.1) 50%,
          rgb(52, 53, 81)
        ),
        rgb(52, 53, 81);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 7px 2px rgb(26, 26, 37);

      &.current {
        height: 50%;
        border-top: 2px solid black;
        bottom: 0;
        transform: rotateX(5deg);

        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration * 0.85}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }
    }

    &.flipper {
      animation: ${({ animationDuration, shouldAnimate }) =>
        shouldAnimate
          ? css`
              ${flip} ${animationDuration}ms ease-in forwards
            `
          : "none"};
      height: 50%;
      transform-origin: bottom;
      transform-style: preserve-3d;

      .bottom,
      .top {
        backface-visibility: hidden;
        height: 100%;
      }

      .bottom {
        transform: rotateX(0.5turn);
      }

      .top {
        transform: rotateX(0deg);

        &:before {
          animation: ${({ animationDuration, shouldAnimate }) =>
            shouldAnimate
              ? css`
                  ${show} ${animationDuration}ms ease-in forwards
                `
              : "none"};
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 1) 100%
          );
          content: "";
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 100;
        }
      }
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
