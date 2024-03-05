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
      </Suspense>
      <Footer />
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

export const ContainerPage = styled.div`
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
  height: 77vh;
  padding-top: 60px;
  padding-bottom: 60px;
`;
