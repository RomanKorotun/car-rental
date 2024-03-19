// import styled from "styled-components";
// import { Field, Form } from "formik";

// //======================Form===============
// export const FormStyled = styled(Form)`
//   display: flex;
//   gap: 18px;
//   justify-content: center;
//   margin-bottom: 60px;
//   @media only screen and (min-width: 320px) {
//     flex-wrap: wrap;
//   }
// `;
// //======================/Form===============

// //======================Brand Field=========
// export const LabelBrand = styled.label`
//   display: inline-block;
// `;

// export const BrandCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// export const TitleBrand = styled.label`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   color: #8a8a89;
// `;

// export const FieldStyledBrand = styled(Field)`
//   @media only screen and (max-width: 427px) {
//     width: 140px;
//   }
//   border: 1px solid black;
//   background-color: #f7f7fb;
//   border-radius: 14px;
//   width: 224px;
//   height: 48px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   color: rgba(18, 20, 23, 0.2);
// `;

// //======================/Brand Field=======
// //======================Price Field=======
// export const LabelPrice = styled.label`
//   display: inline-block;
// `;

// export const PriceCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// export const TitlePrice = styled.label`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   color: #8a8a89;
// `;
// export const FieldStyledPrice = styled(Field)`
//   border: 1px solid black;
//   background-color: #f7f7fb;
//   border-radius: 14px;
//   width: 125px;
//   height: 48px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   color: rgba(18, 20, 23, 0.2);
// `;

// //======================/Price Field=======

// //======================Mileage Field=======
// export const LabelStyledMileage = styled.label`
//   position: relative;
//   display: inline-block;
// `;
// export const MileageCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;
// export const TitleMileage = styled.label`
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.28571;
//   color: #8a8a89;
// `;

// export const AbsoluteFrom = styled.div`
//   position: absolute;
//   top: 40px;
//   left: 20px;
//   color: rgba(18, 20, 23, 0.2);
// `;
// export const AbsoluteTo = styled.div`
//   position: absolute;
//   top: 40px;
//   left: 180px;
//   color: rgba(18, 20, 23, 0.2);
//   @media only screen and (max-width: 427px) {
//     left: 160px;
//   }
// `;

// export const FieldStyledMileageFrom = styled(Field)`
//   border: 1px solid black;
//   width: 160px;
//   height: 48px;
//   padding-left: 70px;
//   border-radius: 14px 0 0 14px;
//   background-color: #f7f7fb;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   color: rgba(18, 20, 23, 0.2);
//   @media only screen and (max-width: 427px) {
//     width: 140px;
//   }
// `;

// export const FieldStyledMileageTo = styled(Field)`
//   border: 1px solid black;
//   width: 160px;
//   height: 48px;
//   padding-left: 50px;
//   border-radius: 0 14px 14px 0;
//   background-color: #f7f7fb;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.25;
//   color: rgba(18, 20, 23, 0.2);
//   @media only screen and (max-width: 427px) {
//     width: 140px;
//   }
// `;

// //======================/Mileage Field=======

// //======================Btn=================
// export const BtnForm = styled.button`
//   @media only screen and (max-width: 427px) {
//     width: 132px;
//   }
//   border: none;
//   background-color: #3470ff;
//   align-self: flex-end;
//   border-radius: 12px;
//   padding: 14px 44px;
//   width: 136px;
//   height: 48px;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 1.42857;
//   color: #fff;
//   transition: background-color 250ms;
//   &:hover,
//   :focus {
//     background-color: #0b44cd;
//   }
// `;
// //======================/Btn=================

//============================================================

//======================Form===============
import styled from "styled-components";
export const FormStyled = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 60px;
  @media only screen and (min-width: 320px) {
    flex-wrap: wrap;
  }
`;
//======================/Form===============

//======================Brand Field=========
export const LabelBrand = styled.label`
  display: inline-block;
`;

export const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleBrand = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;

export const FieldStyledBrand = styled.select`
  @media only screen and (max-width: 427px) {
    width: 140px;
  }
  border: 1px solid black;
  background-color: #f7f7fb;
  border-radius: 14px;
  width: 224px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
`;

//======================/Brand Field=======
//======================Price Field=======
export const LabelPrice = styled.label`
  display: inline-block;
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitlePrice = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;
export const FieldStyledPrice = styled.select`
  border: 1px solid black;
  background-color: #f7f7fb;
  border-radius: 14px;
  width: 125px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
`;

//======================/Price Field=======

//======================Mileage Field=======
export const LabelStyledMileage = styled.label`
  position: relative;
  display: inline-block;
`;
export const MileageCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const TitleMileage = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;

export const AbsoluteFrom = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  color: rgba(18, 20, 23, 0.2);
`;
export const AbsoluteTo = styled.div`
  position: absolute;
  top: 40px;
  left: 180px;
  color: rgba(18, 20, 23, 0.2);
  @media only screen and (max-width: 427px) {
    left: 160px;
  }
`;

export const FieldStyledMileageFrom = styled.input`
  border: 1px solid black;
  width: 160px;
  height: 48px;
  padding-left: 70px;
  border-radius: 14px 0 0 14px;
  background-color: #f7f7fb;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
  @media only screen and (max-width: 427px) {
    width: 140px;
  }
`;

export const FieldStyledMileageTo = styled.input`
  border: 1px solid black;
  width: 160px;
  height: 48px;
  padding-left: 50px;
  border-radius: 0 14px 14px 0;
  background-color: #f7f7fb;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);
  @media only screen and (max-width: 427px) {
    width: 140px;
  }
`;

//======================/Mileage Field=======

//======================Btn=================
export const BtnForm = styled.button`
  @media only screen and (max-width: 427px) {
    width: 132px;
  }
  border: none;
  background-color: #3470ff;
  align-self: flex-end;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
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
//======================/Btn=================
