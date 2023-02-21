//React
import { useEffect, useContext } from "react";
import { FormContext } from "../contexts/FormContext";

//React-Router
import { useNavigate, useParams } from "react-router-dom";

//Componentes
import { Academy } from "../components/Academy";
import { Button } from "../components/Button";
import { Company } from "../components/Company";
import { Contact } from "../components/Contact";
import { Data } from "../components/Data";
import { Menu } from "../components/Menu";
import { Salary } from "../components/Salary";
import { Social } from "../components/Social";

export const Employee = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    loadEmployee,
  } = useContext(FormContext);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadEmployee(params.id);
    }
  }, [params.id]);

  return (
    <div>
      <Menu />
      <form
        onSubmit={handleSubmit}
        className="container translate-x-48 translate-y-24"
      >
        <Data
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Company
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Salary
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Academy
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Social
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Contact
          form={form}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Button />
      </form>
    </div>
  );
};
