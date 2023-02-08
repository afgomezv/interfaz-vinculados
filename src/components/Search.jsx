import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="my-8 max-w-xl mx-auto">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <BsSearch />
          </div>
          <input
            type="search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
