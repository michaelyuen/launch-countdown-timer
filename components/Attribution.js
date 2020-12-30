import styled from "styled-components";
export const AttributionContainer = styled.footer`
  color: white;
  font-size: 12px;
  bottom: 0;
  left: 0;
  margin-bottom: 1em;
  position: fixed;
  right: 0;
  text-align: center;

  a {
    color: white;

    &:focus {
      border-radius: 3px;
      box-shadow: 0 0 0 3px #ffeb3b;
      outline: none;
    }
  }
`;

export default function Attribution() {
  return (
    <AttributionContainer>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        rel="nofollow noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://mikey.baby"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        Michael Yuen
      </a>
      .
    </AttributionContainer>
  );
}
