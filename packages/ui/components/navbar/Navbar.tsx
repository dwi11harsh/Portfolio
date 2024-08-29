"use client";

import { Link as ScrollLink } from "react-scroll";
import { NavbarOptions } from "../../../store";

export const Navbar = () => {
  return (
    <nav className="flex w-full my-8 pr-4 text-slate-700">
      <div className="ml-auto">
        {NavbarOptions.map((option) => (
          <ScrollLink
            key={option.to}
            className="mx-3 hover:text-slate-500"
            to={option.to}
            smooth={true}
            duration={500}
            offset={option.offset}
          >
            {option.name}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
};
