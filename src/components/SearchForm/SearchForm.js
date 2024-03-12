import { Formik } from "formik";
import { filters } from "../../redux/cars/carsSlice";
import { useDispatch } from "react-redux";
import {
  FieldStyledBrand,
  FieldStyledMileageFrom,
  BrandCard,
  LabelStyledMileage,
  TitleBrand,
  LabelBrand,
  LabelPrice,
  PriceCard,
  TitlePrice,
  FieldStyledPrice,
  MileageCard,
  TitleMileage,
  FieldStyledMileageTo,
  BtnForm,
  FormStyled,
  AbsoluteFrom,
  AbsoluteTo,
} from "./SearchForm.styled";
import { useCars } from "../../hooks/useCars";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const { brand, price } = useCars();
  return (
    <Formik
      initialValues={{
        brand: brand,
        price: price,
        mileageFrom: "",
        mileageTo: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        dispatch(filters(values));
      }}
    >
      <FormStyled>
        <LabelBrand>
          <BrandCard>
            <TitleBrand> Car brand</TitleBrand>
            <FieldStyledBrand component="select" name="brand">
              <option value="all">All brands</option>
              <option value="buick">Buick</option>
              <option value="volvo">Volvo</option>
              <option value="hummer">Hummer</option>
              <option value="subaru">Subaru</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="nissan">Nissan</option>
              <option value="lincoln">Lincoln</option>
              <option value="gmc">GMC</option>
              <option value="hyundai">Hyundai</option>
              <option value="mini">MINI</option>
              <option value="bentley">Bentley</option>
              <option value="mercedes-benz">Mercedes-Benz</option>
              <option value="aston martin">Aston Martin</option>
              <option value="pontiac">Pontiac</option>
              <option value="lamborghini">Lamborghini</option>
              <option value="audi">Audi</option>
              <option value="bmw">BMW</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="chrysler">Chrysler</option>
              <option value="kia">Kia</option>
              <option value="land rover">Land Rover</option>
            </FieldStyledBrand>
          </BrandCard>
        </LabelBrand>

        <LabelPrice>
          <PriceCard>
            <TitlePrice>Price,$ / 1 hour</TitlePrice>
            <FieldStyledPrice component="select" name="price">
              <option value="all">All prices</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="75">75</option>
              <option value="100">100</option>
              <option value="150">150</option>
              <option value="200">200</option>
              <option value="250">250</option>
              <option value="300">300</option>
              <option value="500">500</option>
            </FieldStyledPrice>
          </PriceCard>
        </LabelPrice>

        <LabelStyledMileage>
          <MileageCard>
            <TitleMileage> Сar mileage / km</TitleMileage>
            <div>
              <FieldStyledMileageFrom type="number" name="mileageFrom" />
              <FieldStyledMileageTo type="number" name="mileageTo" />
            </div>
          </MileageCard>
          <AbsoluteFrom>From</AbsoluteFrom>
          <AbsoluteTo>To</AbsoluteTo>
        </LabelStyledMileage>
        <BtnForm type="submit">Search</BtnForm>
      </FormStyled>
    </Formik>
  );
};
