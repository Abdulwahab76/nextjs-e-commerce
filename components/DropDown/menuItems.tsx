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

    const closeDropdown = () => {
        dropdown && setDropdown(true);
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeDropdown}
        >
            {items.url && items.submenu ? (
                <>
                    <button
                        className={` !text-lg hover:!underline justify-between !w-[300px]  !font-normal  flex gap-1 ${items.title === 'Browse Category' && '!py-4 !px-5  !text-xl !text-white !bg-black  uppercase text-center justify-center'} `}
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title == 'Browse Category' && <Bars3BottomLeftIcon className="w-8 h-8" />}
                        {window.innerWidth < 960 && depthLevel === 0 ? (
                            items.title
                        ) : (
                            <Link href={items.url} className="text-lg p-0 ">{items.title}</Link>
                        )}

                        {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                            0 && window.innerWidth > 960 ? (
                            <ChevronRightIcon className="h-5 w-5 text-black" />
                        ) : (
                            <ChevronDownIcon className="h-5 w-5" />
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}

                    >
                        {items.title}
                        {depthLevel > 0 ? <ChevronRightIcon className="h-5 w-5 text-black" /> : <ChevronRightIcon className="h-5 w-5" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link href={items.url} className="hover:!text-black hover:!underline">{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;
