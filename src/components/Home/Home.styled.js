import styled from "styled-components";

export const HomeImageSection = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(https://th.bing.com/th/id/R.0a09a09506e49097647ada8984440c19?rik=hUtXKONzgYP7EA&pid=ImgRaw&r=0);
  background-repeat: no-repeat;
  min-height: 77vh;
  @media only screen and (min-width: 768px) {
    min-height: 76vh;
  }
  @media only screen and (min-width: 1158px) {
    min-height: 79vh;
  }
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    height: 76vh;
  }

  @media only screen and (min-width: 1158px) {
    height: 78vh;
    max-width: 1440px;
    padding-top: 188px;
    padding-bottom: 188px;
  }
`;
