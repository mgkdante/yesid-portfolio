import { useState } from "react";

const useFormState = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return [form, handleChange, resetForm];
};

export default useFormState;
