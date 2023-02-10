//Componentes
import { Search } from "../components/Search";

//React-Router
import { Link } from "react-router-dom";

//Iconos

import {
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsEye,
  BsPencilFill,
} from "react-icons/bs";

export const List = () => {
  return (
    <>
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
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                    1
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    1028357159
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    Jose Fernando Alvarez Trujillo
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="flex justify-center">
                      <BsCheckCircleFill className="h-5 w-5 text-green-500" />
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                        <Link to="/empleado">
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
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                    2
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    43369456
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    Aurora Garcia Tamayo
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="flex justify-center">
                      <BsCheckCircleFill className="h-5 w-5 text-green-500" />
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                        <BsEye className="h-5 w-5" />
                      </div>
                      <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                        <BsPencilFill className="h-5 w-5" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                    3
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    1028147963
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    Catalina Zapata Gil
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <span className="flex justify-center">
                      <BsFillXCircleFill className="h-5 w-5 text-red-500" />
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                        <BsEye className="h-5 w-5" />
                      </div>
                      <div className="w-4 mr-4 cursor-pointer transform hover:text-blue-700 hover:scale-125">
                        <BsPencilFill className="h-5 w-5" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  );
};
