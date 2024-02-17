import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="flex w-full my-8 pr-4 text-slate-700">
        <div className="ml-auto">
          <Link className="mx-3 hover:text-slate-500" href="#">
            Experience
          </Link>
          <Link className="mx-3 hover:text-slate-500" href="#">
            Projects
          </Link>
          <Link className="mx-3 hover:text-slate-500" href="#">
            Let's Discuss
          </Link>
          <Link className="mx-3 hover:text-slate-500" href="#">
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
};
