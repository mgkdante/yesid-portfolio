import React from "react";
import { contactFormFields } from "../../data/index.js";
import TextInput from "../../components/form/TextInput";
import EmailInput from "../../components/form/EmailInput";
import TextareaInput from "../../components/form/TextareaInput";
import SubmitButton from "../../components/form/SubmitButton";
import useFormState from "./useFormState";
import useFormSubmit from "./useFormSubmit.js";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [form, handleChange, resetForm] = useFormState(initialState);
  const [loading, handleSubmit] = useFormSubmit(form);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        resetForm();
      }}
      className="mt-12 flex flex-col gap-8 flex-grow"
    >
      <TextInput
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={contactFormFields.name.placeholder}
        label={contactFormFields.name.label}
      />
      <EmailInput
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={contactFormFields.email.placeholder}
        label={contactFormFields.email.label}
      />
      <TextareaInput
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={contactFormFields.message.placeholder}
        label={contactFormFields.message.label}
      />
      <SubmitButton loading={loading} />
    </form>
  );
};

export default ContactForm;
