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
import { useState } from "react";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const {
    brand: brandPersist,
    price: pricePersist,
    mileageFrom: mileageFromPersist,
    mileageTo: mileageToPersist,
  } = useCars();

  const [brand, setBrand] = useState(brandPersist);
  const [price, setPrice] = useState(pricePersist);
  const [mileageFrom, setMileageFrom] = useState(mileageFromPersist);
  const [mileageTo, setMileageTo] = useState(mileageToPersist);

  const mileageFromValue = mileageFrom.split("");

  if (mileageFromValue !== "" && mileageFromValue.length === 4) {
    if (!mileageFromValue.includes(",")) {
      mileageFromValue.splice(1, 0, ",");
    } else {
      mileageFromValue.splice(1, 1);
    }
  }

  if (mileageFromValue !== "" && mileageFromValue.length === 5) {
    const idx = mileageFromValue.indexOf(",");
    if (idx === 2) {
      mileageFromValue.splice(2, 1);
      mileageFromValue.splice(1, 0, ",");
    }
    if (idx === -1) {
      mileageFromValue.splice(2, 0, ",");
    }
  }

  if (mileageFromValue !== "" && mileageFromValue.length === 6) {
    const idx = mileageFromValue.indexOf(",");
    if (idx === 1) {
      mileageFromValue.splice(1, 1);
      mileageFromValue.splice(2, 0, ",");
    }
    if (idx === 3) {
      mileageFromValue.splice(3, 1);
      mileageFromValue.splice(2, 0, ",");
    }
    if (idx === -1) {
      mileageFromValue.splice(3, 0, ",");
    }
  }

  if (mileageFromValue !== "" && mileageFromValue.length === 7) {
    const idx = mileageFromValue.indexOf(",");
    if (idx === 2) {
      mileageFromValue.splice(2, 1);
      mileageFromValue.splice(3, 0, ",");
    }
  }

  const newMileageFrom = mileageFromValue.filter((item) => item);

  const mileageToValue = mileageTo.split("");
  if (mileageToValue !== "" && mileageToValue.length === 4) {
    if (!mileageToValue.includes(",")) {
      mileageToValue.splice(1, 0, ",");
    } else {
      mileageToValue.splice(1, 1);
    }
  }

  if (mileageToValue !== "" && mileageToValue.length === 5) {
    const idx = mileageToValue.indexOf(",");
    if (idx === 2) {
      mileageToValue.splice(2, 1);
      mileageToValue.splice(1, 0, ",");
    }
    if (idx === -1) {
      mileageToValue.splice(2, 0, ",");
    }
  }

  if (mileageToValue !== "" && mileageToValue.length === 6) {
    const idx = mileageToValue.indexOf(",");
    if (idx === 1) {
      mileageToValue.splice(1, 1);
      mileageToValue.splice(2, 0, ",");
    }
    if (idx === 3) {
      mileageToValue.splice(3, 1);
      mileageToValue.splice(2, 0, ",");
    }
    if (idx === -1) {
      mileageToValue.splice(3, 0, ",");
    }
  }

  if (mileageToValue !== "" && mileageToValue.length === 7) {
    const idx = mileageToValue.indexOf(",");
    if (idx === 2) {
      mileageToValue.splice(2, 1);
      mileageToValue.splice(3, 0, ",");
    }
  }
  const newMileageTo = mileageToValue.filter((item) => item);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMileageFrom = mileageFrom.split("").filter((item) => item !== ",");
    const newMileageTo = mileageTo.split("").filter((item) => item !== ",");

    dispatch(
      filters({
        brand,
        price,
        mileageFrom: newMileageFrom.join(""),
        mileageTo: newMileageTo.join(""),
      })
    );
  };

  const handleClick = () => {
    dispatch(
      filters({
        brand: "all",
        price: "all",
        mileageFrom: "",
        mileageTo: "",
      })
    );
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelBrand>
        <BrandCard>
          <TitleBrand> Car brand</TitleBrand>
          <FieldStyledBrand
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
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
          <FieldStyledPrice
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
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
            <FieldStyledMileageFrom
              type="string"
              name="mileageFrom"
              value={newMileageFrom.join("")}
              onChange={(e) => setMileageFrom(e.target.value)}
              pattern="^\d*(,)?\d*$"
              title="example: 1500, 2000, 3860..."
            />
            <FieldStyledMileageTo
              type="string"
              name="mileageTo"
              value={newMileageTo.join("")}
              onChange={(e) => setMileageTo(e.target.value)}
              pattern="^\d*(,)?\d*$"
              title="example: 1500, 2000, 3860..."
            />
          </div>
        </MileageCard>
        <AbsoluteFrom>From</AbsoluteFrom>
        <AbsoluteTo>To</AbsoluteTo>
      </LabelStyledMileage>
      <BtnForm type="submit">Search</BtnForm>
      <BtnForm
        onClick={() => {
          setBrand("all");
          setPrice("all");
          setMileageFrom("");
          setMileageTo("");
          handleClick();
        }}
        type="reset"
      >
        Reset
      </BtnForm>
    </FormStyled>
  );
};
