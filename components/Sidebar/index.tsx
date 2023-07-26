import { Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import Tabs from "../tabs";
import useOutsideClick from "./../../hooks/outsideClick";


const Sidebar: React.FC<{
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    isOpened: boolean;
}> = ({ setIsOpened, isOpened }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    // Handle outside click to close the sidebar
    useOutsideClick(wrapperRef, () => {
        setShowSidebar(false);
    });

    useEffect(() => {
        if (isOpened) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, [isOpened]);
    console.log(isOpened, 'isopen===');


    return (
        <div className={`absolute`}>
            {/* Overlay */}
            {showSidebar && (
                <div
                    className={`h-screen w-screen absolute z-20 bg-black/10`}
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}

            <div
                ref={wrapperRef}
                className={`top-0 -left-0 w-7/12 text-black fixed h-full z-40 ease-in-out duration-300 ${showSidebar && isOpened ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-screen bg-white shadow w-96">
                    <div className="space-y-3">
                        <div className="flex p-4 pt-6 bg-white">
                            <div className="w-full flex items-center rounded-lg">
                                <input
                                    type="text"
                                    placeholder="Search for products, categories..."
                                    className="w-full text-black outline-none"
                                />
                                <div className="flex gap-10">
                                    <XMarkIcon
                                        className="md:hidden cursor-pointer text-black flex h-6 w-6 font-extrabold"
                                    // onClick={() => setIsOpened(false)}
                                    />

                                    <MagnifyingGlassIcon className="h-6 w-6 ml-auto text-gray-500 font-extrabold" />
                                </div>
                            </div>
                        </div>

                        {/* tabs */}
                        <Tabs />
                        {/* tabs */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;