import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputsInfo from "./InputsInfo";
import "./MyForm.css";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // getValues, //for confirm password=password
    // formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const [changetype, setChangetype] = useState(false);

  let navigateTo = useNavigate();
  const onSubmit = () => {
    console.log("submitted form");
    navigateTo("/registered");
    reset();

  };
  const iconClick = () => {
    setChangetype(!changetype);

  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {InputsInfo.map((input) => (
          <div key={input.id} className="inputDiv">
            <input
              type={
                !changetype && input.typeTwo
                  ? input.type
                  : !input.typeTwo
                  ? input.type
                  : input.typeTwo
              }
              placeholder={input.placeholder}
              {...register(input.name, { ...input })}
            />

            {input.icon &&
              (changetype ? (
                <input.icon.open className="icon" onClick={iconClick} />
              ) : (
                <input.icon.closed className="icon" onClick={iconClick} />
              ))}
            {errors[input.name] && (
              <p className="errormessage">{`${errors[input.name].message}`}</p>
            )}
          </div>
        ))}
        <button type="submit" disabled={isSubmitting}>
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
    </>
  );
}

