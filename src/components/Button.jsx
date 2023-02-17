import { RiSendPlane2Fill } from "react-icons/ri";

export const Button = () => {
  return (
    <div className="flex justify-center items-center mb-32">
      <button
        type="submit"
        className="flex justify-around text-xl w-36 py-3 px-5 bg-transparent text-indigo-500 font-semibold border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >
        <div>Crear</div>
        <div className="mt-1">{<RiSendPlane2Fill />}</div>
      </button>
    </div>
  );
};
