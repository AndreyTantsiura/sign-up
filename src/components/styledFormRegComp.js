import styled from "styled-components";

export const Wrapper = styled.div`
  width: 570px;
  height: 964px;
  background: #ffffff;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #5b5b5b;
`;

export const H2 = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #5b5b5b;
`;

export const Span = styled.span`
  margin-top: 5px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #5b5b5b;
`;

export const FormBlocks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 10px;
`;

export const GenderForms = styled.div`
  width: 500px;
  display: inline-flex;
  justify-content: space-between;
`;

export const Icon = styled.path`
  fill: #5b5b5b;
`;

export const GenderCheckbox = styled.div`
  width: 156px;
  height: 100px;
  border: 1px solid #c1c1c1;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 1px solid #3c9c41;
    cursor: pointer;
    ${Span} {
      color: #3c9c41;
    }
    ${Icon} {
      fill: #3c9c41;
    }
  }
  &.active {
    border: 1px solid #3c9c41;
  }
  &.active ${Icon} {
    fill: #3c9c41;
  }
  &.active ${Span} {
    color: #3c9c41;
  }
`;

export const FormsInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 500px;
  height: 70px;
  padding: 0 25px;
  border: 1px solid #c1c1c1;
  box-sizing: border-box;
  border-radius: 16px;
  outline: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #5b5b5b;
`;

export const SignUpButton = styled.div`
  width: 500px;
  height: 70px;
  background: #3c9c41;
  border-radius: 16px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:hover {
    background-color: #4db252;
    cursor: pointer;
  }
`;

export const Link = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #3c9c41;
  cursor: pointer;
`;
