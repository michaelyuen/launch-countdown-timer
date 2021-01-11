import { useEffect, useState } from "react";
import styled from "styled-components";
import FlippingNumber from "./FlippingNumber";

export const CountdownContainer = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 75px;

  > div {
    margin: 1em 1em 0;
    position: relative;
    text-align: center;
    width: 150px;
    z-index: 1;

    > div:first-child {
      color: hsl(345, 95%, 68%);
      font-size: 88px; // 75px;
      line-height: 137px;
      height: 137px;
      width: 150px;
    }

    > div:last-child {
      letter-spacing: 5px;
      margin-top: 28px;
      text-transform: uppercase;
    }
  }
`;

export default function Countdown() {
  const INTERVAL = 1000;
  const initDuration = 60;
  // const initDuration = {
  //   minutes: 55,
  //   seconds: 41,
  // };
  const [duration, setDuration] = useState(initDuration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // cancel if 0
      setDuration((dur) => {
        console.log({ dur });
        if (dur === 0) {
          clearInterval(intervalId);
          return dur;
        } else {
          return dur - 1;
        }
      });
    }, INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <CountdownContainer>
      {/* <div>
        <div>08</div>
        <div>Days</div>
      </div>
      <div>
        <div>23</div>
        <div>Hours</div>
      </div>
      <div>
        <div>55</div>
        <div>Minutes</div>
      </div> */}
      <div>
        <FlippingNumber animationDuration={INTERVAL} number={duration} />
        <div>Seconds</div>
      </div>
    </CountdownContainer>
  );
}
