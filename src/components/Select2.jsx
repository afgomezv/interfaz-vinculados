import React from "react";

export const Select2 = ({ text, name, value, errors, handleChange }) => {
  return (
    <div className="w-full mb-3">
      <label className="text-gray-700 font-semibold">{text}</label>
      <select
        name={name}
        value={value}
        errors={errors}
        onChange={handleChange}
        className="w-full block px-3 py-2 font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option value=""></option>
        <option value="soltero">Soltero</option>
        <option value="casado">Casado</option>
        <option value="union libre">Union Libre</option>
        <option value="separado">Separado</option>
      </select>
    </div>
  );
};
