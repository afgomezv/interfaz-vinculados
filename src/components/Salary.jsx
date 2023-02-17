import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Salary = () => {
  const {
    salario2017Label,
    salario2018Label,
    segundoIncrementoLabel,
    salario2018FinalLabel,
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

  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={salario2017Label} type="number" />
      <Input text={salario2018Label} type="number" />
      <Input text={segundoIncrementoLabel} type="number" />
      <Input text={salario2018FinalLabel} type="number" />
      <Input text={ipc318Label} type="number" />
      <Input text={salario2019Label} type="number" />
      <Input text={salarioFinal2019Label} type="number" />
      <Input text={ipc380Label} type="number" />
      <Input text={salario2020Label} type="number" />
      <Input text={salarioFinal2020Label} type="number" />
      <Input text={salario2021Label} type="number" />
      <Input text={salarioFinal2021Label} type="number" />
      <Input text={salario2022Label} type="number" />
      <Input text={salarioFinal2022Label} />
      <Input text={opecLabel} type="text" />
      <Input text={observacionLabel} type="text" />
    </div>
  );
};
