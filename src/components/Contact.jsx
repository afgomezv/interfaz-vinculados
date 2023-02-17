//Componentes
import { Input } from "./Input";
import { Select2 } from "./Select2";
//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Contact = ({ form, errors, handleChange, handleBlur }) => {
  const {
    direccion,
    ciudad,
    correoPersonal,
    telefono,
    celular,
    estadoCivil,
    hijos,
    otros,
  } = form;

  const {
    direccionLabel,
    ciudadLabel,
    correoPersonalLabel,
    telefonoLabel,
    celularLabel,
    estadoCivilLabel,
    hijosLabel,
    otrosLabel,
  } = labelText;

  const {
    direccionName,
    ciudadName,
    correoPersonalName,
    telefonoName,
    celularName,
    estadoCivilName,
    hijosName,
    otrosName,
  } = nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={direccionName}
        value={direccion}
        errors={errors}
        handleChange={handleChange}
        text={direccionLabel}
        type="text"
      />
      <Input
        name={ciudadName}
        value={ciudad}
        errors={errors}
        handleChange={handleChange}
        text={ciudadLabel}
        type="text"
      />
      <Input
        name={correoPersonalName}
        value={correoPersonal}
        errors={errors}
        handleChange={handleChange}
        text={correoPersonalLabel}
        type="text"
      />
      <Input
        name={telefonoName}
        value={telefono}
        errors={errors}
        handleChange={handleChange}
        text={telefonoLabel}
        type="number"
      />
      <Input
        name={celularName}
        value={celular}
        errors={errors}
        handleChange={handleChange}
        text={celularLabel}
        type="number"
      />
      <Select2
        name={estadoCivilName}
        value={estadoCivil}
        errors={errors}
        handleChange={handleChange}
        text={estadoCivilLabel}
      />
      <Input
        name={hijosName}
        value={hijos}
        errors={errors}
        handleChange={handleChange}
        text={hijosLabel}
        type="number"
      />
      <Input
        name={otrosName}
        value={otros}
        errors={errors}
        handleChange={handleChange}
        text={otrosLabel}
        type="text"
      />
    </div>
  );
};
