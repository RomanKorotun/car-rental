import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  SpanStyledNotFound,
  LinkStyledNotFound,
  NotFoundCard,
} from "./NotFound.styled";

export const NotFound = () => {
  const [count, setCount] = useState(10);
  let timerIdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      return;
    }
    timerIdRef.current = setTimeout(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    return () => {
      clearTimeout(timerIdRef);
    };
  }, [count, navigate]);
  return (
    <NotFoundCard>
      This route was not found.You will be redirected to the homepage
      after&nbsp;
      <SpanStyledNotFound>{count} seconds</SpanStyledNotFound>. If you want to
      go to the homepage earlier - please click on the&nbsp;
      <LinkStyledNotFound to="/">link!</LinkStyledNotFound>
    </NotFoundCard>
  );
};
