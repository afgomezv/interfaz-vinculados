import React from "react";

export const Select2 = ({ text }) => {
  return (
    <div className="w-full mb-3">
      <label className="text-gray-700 font-semibold">{text}</label>
      <select className="w-full block px-3 py-2 font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        <option value=""></option>
        <option value="femenino">Soltero</option>
        <option value="masculino">Casado</option>
        <option value="masculino">Union Libre</option>
        <option value="masculino">Separado</option>
      </select>
    </div>
  );
};
