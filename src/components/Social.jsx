import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Social = () => {
  const { eps, pension, cesantias } = labelText;
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={eps} type="text" />
      <Input text={pension} type="text" />
      <Input text={cesantias} type="text" />
    </div>
  );
};
