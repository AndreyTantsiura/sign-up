import React, { useState } from "react";
import icon from "../img/icon.svg";
import {
  Wrapper,
  H1,
  H2,
  Span,
  FormBlocks,
  GenderForms,
  GenderCheckbox,
  FormsInput,
  Input,
  SignUpButton,
  Icon,
  Link,
} from "./styledFormRegComp";

export default function FormRegComp() {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const genderHandler = (e) => {
    const elem = document.querySelectorAll(".active");
    if (elem.length > 0) {
      elem[0].classList.remove("active");
    }
    const clickGender = e.currentTarget;
    clickGender.classList.add("active");

    setGender(e.target.id);
  };

  const emailHandler = (e) => {
    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    setEmail(e.target.value);

    if (e.target.value.match(emailCheck)) {
      e.target.style.borderColor = "#87D78B";
      e.target.style.color = "#87D78B";
    } else {
      e.target.style.borderColor = "#D23737";
      e.target.style.color = "#D23737";
    }
  };

  const createPasswordHandler = (e) => {
    const passCheck = new RegExp(/[0-9a-zA-Z]{6,}/);
    setCreatePassword(e.target.value);

    if (e.target.value.match(passCheck)) {
      e.target.style.borderColor = "#87D78B";
      e.target.style.color = "#87D78B";
    } else {
      e.target.style.borderColor = "#D23737";
      e.target.style.color = "#D23737";
    }
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value === createPassword) {
      e.target.style.borderColor = "#87D78B";
      e.target.style.color = "#87D78B";
    } else {
      e.target.style.borderColor = "#D23737";
      e.target.style.color = "#D23737";
    }
  };

  const rememberDataUser = (e) => {
    e.target.style.backgroundColor = "#318636";
    alert(
      "gender:" +
        gender +
        "; " +
        "email: " +
        email +
        "; " +
        "password: " +
        confirmPassword
    );
  };

  return (
    <Wrapper>
      <img src={icon} alt="" />
      <H1>Sign Up with email</H1>
      <FormBlocks>
        <H2>Gender</H2>
        <GenderForms>
          <GenderCheckbox id="male" onClick={genderHandler}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Icon d="M31.0625 0H22.3125C21.7948 0 21.375 0.41975 21.375 0.9375C21.375 1.45525 21.7948 1.875 22.3125 1.875H28.7992L17.9802 12.694C16.0113 11.0314 13.5443 10.125 10.9375 10.125C8.016 10.125 5.26937 11.2627 3.2035 13.3285C1.13762 15.3943 0 18.141 0 21.0625C0 23.984 1.13769 26.7306 3.2035 28.7965C5.26931 30.8624 8.016 32 10.9375 32C13.859 32 16.6056 30.8623 18.6715 28.7965C20.7374 26.7307 21.875 23.984 21.875 21.0625C21.875 18.4557 20.9686 15.9888 19.306 14.0198L30.125 3.20081V9.6875C30.125 10.2052 30.5448 10.625 31.0625 10.625C31.5802 10.625 32 10.2052 32 9.6875V0.9375C32 0.41975 31.5802 0 31.0625 0ZM17.3457 27.4707C15.634 29.1823 13.3582 30.125 10.9375 30.125C8.51681 30.125 6.241 29.1823 4.52931 27.4707C2.81769 25.759 1.875 23.4832 1.875 21.0625C1.875 18.6418 2.81769 16.366 4.52931 14.6543C6.241 12.9427 8.51681 12 10.9375 12C13.3582 12 15.634 12.9427 17.3457 14.6543C19.0573 16.366 20 18.6418 20 21.0625C20 23.4832 19.0573 25.759 17.3457 27.4707Z" />
            </svg>
            <Span>Male</Span>
          </GenderCheckbox>
          <GenderCheckbox id="female" onClick={genderHandler}>
            <svg
              width="20"
              height="32"
              viewBox="0 0 20 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Icon d="M19.6875 9.6875C19.6875 4.34581 15.3417 0 10 0C4.65831 0 0.3125 4.34581 0.3125 9.6875C0.3125 14.7129 4.15906 18.8564 9.0625 19.3295V25.75H5.625C5.10725 25.75 4.6875 26.1698 4.6875 26.6875C4.6875 27.2052 5.10725 27.625 5.625 27.625H9.0625V31.0625C9.0625 31.5802 9.48225 32 10 32C10.5177 32 10.9375 31.5802 10.9375 31.0625V27.625H14.375C14.8927 27.625 15.3125 27.2052 15.3125 26.6875C15.3125 26.1698 14.8927 25.75 14.375 25.75H10.9375V19.3295C15.8409 18.8564 19.6875 14.7129 19.6875 9.6875ZM2.1875 9.6875C2.1875 5.37969 5.69219 1.875 10 1.875C14.3078 1.875 17.8125 5.37969 17.8125 9.6875C17.8125 13.9953 14.3078 17.5 10 17.5C5.69219 17.5 2.1875 13.9953 2.1875 9.6875Z" />
            </svg>
            <Span>Female</Span>
          </GenderCheckbox>
          <GenderCheckbox id="transgender" onClick={genderHandler}>
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Icon d="M28.1252 1.9223e-06H22.5002C21.9824 1.9223e-06 21.5627 0.419752 21.5627 0.937503C21.5627 1.45525 21.9824 1.875 22.5002 1.875H25.8619L20.8024 6.93451C19.1839 5.72026 17.1746 5.00001 15.0002 5.00001C12.8257 5.00001 10.8164 5.72026 9.198 6.93451L7.12406 4.86051L8.99312 4.35969C9.49325 4.22569 9.79 3.71163 9.656 3.2115C9.522 2.71144 9.008 2.4145 8.50781 2.54863L6.63875 3.04944L7.13956 1.18038C7.27356 0.680252 6.97681 0.16619 6.47669 0.0321894C5.97631 -0.101936 5.46244 0.19494 5.3285 0.695065L4.82769 2.56413L3.56775 1.30425C3.20162 0.938128 2.608 0.938128 2.24194 1.30425C1.87581 1.67038 1.87581 2.26394 2.24194 2.63007L3.50187 3.89L1.63281 4.39082C1.13269 4.52482 0.835937 5.03888 0.969937 5.53901C1.08212 5.95788 1.46094 6.23413 1.87487 6.23413C1.95519 6.23413 2.03681 6.22369 2.11812 6.20194L3.98719 5.70113L3.48637 7.57019C3.35237 8.07032 3.64912 8.58438 4.14925 8.71838C4.23056 8.7402 4.31212 8.75057 4.3925 8.75057C4.80644 8.75057 5.18525 8.47432 5.29744 8.05544L5.79825 6.18638L7.81206 8.2002C6.25944 9.91876 5.31269 12.1946 5.31269 14.6875C5.31269 19.713 9.15925 23.8564 14.0627 24.3295V27H11.2502C10.7324 27 10.3127 27.4198 10.3127 27.9375C10.3127 28.4553 10.7324 28.875 11.2502 28.875H14.0627V31.0625C14.0627 31.5803 14.4824 32 15.0002 32C15.5179 32 15.9377 31.5803 15.9377 31.0625V28.875H18.7502C19.2679 28.875 19.6877 28.4553 19.6877 27.9375C19.6877 27.4198 19.2679 27 18.7502 27H15.9377V24.3295C20.8411 23.8565 24.6877 19.713 24.6877 14.6875C24.6877 12.1946 23.7409 9.9187 22.1884 8.20013L27.1877 3.20082V6.56251C27.1877 7.08026 27.6074 7.50001 28.1252 7.50001C28.6429 7.50001 29.0627 7.08026 29.0627 6.56251V0.937503C29.0627 0.419752 28.6429 1.9223e-06 28.1252 1.9223e-06ZM22.8127 14.6875C22.8127 18.9953 19.308 22.5 15.0002 22.5C10.6924 22.5 7.18769 18.9953 7.18769 14.6875C7.18769 10.3797 10.6924 6.87501 15.0002 6.87501C19.308 6.87501 22.8127 10.3797 22.8127 14.6875Z" />
            </svg>
            <Span>Other</Span>
          </GenderCheckbox>
        </GenderForms>
      </FormBlocks>
      <FormsInput>
        <FormBlocks>
          <H2>E-mail</H2>
          <Input
            type="e-mail"
            placeholder="johnsmith@mail.com"
            onChange={(e) => emailHandler(e)}
          />
        </FormBlocks>
        <FormBlocks>
          <H2>Create Password</H2>
          <Input
            type="password"
            placeholder="***********"
            onChange={(e) => createPasswordHandler(e)}
          />
        </FormBlocks>
        <FormBlocks>
          <H2>Confirm Password</H2>
          <Input
            type="password"
            placeholder="***********"
            onChange={(e) => confirmPasswordHandler(e)}
          />
        </FormBlocks>
        <SignUpButton onClick={rememberDataUser}>
          <Span style={{ color: "#fff" }}>Sign Up</Span>
        </SignUpButton>
      </FormsInput>
      <Span>
        Already have an account? <Link>Log In</Link>
      </Span>
      <Span style={{ marginTop: "20px" }}>
        Review privacy and disclosures <Link>here</Link>
      </Span>
    </Wrapper>
  );
}
