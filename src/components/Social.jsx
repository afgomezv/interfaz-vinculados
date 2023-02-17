import { Input } from "./Input";
import { labelText } from "../utils/labelText";

export const Social = () => {
  const { epsLabel, pensionLabel, cesantiasLabel } = labelText;
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 border rounded-xl shadow-lg p-12 bg-indigo-50 m-12">
      <Input text={epsLabel} type="text" />
      <Input text={pensionLabel} type="text" />
      <Input text={cesantiasLabel} type="text" />
    </div>
  );
};
