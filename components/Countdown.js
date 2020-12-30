import styled from "styled-components";
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
      align-items: center;
      background: rgb(43, 43, 68);
      border-radius: 10px;
      color: hsl(345, 95%, 68%);
      display: flex;
      font-size: 75px;
      height: 137px;
      justify-content: center;
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
  return (
    <CountdownContainer>
      <div>
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
      </div>
      <div>
        <div>41</div>
        <div>Seconds</div>
      </div>
    </CountdownContainer>
  );
}
