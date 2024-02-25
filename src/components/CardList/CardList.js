import sprite from '../../image/sprite.svg';
import {
  Brand,
  CardWrapper,
  City,
  Country,
  Img,
  Item,
  List,
  CarBrand,
  Model,
  Price,
  RentalCompany,
  SubTitle,
  Type,
  Year,
  Mileage,
  Accessories,
  LearnMoreBtn,
  Stroke,
  Svg,
} from './CardList.styled';
import { useDispatch } from 'react-redux';
import { iconColor } from '../../redux/cars/carsSlice';

export const CardList = ({ cars }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <div>
            <Img src={car.img} alt="car" width="274" height="180" />
            <Svg onClick={() => dispatch(iconColor(car.id))} $fill={car.fill}>
              <use href={`${sprite}#icon-heart`}></use>
            </Svg>
            <CardWrapper>
              <SubTitle>
                <div>
                  <CarBrand>{car.make}</CarBrand>&nbsp;
                  <Model>{car.model}</Model>,&nbsp;<Year>{car.year}</Year>
                </div>
                <Price>{car.rentalPrice}</Price>
              </SubTitle>
              <div>
                <div>
                  <City>{car.address.split(',')[2]}</City>&nbsp;
                  <Stroke>|</Stroke>
                  &nbsp;
                  <Country>{car.address.split(',')[1]}</Country>&nbsp;
                  <Stroke>|</Stroke>&nbsp;
                  <RentalCompany>{car.rentalCompany}</RentalCompany>
                </div>
                <Type>{car.type}</Type>&nbsp;<Stroke>|</Stroke>&nbsp;
                <Brand>{car.model}</Brand>&nbsp;<Stroke>|</Stroke>&nbsp;
                <Mileage>{car.mileage}</Mileage>&nbsp;<Stroke>|</Stroke>&nbsp;
                <Accessories>{car.accessories[2]}</Accessories>
              </div>
            </CardWrapper>
          </div>
          <LearnMoreBtn>Learn more</LearnMoreBtn>
        </Item>
      ))}
    </List>
  );
};
