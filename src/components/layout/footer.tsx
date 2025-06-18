import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-neutral-900 md:flex items-center justify-between h-[120px] px-4 md:px-[120px]">
      <div className="flex items-center gap-2">
        <img src="./logo-pokemon.svg" alt="" />
        <p className="text-[28px] text-neutral-900 font-bold">Pokedex</p>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        &copy; 2025 Pokedex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
