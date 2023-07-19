"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import { menuItems } from "utils/menuItem";
import MenuItems from "@/components/DropDown/menuItems";

const Navbar = () => {
  const [isSearchBar, setIsSearchBar] = useState({
    isMobile: false,
    isSearchShow: false,
  });
  useEffect(() => {
    const handleResize = () => {
      setIsSearchBar((prevState) => ({
        ...prevState,
        isMobile: window.innerWidth <= 800 ? true : false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="upper_nav">
        <div>
          <p className="text-white text-right font-normal animate-marquee whitespace-nowrap">
            ENJOY FREE DELIVERY ON ORDERS ABOVE PKR 3000. PLACE YOUR ORDER NOW!
          </p>
        </div>
        <div className="social_icons">
          <div className="flex gap-3 pr-7">
            {/* faceBook  */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-bold "
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>

            {/* Instagram  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  font-bold "
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>

            {/* Whatsapp */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  font-bold "
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <p className="font-normal border border-gray-400/50 px-4 border-t-0 border-b-0">
            <a href=""> CONTACT US</a>
          </p>
          <p className="font-normal border border-gray-400/50   px-4 border-t-0 border-l-0 border-b-0 ">
            <a href="">FAQS</a>
          </p>
        </div>
      </div>
      <nav className={`navbar   relative z-10`}>
        <div className="flex items-center w-8/12   justify-between gap-6">
          <Bars3Icon className="h-10 w-10 md:hidden  flex font-extrabold" />
          <div>
            <Image
              src="https://www.homazing.pk/images/logo.png"
              objectFit="contain"
              height={60}
              width={300}
              alt="Logo"
            />
          </div>
          <div className=" flex right-0 left-0 top-24 flex-1  absolute md:static md:top-0  w-full bg-white ">
            <div
              className={`${(isSearchBar.isMobile && isSearchBar.isSearchShow) ||
                !isSearchBar.isMobile
                ? "flex"
                : "hidden"
                } w-11/12 my-3  mx-auto   items-center border-[3px] border-[#81818133] rounded-lg p-2  `}
            >
              <input
                type="text"
                placeholder="Search for products , categories..."
                className="w-full h-[33px] outline-none "
              />
              <div className="flex gap-10">
                {isSearchBar && (
                  <XMarkIcon
                    onClick={() =>
                      setIsSearchBar((prev) => ({
                        ...prev,
                        isSearchShow: false,
                      }))
                    }
                    className="md:hidden cursor-pointer text-black  flex h-6 w-6    font-extrabold"
                  />
                )}
                <MagnifyingGlassIcon className="h-6 w-6 ml-auto  text-gray-500 font-bold" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <span className="md:flex gap-1 items-center  hidden  text-xl">
              <p className="">LOGIN/REGISTER</p>
              <ChevronDownIcon className="h-4 w-4   font-bold" />
            </span>
            <MagnifyingGlassIcon
              className="h-10 w-10 md:hidden flex   font-bold"
              onClick={() =>
                setIsSearchBar((prev) => ({ ...prev, isSearchShow: true }))
              }
            />

            <ShoppingBagIcon className="md:h-8 md:w-8 h-10 w-10   font-bold" />
          </div>
        </div>
        {/* <Logo /> */}
      </nav>
      <div className="lower_nav">
        <div className="flex gap-10">
          {/* <div className="dropdown-menu dropdown">
            <p className="text-2xl text-center flex gap-3 dropbtn">
              <Bars3BottomLeftIcon className="w-8 h-8" />
              <a href="" className="hover:underline">
                Browse Category
              </a>
            </p>
            <ChevronDownIcon className="w-5 h-5 mr-auto " />

            <div className="dropdown-content" >
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
          <ul>
            <li>
              <Link href="/"> Home</Link>
            </li>

            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
            <Link href="/reviews">
              <li>Reviews</li>
            </Link>
            <Link href="/contact">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className="flex">
          <p>
            <span className="font-bold ">CALL US</span>(+92-300-1175253)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
