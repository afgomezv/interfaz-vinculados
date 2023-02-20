import { useState } from "react";
import { Navigate } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {};

  // const fetchData = async () => {
  //   await fetch("http://localhost:4000/employees", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //   });
  //   setLoading(false);
  //   Navigate("/");
  // };

  // const URL = "https://formsubmit.co/ajax/afgomezvonline@gmail.com";
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   await fetch(URL, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => res.json)
  //     .catch((error) => console.error("Error", error))
  //     .then((response) => {});
  //   e.target.reset();
  // };

  // const loadEmployee = async (id) => {
  //   const response = await fetch(`http://localhost:4000/employees/${id}`);
  //   const data = await response.json();
  //   setForm({ data });

  //   setEditing(true);
  // };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    //loadEmployee,
  };
};
