import { useState } from "react";
import { sendGAEvent } from "../../utils/gaEvents";

const useFormState = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    sendGAEvent("form_field_changed", { field_name: name, field_value: value });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return [form, handleChange, resetForm];
};

export default useFormState;
