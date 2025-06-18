"use client";

import React, { useEffect, useState, type FormEvent } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Searchbar: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("name") || "";
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (keyword !== "") {
      router.push(`/search?name=${keyword}`);
    } else {
      router.push("/search");
    }
  };

  useEffect(() => {
    const currentNameParam = searchParams.get("name");
    if (currentNameParam === null || currentNameParam === "") {
      setKeyword("");
    } else if (currentNameParam !== keyword) {
      setKeyword(currentNameParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div className="h-[48px] w-[361px] bg-white rounded-full flex items-center justify-between px-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Pokemon"
        className="w-full mr-2 text-neutral-500"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        value={keyword}
      />
      <div className="flex gap-2 items-center justify-center">
        {keyword !== "" && (
          <button
            onClick={() => setKeyword("")}
            className="w-[20px] h-[20px] rounded-full bg-neutral-400 flex justify-center items-center cursor-pointer"
          >
            <p className="text-[10px] text-white">x</p>
          </button>
        )}
        <button
          onClick={handleSearch}
          className="w-[28px] h-[28px] rounded-full bg-secondary-300 flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/icons/search.png"
            alt="search-icon"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
