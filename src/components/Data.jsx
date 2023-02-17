//Componentes
import { Input } from "./Input";
import { Select } from "./Select";

//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Data = ({ form, errors, handleChange, handleBlur }) => {
  const {
    funcionario,
    sexo,
    correo,
    cedula,
    expedida,
    fechaNacimiento,
    lugarNacimiento,
  } = form;

  const {
    funcionarioLabel,
    sexoLabel,
    correoLabel,
    cedulaLabel,
    expedidaLabel,
    fechaNacimientoLabel,
    lugarNacimientoLabel,
  } = labelText;

  const {
    funcionarioName,
    sexoName,
    correoName,
    cedulaName,
    expedidaName,
    fechaNacimientoName,
    lugarNacimientoName,
  } = nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={funcionarioName}
        value={funcionario}
        errors={errors}
        handleChange={handleChange}
        text={funcionarioLabel}
        type="text"
      />
      <Select
        name={sexoName}
        value={sexo}
        errors={errors}
        handleChange={handleChange}
        text={sexoLabel}
        type="text"
      />
      <Input
        name={correoName}
        value={correo}
        errors={errors}
        handleChange={handleChange}
        text={correoLabel}
        type="text"
      />
      <Input
        name={cedulaName}
        value={cedula}
        errors={errors}
        handleChange={handleChange}
        text={cedulaLabel}
        type="number"
      />
      <Input
        name={expedidaName}
        value={expedida}
        errors={errors}
        handleChange={handleChange}
        text={expedidaLabel}
        type="text"
      />
      <Input
        name={fechaNacimientoName}
        value={fechaNacimiento}
        errors={errors}
        handleChange={handleChange}
        text={fechaNacimientoLabel}
        type="date"
      />
      <Input
        name={lugarNacimientoName}
        value={lugarNacimiento}
        errors={errors}
        handleChange={handleChange}
        text={lugarNacimientoLabel}
        type="text"
      />
    </div>
  );
};
