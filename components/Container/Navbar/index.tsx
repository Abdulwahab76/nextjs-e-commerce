"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Whatsapp, Instagram } from "icons/index";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { menuItems } from "utils/menuItem";
import MenuItems from "@/components/DropDown/menuItems";
import Sidebar from "@/components/Sidebar";

const Navbar = () => {
  const [isSearchBar, setIsSearchBar] = useState({
    isMobile: false,
    isSearchShow: false,
  });
  useEffect(() => {
    const handleResize = () => {
      setIsSearchBar((prevState) => ({
        ...prevState,
        isMobile: window.innerWidth <= 1000 ? true : false,
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col relative">
      {/* {isSearchBar.isMobile && } */}
      <Sidebar />
      <div className="upper_nav">
        <div>
          <p className="text-white text-right font-normal animate-marquee whitespace-nowrap">
            ENJOY FREE DELIVERY ON ORDERS ABOVE PKR 3000. PLACE YOUR ORDER NOW!
          </p>
        </div>
        <div className="social_icons">
          <div className="flex gap-3 pr-7">
            {/* faceBook  */}
            <Facebook />

            {/* Instagram  */}

            <Instagram />
            {/* Whatsapp */}
            <Whatsapp />

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
      <div className="lower_nav !hidden md:!flex ">
        <div className="flex gap-10">
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
