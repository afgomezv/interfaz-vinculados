//Componentes
import { Input } from "./Input";

//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Academy = ({ form, errors, handleChange, handleBlur }) => {
  const { pregrado, especializacion, maestria, doctorado } = form;

  const { pregradoLabel, especializacionLabel, maestriaLabel, doctoradoLabel } =
    labelText;

  const { pregradoName, especializacionName, maestriaName, doctoradoName } =
    nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={pregradoName}
        value={pregrado}
        errors={errors}
        handleChange={handleChange}
        text={pregradoLabel}
        type="text"
      />
      <Input
        name={especializacionName}
        value={especializacion}
        errors={errors}
        handleChange={handleChange}
        text={especializacionLabel}
        type="text"
      />
      <Input
        name={maestriaName}
        value={maestria}
        errors={errors}
        handleChange={handleChange}
        text={maestriaLabel}
        type="text"
      />
      <Input
        name={doctoradoName}
        value={doctorado}
        errors={errors}
        handleChange={handleChange}
        text={doctoradoLabel}
        type="text"
      />
    </div>
  );
};
