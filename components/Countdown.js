import { useRouter } from "next/router";
import { DateTime } from "luxon";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import FlippingNumber from "./FlippingNumber";

export const CountdownContainer = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 75px;

  .mobile {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .desktop {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  > div {
    margin: 1em 1em 0;
    position: relative;
    text-align: center;
    width: 50px;
    z-index: 1;

    @media (min-width: 768px) {
      width: 150px;
    }

    > div:first-child {
      color: hsl(345, 95%, 68%);
      font-size: 29.3px;
      line-height: 47px;
      height: 45.7px;
      width: 50px;

      @media (min-width: 768px) {
        font-size: 88px;
        height: 137px;
        line-height: 137px;
        width: 150px;
      }
    }

    > div.desktop,
    div.mobile {
      letter-spacing: 5px;
      margin-top: 28px;
      text-transform: uppercase;
    }
  }
`;

const getTimeLeft = (endDate) => {
  const now = DateTime.local();
  const { days, hours, minutes, seconds } = endDate.diff(now, [
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds)),
  };
};

const useCountdown = (endDate) => {
  const initial = getTimeLeft(endDate);
  const [{ current, previous }, setCountdown] = useState({
    current: initial,
    previous: null,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(endDate),
        };
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { previous, current };
};

export default function Countdown() {
  const router = useRouter();
  const defaultTime = useMemo(() => DateTime.local(2021, 1, 19, 13), []);
  const initialDate = router.query.date
    ? DateTime.fromISO(
        Array.isArray(router.query.date)
          ? router.query.date[0]
          : router.query.date
      )
    : null;
  const { current } = useCountdown(
    initialDate && initialDate.isValid ? initialDate : defaultTime
  );

  const INTERVAL = 1000;
  // const initDuration = 60;
  // const [duration, setDuration] = useState(initDuration);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // cancel if 0
  //     setDuration((dur) => {
  //       console.log({ dur });
  //       if (dur === 0) {
  //         clearInterval(intervalId);
  //         return dur;
  //       } else {
  //         return dur - 1;
  //       }
  //     });
  //   }, INTERVAL);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <CountdownContainer>
      {Object.keys(current).map((key) => {
        return (
          <div>
            <FlippingNumber
              animationDuration={INTERVAL}
              number={current[key]}
            />
            <div className="mobile">{key.charAt(0).toUpperCase()}</div>
            <div className="desktop">
              {key.charAt(0).toUpperCase() + key.substr(1)}
            </div>
          </div>
        );
      })}
    </CountdownContainer>
  );
}
