import Head from "next/head";
import styled from "styled-components";
import Attribution from "../components/Attribution";
import Countdown from "../components/Countdown";
import { Title } from "../components/Title";

const AppContainer = styled.main`
  align-items: center;
  background: url("/images/bg-stars.svg") rgb(33, 30, 43);
  color: hsl(237, 18%, 59%);
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    display: none;
    width: 100%;
  }

  &:before {
    background-image: url("/images/pattern-hills.svg");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Launch countdown timer</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        ></link>
      </Head>

      <AppContainer>
        <Title>We're launching soon</Title>
        <Countdown />
        <article style={{ marginTop: "250px", zIndex: 2 }}>
          [Share icons go here]
        </article>
      </AppContainer>
      <Attribution />
    </>
  );
}
