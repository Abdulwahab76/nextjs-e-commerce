"use Client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "utils/menuItem";
import { NavItems, NavItemProp } from "utils/navItem";
import "../app/styles/globals.css";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";
const tabsData = [
    {
        label: "Categories",
        items: menuItems,
    },
    {
        label: "Menu",
        items: NavItems,
    },
];

export default function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [subMenu, setSubMenu] = useState(menuItems[0].submenu);
    const [dropwDown, setDropwDown] = useState(false);
    const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(-1);

    const handleDropdownClick = (index: any) => {
        setActiveSubmenuIndex(activeSubmenuIndex === index ? -1 : index);
    };



    const toggleAccordion = (index: any) => {
        if (activeSubmenuIndex === index) {
            setActiveSubmenuIndex(null);
        } else {
            setActiveSubmenuIndex(index);
        }
    };


    return (
        <div>
            <div className="flex  border-b flex1 ">
                {tabsData.map((tab, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`py-2 border-b-4 transition-colors font-medium text-xl text-gray-600 duration-300 h-16  uppercase bg-gray-50 flex-1 ${idx === activeTabIndex
                                ? "border-primary-orange !text-black !bg-gray-200"
                                : "border-transparent hover:border-gray-200"
                                }`}
                            onClick={() => setActiveTabIndex(idx)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            {/* Show active tab content. */}
            <div className=" ">
                <div className="flex-1">
                    <ul className="text-sm">
                        {activeTabIndex == 1
                            ? tabsData[activeTabIndex].items.map((item: any) => (
                                <>
                                    <li className="rounded-sm text-lg font-medium border-b p-3">
                                        <Link
                                            href={`${item.url}`}
                                            className="flex items-center p-2 space-x-3 rounded-md"
                                        >
                                            <span className="uppercase">{item.title}</span>
                                        </Link>
                                    </li>
                                </>
                            ))
                            : tabsData[activeTabIndex].items.map(({ submenu }: any, index) =>
                                submenu.map((subItem: any, subIndex: any) => (
                                    <>
                                        <div key={index}>
                                            <p
                                                onMouseEnter={() => setActiveSubmenuIndex(index)}
                                                onMouseLeave={() => setActiveSubmenuIndex(-1)}
                                                onClick={() => setDropwDown(!dropwDown)}
                                                className="rounded-sm text-lg font-medium border-b p-3 flex justify-between"
                                            >
                                                {subItem.title}
                                                {subItem.submenu && (
                                                    <span className="dropdown-icon">
                                                        {activeSubmenuIndex == 0 ? (
                                                            <ChevronDownIcon className="w-5 h-5" />
                                                        ) : (
                                                            <ChevronRightIcon className="w-5 h-5" />
                                                        )}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                        {dropwDown && (
                                            <div onMouseEnter={() => setActiveSubmenuIndex(index)}
                                                className={`accordion ${activeSubmenuIndex === index ? "accordion-open" : ""
                                                    }`}
                                            >
                                                <div
                                                    className={`accordion-content ${activeSubmenuIndex === index
                                                        ? "accordion-content-open"
                                                        : ""
                                                        }`}
                                                >
                                                    <div className="accordion-inner">
                                                        <div key={subIndex}>
                                                            {subItem.submenu && subItem.submenu.length > 0 && (
                                                                <div className="bg-gray-50">
                                                                    {subItem?.submenu.map((item: any, itemIndex: any) => (
                                                                        <p
                                                                            key={itemIndex}
                                                                            className="rounded-sm text-lg font-medium border-b p-3"
                                                                        >
                                                                            {item.title}
                                                                        </p>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ))
                            )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
