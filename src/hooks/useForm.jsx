import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate;

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {};

  const fetchData = async () => {
    if (editing) {
      await fetch(`http://localhost:4000/employees/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("http://localhost:4000/employees", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
    setLoading(false);
    navigate("/");
  };

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
