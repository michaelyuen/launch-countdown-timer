import Head from "next/head";
import styled from "styled-components";
import Attribution from "../components/Attribution";
import Countdown from "../components/Countdown";
import { Title } from "../components/Title";

const AppContainer = styled.main`
  align-items: center;
  background-color: rgb(33, 30, 43);
  background-image: url("/images/pattern-hills.svg"),
    url("/images/bg-stars.svg");
  background-repeat: no-repeat, repeat;
  background-position: bottom center;
  background-size: contain;
  color: hsl(237, 18%, 59%);
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    display: none;
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
        <Title>Sue's first day at Iterable</Title>
        <Countdown />
        {/* <article style={{ marginTop: "250px", zIndex: 2 }}>
          [Share icons go here]
        </article> */}
      </AppContainer>
      <Attribution />
    </>
  );
}
