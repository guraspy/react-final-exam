import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ContactForm.css";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea {...register("message")} />
          <p>{errors.message?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
