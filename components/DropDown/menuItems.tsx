import { useState, useEffect, useRef } from "react";
import Dropdown from "./dropDown";
import Link from "next/link";
import { Bars3BottomLeftIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const MenuItems = ({ items, depthLevel }: { items: any; depthLevel: any }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref: any = useRef();

    useEffect(() => {
        const handler = (event: any) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(true);
    };



    return (
        <>

            <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {items.mainButton && (
                    <p onClick={() => setDropdown((prev) => !prev)} className="flex justify-between !w-[300px] !py-4 !px-5 !text-xl !text-white !bg-black uppercase text-center">
                        {items.mainButton}
                        <Bars3BottomLeftIcon className="w-8 h-8" />
                    </p>
                )}

                {items.url && items.submenu ? (
                    <>
                        <button type="button" aria-haspopup="menu" className="flex justify-between" aria-expanded={dropdown ? 'true' : 'false'}>
                            {items.title === 'DropDown' ? items.title : <Link href={items.url} className="text-lg p-0">{items.title}</Link>}
                            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
                                <ChevronRightIcon className="h-5 w-5 text-black" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                            )}
                        </button>
                        <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>
                ) : items.submenu ? (
                    <>

                        {!items.mainButton && <button className="flex justify-around "> {items.title} {!items.mainButton && <ChevronRightIcon className="h-5 w-5  " />} </button>}

                        <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                    </>
                ) : (
                    <Link href={items.url} className="hover:!text-black hover:!underline">
                        {items.title}
                    </Link>
                )}
            </li>
        </>
    );
};

export default MenuItems;
