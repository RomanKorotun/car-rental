import styled from "styled-components";
import Modal from "react-modal";

export const CustomModal = styled(Modal)`
  position: relative;
  border-radius: 24px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: 1px solid blue;
  transform: translate(-50%, -50%);
  overflow: auto;
  @media only screen and (max-width: 427px) {
    padding: 39px;
    width: 90%;
  }
  @media only screen and (min-width: 428px) {
    padding: 39px;
    width: 382px;
  }
  @media only screen and (min-width: 768px) {
    padding: 39px;
    width: 541px;
  }
  @media only screen and (min-width: 1158px) {
    width: 541px;
  }
`;

export const SvgModal = styled.svg`
  position: absolute;
  stroke-width: 1.8px;
  stroke: #121417;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ImgModal = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
`;

export const BrandCard = styled.div`
  margin-bottom: 8px;
`;

export const CarBrandModal = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;
`;

export const ModelModal = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #3470ff;
`;

export const YearModal = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #121417;
`;

export const InfoCarModal = styled.div`
  margin-bottom: 24px;
`;

export const InfoCarModalFirst = styled.div`
  margin-bottom: 4px;
`;

export const InfoCarModalSecond = styled.div`
  margin-bottom: 14px;
`;

export const CityModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const StrokeModal = styled.span`
  color: rgba(18, 20, 23, 0.1);
`;

export const CountryModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const IdModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const YearInfoModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const TypeModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const FuelConsumptionModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const EngineSizeModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const DescriptionModal = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`;

export const AccessoriesCardModal = styled.div`
  margin-bottom: 24px;
`;

export const AccessoriesTitleModal = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
  margin-bottom: 8px;
`;

export const AccessoriesListModal = styled.ul`
  display: block;
`;

export const AccessoriesItemModal = styled.li`
  display: inline;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const RentalTitleModal = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
  margin-bottom: 8px;
`;

export const RentalFlexModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const AgeModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
  display: block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const AgeAccentModal = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #3470ff;
`;

export const ValidModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  display: block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const SecurityModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  display: block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const MileageModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  display: block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const MileageAccentModal = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #3470ff;
`;

export const PriceModal = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
  display: block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
`;

export const PriceAccentModal = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: #3470ff;
`;

export const ButtonModal = styled.a`
  border-radius: 12px;
  border: none;
  padding: 12px 50px;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;
