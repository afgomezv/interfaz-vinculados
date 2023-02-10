import { Menu } from "../components/Menu";
import { Data } from "./data";

export const Employee = () => {
  return (
    <>
      <form action="" className="w-full flex items-center">
        <section className="inset-y-16 right-16 w-96">
          <Data />
        </section>
      </form>
      <Menu />
    </>
  );
};
