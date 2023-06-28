import { FiMenu, FiSearch } from "react-icons/fi";
import Link from "next/link";

const menuList = [
  // { text: "Inicio", url: "/" },
  { text: "Ingeniería", url: "/" },
  { text: "Catálogo", url: "/" },
];

export default function NavbarWithCTAButton() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-2xl flex items-center justify-between mx-auto md:px-2 2xl:px-0 p-2">
          <Link href="/">
            <img
              src="/img/logo/Logo-Distribuidora-SIIM.svg"
              className="h-12 md:h-16"
              alt="SIIM Distribuidora Logo"
            />
          </Link>

          {/* LINKS */}
          <div
            className="items-center justify-end hidden w-full md:flex "
            id="navbar-searchDE"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              {menuList.map((item, i) => (
                <li key={i}>
                  <Link href={item.url} className="hover:text-blue-600 ">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex">
            {/* SEARCH BAR */}
            <div className="relative hidden md:flex rounded-md border-[1px] border-gray-300 focus:border-blue-800 ">
              <div className="flex items-center pointer-events-none p-1 px-2 ">
                <FiSearch className="text-blue-800" />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="border-none focus:all-unset focus:ring-0 bg-transparent h-fit p-1 pl-0 "
                placeholder="Search..."
              />
            </div>

            {/* MOBILE SEARCH BTN */}
            <button
              type="button"
              placeholder="Buscar"
              className="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1 "
            >
              <FiSearch />
              <span className="sr-only">Search</span>
            </button>

            {/* MOBILE MENU BTN */}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open menu</span>
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
