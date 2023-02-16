import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Company = () => {
  const {
    fechaIngreso,
    tiempoServicio,
    dependencia,
    areafuncional,
    cargo,
    codigo,
    grado,
    nivel,
    naturaleza,
    situacionActual,
    novedad,
  } = labelText;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={fechaIngreso} type="date" />
      <Input text={tiempoServicio} type="number" />
      <Input text={dependencia} type="text" />
      <Input text={areafuncional} type="text" />
      <Input text={cargo} type="text" />
      <Input text={codigo} type="number" />
      <Input text={grado} type="number" />
      <Input text={nivel} type="text" />
      <Input text={naturaleza} type="text" />
      <Input text={situacionActual} type="text" />
      <Input text={novedad} type="text" />
    </div>
  );
};
