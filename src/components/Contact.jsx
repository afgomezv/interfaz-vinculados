import { Input } from "./Input";
import { labelText } from "../utils/labelText";
import { Select2 } from "./Select2";

export const Contact = () => {
  const {
    direccion,
    ciudad,
    correoPersonal,
    telefono,
    celular,
    estadoCivil,
    hijos,
    otros,
  } = labelText;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={direccion} type="text" />
      <Input text={ciudad} type="text" />
      <Input text={correoPersonal} type="text" />
      <Input text={telefono} type="number" />
      <Input text={celular} type="number" />
      <Select2 text={estadoCivil} />
      <Input text={hijos} type="number" />
      <Input text={otros} type="text" />
    </div>
  );
};
