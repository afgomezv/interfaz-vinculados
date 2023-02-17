import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const URL = "https://formsubmit.co/ajax/afgomezvonline@gmail.com";
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json)
      .catch((error) => console.error("Error", error))
      .then((response) => {});
    console.log(form);
    e.target.reset();
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
