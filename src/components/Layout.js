import styled from "styled-components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export const Container = styled.div`
  min-width: 320px;
  max-width: 428px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1158px;
  }
`;

export const Section = styled.section`
  min-height: 77vh;
  @media only screen and (min-width: 768px) {
    min-height: 76vh;
  }
  @media only screen and (min-width: 1158px) {
    min-height: 79vh;
  }
  padding-top: 60px;
  padding-bottom: 60px;
`;
