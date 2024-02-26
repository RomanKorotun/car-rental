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
  ModalCard,
  ModelModal,
  PriceAccentModal,
  PriceModal,
  RentalCardModal,
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -46%)",
  },
};

Modal.setAppElement("#root");

export const ModalContainer = ({ car, isModalOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalCard>
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
        <RentalCardModal>
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
              <MileageAccentModal>{car.mileage}</MileageAccentModal>
            </MileageModal>
            <PriceModal>
              Price:&nbsp;<PriceAccentModal>{car.rentalPrice}</PriceAccentModal>
            </PriceModal>
          </RentalFlexModal>
          <ButtonModal>Rental car</ButtonModal>
        </RentalCardModal>
      </ModalCard>
    </Modal>
  );
};
