import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Company = () => {
  const {
    fechaIngresoLabel,
    tiempoServicioLabel,
    dependenciaLabel,
    areafuncionalLabel,
    cargoLabel,
    codigoLabel,
    gradoLabel,
    nivelLabel,
    naturalezaLabel,
    situacionActualLabel,
    novedadLabel,
  } = labelText;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={fechaIngresoLabel} type="date" />
      <Input text={tiempoServicioLabel} type="number" />
      <Input text={dependenciaLabel} type="text" />
      <Input text={areafuncionalLabel} type="text" />
      <Input text={cargoLabel} type="text" />
      <Input text={codigoLabel} type="number" />
      <Input text={gradoLabel} type="number" />
      <Input text={nivelLabel} type="text" />
      <Input text={naturalezaLabel} type="text" />
      <Input text={situacionActualLabel} type="text" />
      <Input text={novedadLabel} type="text" />
    </div>
  );
};
