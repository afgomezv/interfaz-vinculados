//React
import { useState, useEffect } from "react";

//Componentes
import { Search } from "../components/Search";
import { Header } from "../components/Header";

//React-Router
import { Link, useNavigate } from "react-router-dom";

//Iconos
import {
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsEye,
  BsPencilFill,
} from "react-icons/bs";

export const List = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const loadEmployees = async () => {
    const response = await fetch("http://localhost:4000/employees");
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <Header />
      <Search />
      <div className="max-w-5xl mx-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <section className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    CEDULA
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                  >
                    NOMBRE COMPLETO
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    ACTIVO
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {employees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {employee.cedula}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      {employee.funcionario}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span className="flex justify-center">
                        <BsCheckCircleFill className="h-5 w-5 text-green-500" />
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                          <Link
                            //onClick={() => navigate(`employees/${employee.id}`)}
                            to="/empleado"
                          >
                            <BsEye className="h-5 w-5" />
                          </Link>
                        </div>
                        <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                          <Link to="#">
                            <BsPencilFill className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};
