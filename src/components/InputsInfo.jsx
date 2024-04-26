import { PiEye, PiEyeClosed } from "react-icons/pi";
const InputsInfo = [
  {
    id: 1,
    name: "firstname",
    type: "text",
    placeholder: "First Name",
    required: "First Name cannot be empty",
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "First Name must contain only letters",
    },
    minLength: {
      value: 2,
      message: "First Name must be at least 2 characters",
    },
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Last Name",
    required: "Last Name cannot be empty",
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Last Name must contain only letters",
    },
    minLength: {
      value: 2,
      message: "Last Name must be at least 2 characters",
    },
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Email Address",
    required: "Email Address cannot be empty",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Looks like this is not an email",
    },
  },
  {
    id: 4,
    name: "password",
    type: "password",
    typeTwo: "text",
    placeholder: "Password",
    required: "Password cannot be empty",
    pattern: {
      value:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      message:
        "Password should contain at least 1 number, 1 lowercase and 1 uppercase letters, 1 special character and be 8-15 characters long",
    },
    icon: {
      open: PiEye,
      closed: PiEyeClosed,
      alt: "toggle icon",
    },
  },
];

export default InputsInfo;
