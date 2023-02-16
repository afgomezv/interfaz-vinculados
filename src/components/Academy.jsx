import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Academy = () => {
  const { pregrado, especializacion, maestria, doctorado } = labelText;
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={pregrado} type="text" />
      <Input text={especializacion} type="text" />
      <Input text={maestria} type="text" />
      <Input text={doctorado} type="text" />
    </div>
  );
};
