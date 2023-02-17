import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Academy = () => {
  const { pregradoLabel, especializacionLabel, maestriaLabel, doctoradoLabel } =
    labelText;
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={pregradoLabel} type="text" />
      <Input text={especializacionLabel} type="text" />
      <Input text={maestriaLabel} type="text" />
      <Input text={doctoradoLabel} type="text" />
    </div>
  );
};
