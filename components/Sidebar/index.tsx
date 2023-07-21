import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Tabs from "../tabs";


const Sidebar: React.FC = () => {
    const [tabSelect, setTabSelect] = useState('');
    return (
        <div  >
            <div className="h-screen w-screen bg-black/10 absolute z-20"></div>

            <div className="flex absolute z-20">

                <div className="flex flex-col h-screen  bg-white shadow  w-96">
                    <div className="space-y-3">
                        <div className=" flex p-4 pt-6   bg-white ">
                            <div
                                className=' w-full    flex  items-center   rounded-lg  '
                            >
                                <input
                                    type="text"
                                    placeholder="Search for products , categories..."
                                    className="w-full text-black  outline-none "
                                />
                                <div className="flex gap-10">

                                    <XMarkIcon

                                        className="md:hidden cursor-pointer text-black  flex h-6 w-6    font-extrabold"
                                    />

                                    <MagnifyingGlassIcon className="h-6 w-6 ml-auto   text-gray-500 font-extrabold" />
                                </div>
                            </div>
                        </div>
                        {/* tabs */}
                        <Tabs />
                        {/* tabs */}

                    </div>
                </div>

            </div>
        </div >
    );
}
export default Sidebar