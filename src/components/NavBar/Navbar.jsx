import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { styles } from "../../styles.js";
import { navLinks } from "../../data/index.js";
import { logo, menu, close } from "../../assets/index.js";
import { sendGAEvent } from "../../utils/gaEvents";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        closeRef.current !== event.target
      ) {
        setToggle(false);
      }
    };

    const handleScroll = () => {
      setToggle(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navTitle) => {
    setActive(navTitle);
    sendGAEvent("navigation_clicked", { action: `Clicked on ${navTitle}` });
  };

  return (
    <nav
      className={`${styles.paddingX} border-b border-gray-900 w-full flex items-center fixed top-0 z-20  bg-opacity-60 backdrop-blur-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-2 md:px-4 lg:px-6 xl:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-[120px] h-[100px]" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "font-bold" : "font-medium"
              } hover:font-bold text-[18px] font-medium cursor-pointer`}
              onClick={() => handleNavClick(nav.title)}
            >
              {nav.id === "resume" ? (
                <Link to={`/${nav.id}`} onClick={() => window.scrollTo(0, 0)}>
                  {nav.title}
                </Link>
              ) : (
                <HashLink smooth to={`/#${nav.id}`}>
                  {nav.title}
                </HashLink>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex items-center flex-1 justify-end pr-5">
          <img
            ref={closeRef}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[h-28px] cursor-pointer object-contain"
            onClick={() => {
              setToggle(!toggle);
              sendGAEvent("menu_toggled", {
                action: `Menu ${toggle ? "Closed" : "Opened"}`,
              });
            }}
          />
          <div
            ref={menuRef}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black backdrop-blur-md bg-opacity-80 absolute top-20 right-0 mx-4 mt-6 min-w-[140px] z-10 rounded-xl border-1 border-gray-900 border`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "font-bold" : "text-white"
                  } hover:font-bold font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavClick(nav.title);
                  }}
                >
                  {nav.id === "resume" ? (
                    <Link
                      to={`/${nav.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {nav.title}
                    </Link>
                  ) : (
                    <HashLink smooth to={`/#${nav.id}`}>
                      {nav.title}
                    </HashLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
