import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 1158px) {
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`;

export const Img = styled.img`
  border-radius: 14px;
`;

export const Svg = styled.svg`
  position: absolute;
  cursor: pointer;
  stroke: rgba(255, 255, 255, 0.8);
  fill: ${({ $fill }) => {
    if ($fill) {
      return $fill;
    }
    return 'none';
  }};
  width: 18px;
  height: 18px;
  top: 14px;
  right: 14px;
`;

export const CardWrapper = styled.div`
  padding-top: 14px;
  padding-bottom: 28px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CarBrand = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const Model = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #3470ff;
`;

export const Year = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const City = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Country = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const RentalCompany = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Type = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Brand = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Mileage = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Accessories = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const LearnMoreBtn = styled.button`
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  width: 100%;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  transition: background-color 250ms;
  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;

export const Stroke = styled.span`
  color: rgba(18, 20, 23, 0.1);
`;
