//React
import { useForm } from "../hooks/useForm";

//Componentes
import { Academy } from "../components/Academy";
import { Button } from "../components/Button";
import { Company } from "../components/Company";
import { Contact } from "../components/Contact";
import { Data } from "../components/Data";
import { Menu } from "../components/Menu";
import { Salary } from "../components/Salary";
import { Social } from "../components/Social";

//Utils
import { initialForm } from "../utils/initialForm";
import { validationsForm } from "../utils/validationsForm";

export const Employee = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

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
