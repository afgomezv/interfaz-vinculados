//Componentes
import { Input } from "./Input";

//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Social = ({ form, errors, handleChange, handleBlur }) => {
  const { eps, pension, cesantias } = form;

  const { epsLabel, pensionLabel, cesantiasLabel } = labelText;

  const { epsName, pensionName, cesantiasName } = nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={epsName}
        value={eps}
        errors={errors}
        handleChange={handleChange}
        text={epsLabel}
        type="text"
      />
      <Input
        name={pensionName}
        value={pension}
        errors={errors}
        handleChange={handleChange}
        text={pensionLabel}
        type="text"
      />
      <Input
        name={cesantiasName}
        value={cesantias}
        errors={errors}
        handleChange={handleChange}
        text={cesantiasLabel}
        type="text"
      />
    </div>
  );
};
