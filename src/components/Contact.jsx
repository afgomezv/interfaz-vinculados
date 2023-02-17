import { Input } from "./Input";
import { labelText } from "../utils/labelText";
import { Select2 } from "./Select2";

export const Contact = () => {
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

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={direccionLabel} type="text" />
      <Input text={ciudadLabel} type="text" />
      <Input text={correoPersonalLabel} type="text" />
      <Input text={telefonoLabel} type="number" />
      <Input text={celularLabel} type="number" />
      <Select2 text={estadoCivilLabel} />
      <Input text={hijosLabel} type="number" />
      <Input text={otrosLabel} type="text" />
    </div>
  );
};
