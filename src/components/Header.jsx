import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="w-full z-30 top-10 py-1 bg-gray  l shadow-lg border-b border-gray-400 mt-2">
      <div className="w-full flex items-end mt-0 px-6 py-2">
        <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4">
          <div className="auth flex items-center w-full md:w-full">
            <Link
              to="/empleado"
              className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
            >
              Nuevo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
