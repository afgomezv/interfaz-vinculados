import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Salary = () => {
  const {
    salario2017,
    salario2018,
    segundoIncremento,
    salario2018Final,
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
  } = labelText;

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={salario2017} type="number" />
      <Input text={salario2018} type="number" />
      <Input text={segundoIncremento} type="number" />
      <Input text={salario2018Final} type="number" />
      <Input text={ipc318} type="number" />
      <Input text={salario2019} type="number" />
      <Input text={salarioFinal2019} type="number" />
      <Input text={ipc380} type="number" />
      <Input text={salario2020} type="number" />
      <Input text={salarioFinal2020} type="number" />
      <Input text={salario2021} type="number" />
      <Input text={salarioFinal2021} type="number" />
      <Input text={salario2022} type="number" />
      <Input text={salarioFinal2022} />
      <Input text={opec} type="text" />
      <Input text={observacion} type="text" />
    </div>
  );
};
