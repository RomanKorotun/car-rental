import styled from "styled-components";
import HomeImg from "../../image/home.jpg";

export const Home = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HomeImg});

  animation: bgImages 3s;
  @keyframes bgImages {
    0% {
      background-position: bottom;
    }
  }

  background-repeat: no-repeat;
  min-height: 77vh;
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
  padding-bottom: 90px;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    min-height: 76vh;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media only screen and (min-width: 1158px) {
    min-height: 79vh;
    max-width: 1440px;
    padding-top: 188px;
    padding-bottom: 188px;
    padding-top: 142px;
    padding-bottom: 142px;
  }
`;
