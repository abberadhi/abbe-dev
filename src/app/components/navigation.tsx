"use client";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed flex items-center flex-wrap ${
        scrolling ? "bg-black" : "bg-transparent"
      } p-6 gap-x-12 transition-colors duration-300`}
    >
      <span className="font-semibold text-xl tracking-tight">
        &lt; Abbe /&gt;
      </span>
      <div className="">
        <ol className="flex flex-row gap-4">
          <li>Home</li>
          <li>Articles</li>
        </ol>
      </div>
    </nav>
  );
};
