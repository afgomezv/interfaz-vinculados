//Componentes
import { Input } from "./Input";

//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Company = ({ form, errors, handleChange, handleBlur }) => {
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
  } = form;

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

  const {
    fechaIngresoName,
    tiempoServicioName,
    dependenciaName,
    areafuncionalName,
    cargoName,
    codigoName,
    gradoName,
    nivelName,
    naturalezaName,
    situacionActualName,
    novedadName,
  } = nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={fechaIngresoName}
        value={fechaIngreso}
        errors={errors}
        handleChange={handleChange}
        text={fechaIngresoLabel}
        type="date"
      />
      <Input
        name={tiempoServicioName}
        value={tiempoServicio}
        errors={errors}
        handleChange={handleChange}
        text={tiempoServicioLabel}
        type="number"
      />
      <Input
        name={dependenciaName}
        value={dependencia}
        errors={errors}
        handleChange={handleChange}
        text={dependenciaLabel}
        type="text"
      />
      <Input
        name={areafuncionalName}
        value={areafuncional}
        errors={errors}
        handleChange={handleChange}
        text={areafuncionalLabel}
        type="text"
      />
      <Input
        name={cargoName}
        value={cargo}
        errors={errors}
        handleChange={handleChange}
        text={cargoLabel}
        type="text"
      />
      <Input
        name={codigoName}
        value={codigo}
        errors={errors}
        handleChange={handleChange}
        text={codigoLabel}
        type="number"
      />
      <Input
        name={gradoName}
        value={grado}
        errors={errors}
        handleChange={handleChange}
        text={gradoLabel}
        type="text   "
      />
      <Input
        name={nivelName}
        value={nivel}
        errors={errors}
        handleChange={handleChange}
        text={nivelLabel}
        type="text"
      />
      <Input
        name={naturalezaName}
        value={naturaleza}
        errors={errors}
        handleChange={handleChange}
        text={naturalezaLabel}
        type="text"
      />
      <Input
        name={situacionActualName}
        value={situacionActual}
        errors={errors}
        handleChange={handleChange}
        text={situacionActualLabel}
        type="text"
      />
      <Input
        name={novedadName}
        value={novedad}
        errors={errors}
        handleChange={handleChange}
        text={novedadLabel}
        type="text"
      />
    </div>
  );
};
