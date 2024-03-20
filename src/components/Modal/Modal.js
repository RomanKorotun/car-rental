import Modal from "react-modal";
import sprite from "../../image/sprite.svg";
import {
  AccessoriesCardModal,
  AccessoriesItemModal,
  AccessoriesListModal,
  AccessoriesTitleModal,
  AgeAccentModal,
  AgeModal,
  BrandCard,
  ButtonModal,
  CarBrandModal,
  CityModal,
  CountryModal,
  CustomModal,
  DescriptionModal,
  EngineSizeModal,
  FuelConsumptionModal,
  IdModal,
  ImgModal,
  InfoCarModal,
  InfoCarModalFirst,
  InfoCarModalSecond,
  MileageAccentModal,
  MileageModal,
  ModelModal,
  PriceAccentModal,
  PriceModal,
  RentalFlexModal,
  RentalTitleModal,
  SecurityModal,
  StrokeModal,
  SvgModal,
  TypeModal,
  ValidModal,
  YearInfoModal,
  YearModal,
} from "./Modal.styled";

Modal.setAppElement("#root");

export const ModalContainer = ({ car, isModalOpen, onCloseModal }) => {
  const mileageNew = [...car.mileage.toString().split("")];
  mileageNew.splice(1, 0, ",");
  const carRentalPrice = [];
  if (car.rentalPrice[1]) {
    carRentalPrice.push(car.rentalPrice[1]);
  }
  if (car.rentalPrice[2]) {
    carRentalPrice.push(car.rentalPrice[2]);
  }
  if (car.rentalPrice[3]) {
    carRentalPrice.push(car.rentalPrice[3]);
  }
  if (car.rentalPrice[0]) {
    carRentalPrice.push(car.rentalPrice[0]);
  }
  return (
    <CustomModal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      contentLabel="Example Modal"
    >
      <div>
        <ImgModal src={car.img} alt={car.make} />
        <SvgModal onClick={onCloseModal}>
          <use href={`${sprite}#icon-x`}></use>
        </SvgModal>

        <BrandCard>
          <CarBrandModal>{car.make}</CarBrandModal>&nbsp;
          <ModelModal>{car.model}</ModelModal>,&nbsp;
          <YearModal>{car.year}</YearModal>
        </BrandCard>
        <InfoCarModal>
          <InfoCarModalFirst>
            <CityModal>{car.address.split(",")[2]}</CityModal>&nbsp;
            <StrokeModal>|</StrokeModal>&nbsp;
            <CountryModal>{car.address.split(",")[1]}</CountryModal>&nbsp;
            <StrokeModal>|</StrokeModal>&nbsp;
            <IdModal>id:&nbsp;{car.id} </IdModal>
            <StrokeModal>|</StrokeModal>&nbsp;
            <YearInfoModal>Year:&nbsp;{car.year}</YearInfoModal>&nbsp;
            <StrokeModal>|</StrokeModal>&nbsp;
            <TypeModal>Type:&nbsp;{car.type}</TypeModal>
          </InfoCarModalFirst>
          <InfoCarModalSecond>
            <FuelConsumptionModal>
              Fuel Consumption:&nbsp;{car.fuelConsumption}
            </FuelConsumptionModal>
            &nbsp;
            <StrokeModal>|</StrokeModal>&nbsp;
            <EngineSizeModal>
              Engine Size:&nbsp;{car.engineSize}
            </EngineSizeModal>
          </InfoCarModalSecond>
          <DescriptionModal>{car.description}</DescriptionModal>
        </InfoCarModal>
        <AccessoriesCardModal>
          <AccessoriesTitleModal>
            Accessories and functionalities:
          </AccessoriesTitleModal>
          <AccessoriesListModal>
            {car.accessories.map((el) => (
              <AccessoriesItemModal key={el}>
                {el}
                &nbsp;<StrokeModal>|</StrokeModal>&nbsp;
              </AccessoriesItemModal>
            ))}
          </AccessoriesListModal>
        </AccessoriesCardModal>
        <div>
          <RentalTitleModal>Rental Conditions: </RentalTitleModal>
          <RentalFlexModal>
            <AgeModal>
              Minimum age:&nbsp;
              <AgeAccentModal>
                {car.rentalConditions.slice(13, 15)}
              </AgeAccentModal>
            </AgeModal>
            <ValidModal>{car.rentalConditions.slice(15, 38)}</ValidModal>
            <SecurityModal>{car.rentalConditions.slice(38)}</SecurityModal>
            <MileageModal>
              Mileage:&nbsp;
              <MileageAccentModal>{mileageNew.join("")}</MileageAccentModal>
            </MileageModal>
            <PriceModal>
              Price:&nbsp;
              <PriceAccentModal>{carRentalPrice.join("")}</PriceAccentModal>
            </PriceModal>
          </RentalFlexModal>
          <ButtonModal href="tel:+380730000000">Rental car</ButtonModal>
        </div>
      </div>
    </CustomModal>
  );
};
