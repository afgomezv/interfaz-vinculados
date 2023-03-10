//Componentes
import { Input } from "./Input";

//Utils
import { labelText } from "../utils/labelText";
import { nameInputs } from "../utils/nameInputs";

export const Salary = ({ form, errors, handleChange, handleBlur }) => {
  const {
    salario2017,
    salario2018,
    segundoIncremento,
    salarioFinal2018,
    ipc318,
    salario2019,
    salarioFinal2019,
    ipc380,
    salario2020,
    salarioFinal2020,
    salario2021,
    salarioFinal2021,
    salario2022,
    salarioFinal2022,
    opec,
    observacion,
  } = form;

  const {
    salario2017Label,
    salario2018Label,
    segundoIncrementoLabel,
    salarioFinal2018lLabel,
    ipc318Label,
    salario2019Label,
    salarioFinal2019Label,
    ipc380Label,
    salario2020Label,
    salarioFinal2020Label,
    salario2021Label,
    salarioFinal2021Label,
    salario2022Label,
    salarioFinal2022Label,
    opecLabel,
    observacionLabel,
  } = labelText;

  const {
    salario2017Name,
    salario2018Name,
    segundoIncrementoName,
    salario2018FinalName,
    ipc318Name,
    salario2019Name,
    salarioFinal2019Name,
    ipc380Name,
    salario2020Name,
    salarioFinal2020Name,
    salario2021Name,
    salarioFinal2021Name,
    salario2022Name,
    salarioFinal2022Name,
    opecName,
    observacionName,
  } = nameInputs;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input
        name={salario2017Name}
        value={salario2017}
        errors={errors}
        handleChange={handleChange}
        text={salario2017Label}
        type="number"
      />
      <Input
        name={salario2018Name}
        value={salario2018}
        errors={errors}
        handleChange={handleChange}
        text={salario2018Label}
        type="number"
      />
      <Input
        name={segundoIncrementoName}
        value={segundoIncremento}
        errors={errors}
        handleChange={handleChange}
        text={segundoIncrementoLabel}
        type="number"
      />
      <Input
        name={salario2018FinalName}
        value={salarioFinal2018}
        errors={errors}
        handleChange={handleChange}
        text={salarioFinal2018lLabel}
        type="number"
      />
      <Input
        name={ipc318Name}
        value={ipc318}
        errors={errors}
        handleChange={handleChange}
        text={ipc318Label}
        type="number"
      />
      <Input
        name={salario2019Name}
        value={salario2019}
        errors={errors}
        handleChange={handleChange}
        text={salario2019Label}
        type="number"
      />
      <Input
        name={salarioFinal2019Name}
        value={salarioFinal2019}
        errors={errors}
        handleChange={handleChange}
        text={salarioFinal2019Label}
        type="number"
      />
      <Input
        name={ipc380Name}
        value={ipc380}
        errors={errors}
        handleChange={handleChange}
        text={ipc380Label}
        type="number"
      />
      <Input
        name={salario2020Name}
        value={salario2020}
        errors={errors}
        handleChange={handleChange}
        text={salario2020Label}
        type="number"
      />
      <Input
        name={salarioFinal2020Name}
        value={salarioFinal2020}
        errors={errors}
        handleChange={handleChange}
        text={salarioFinal2020Label}
        type="number"
      />
      <Input
        name={salario2021Name}
        value={salario2021}
        errors={errors}
        handleChange={handleChange}
        text={salario2021Label}
        type="number"
      />
      <Input
        name={salarioFinal2021Name}
        value={salarioFinal2021}
        errors={errors}
        handleChange={handleChange}
        text={salarioFinal2021Label}
        type="number"
      />
      <Input
        name={salario2022Name}
        value={salario2022}
        errors={errors}
        handleChange={handleChange}
        text={salario2022Label}
        type="number"
      />
      <Input
        name={salarioFinal2022Name}
        value={salarioFinal2022}
        errors={errors}
        handleChange={handleChange}
        text={salarioFinal2022Label}
        type="text"
      />
      <Input
        name={opecName}
        value={opec}
        errors={errors}
        handleChange={handleChange}
        text={opecLabel}
        type="number"
      />
      <Input
        name={observacionName}
        value={observacion}
        errors={errors}
        handleChange={handleChange}
        text={observacionLabel}
        type="text"
      />
    </div>
  );
};
