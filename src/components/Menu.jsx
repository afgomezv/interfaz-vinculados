//React-Router
import { Link } from "react-router-dom";

// Iconos
import { FaUserAlt, FaHome } from "react-icons/fa";
import { MdOutlineAttachMoney, MdHealthAndSafety } from "react-icons/md";
import { TbBuildingFactory2 } from "react-icons/tb";
import { GiDiploma } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";

export const Menu = () => {
  return (
    <div className="bg-gray-50">
      <nav
        className="flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 left-12
        min-h-[auto] min-w-[64px] flex-col rounded-lg border"
      >
        <Link
          to="/"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <FaHome className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Lista</small>
        </Link>
        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <FaUserAlt className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Datos</small>
        </Link>

        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <TbBuildingFactory2 className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Inder</small>
        </Link>
        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <MdOutlineAttachMoney className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Salario</small>
        </Link>
        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <GiDiploma className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Academico</small>
        </Link>
        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <MdHealthAndSafety className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Seguridad</small>
        </Link>
        <Link
          htmlFor="#profile"
          className="flex cursor-pointer aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-gray-500 hover:text-blue-700"
        >
          <BiPhoneCall className="w-6 h-6 shrink-0" />
          <small className="text-center text-xs font-medium">Contacto</small>
        </Link>
      </nav>
    </div>
  );
};
