//React
import { createContext, useState } from "react";
export const FormContext = createContext();

//React-Router
import { useNavigate } from "react-router-dom";

//Utils
import { initialForm } from "../utils/initialForm";
import { validationsForm } from "../utils/validationsForm";
import Swal from "sweetalert2";

export const FormProvider = ({ children }) => {
  const URL = "http://localhost:4000/employees";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Datos enviados correctamente",
          showConfirmButton: false,
          timer: 1500,
        })
      );
    console.log(form);
    e.target.reset();
  };

  const loadEmployee = async (id) => {
    const response = await fetch(`http://localhost:4000/employees/${id}`);
    const data = await response.json();
    setForm({ data });
    setEditing(true);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        loadEmployee,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
