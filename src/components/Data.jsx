import { Input } from "./Input";
import { labelText } from "../utils/labelText";
import { Select } from "./Select";

export const Data = ({ form }) => {
  const {
    funcionario,
    sexo,
    correo,
    cedula,
    expedida,
    fechaNacimiento,
    lugarNacimiento,
  } = labelText;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={funcionario} type="text" />
      <Select text={sexo} type="text" />
      <Input text={correo} type="text" />
      <Input text={cedula} type="number" />
      <Input text={expedida} type="text" />
      <Input text={fechaNacimiento} type="date" />
      <Input text={lugarNacimiento} type="text" />
    </div>
  );
};
