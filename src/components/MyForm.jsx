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
  let navigateTo = useNavigate();
  const onSubmit = () => {
    console.log("submitted form");
    navigateTo("/registered");
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {InputsInfo.map((input) => (
          <div key={input.id}>
            <input
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name, { ...input })}
            />
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

