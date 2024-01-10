import { useState } from "react";
import emailjs from "@emailjs/browser";

const useFormSubmit = (form) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nuw6z8a",
        "template_cbngh99",
        {
          from_name: form.name,
          to_name: "Yesid Otalora",
          from_email: form.email,
          to_email: "contact@yesid.dev",
          message: form.message,
        },
        "WNltWCBp5T28Qr4Wa",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return [loading, handleSubmit];
};

export default useFormSubmit;
