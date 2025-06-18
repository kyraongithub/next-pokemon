"use client";

import { useEffect, useState } from "react";
import Searchbar from "../container/Searchbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {pathname === "/" ? (
        <div
          className={`flex items-center justify-center gap-2 p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow" : "bg-transparent"
          }`}
        >
          <img src="./logo-pokemon.svg" alt="" />
          <div className="text-[20px] md:text-[28px] text-neutral-900 font-bold">
            Pokedex
          </div>
        </div>
      ) : (
        <div
          className={
            "flex items-center justify-between gap-2 py-4 px-4 md:px-[120px] fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow"
          }
        >
          <Link href="/">
            <div className="flex items-center gap-2">
              <img src="./logo-pokemon.svg" alt="" />
              <p className="text-[28px] hidden md:block text-neutral-900 font-bold">
                Pokedex
              </p>
            </div>
          </Link>
          <Searchbar />
        </div>
      )}
    </>
  );
};
export default Navbar;
