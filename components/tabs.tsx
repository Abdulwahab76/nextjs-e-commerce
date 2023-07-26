'use Client'
import Link from 'next/link';
import { useState } from 'react';
import { menuItems } from 'utils/menuItem';
import { NavItems, NavItemProp } from 'utils/navItem';

const tabsData = [
    {
        label: 'Categories',

        items: menuItems
    },
    {
        label: 'Menu',

        items: NavItems
    },

];

export default function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);


    return (
        <div>
            <div className="flex  border-b flex1 " >
                {tabsData.map((tab, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`py-2 border-b-4 transition-colors font-medium text-xl text-gray-600 duration-300 h-16  uppercase bg-gray-50 flex-1 ${idx === activeTabIndex
                                ? 'border-primary-orange !text-black !bg-gray-200'
                                : 'border-transparent hover:border-gray-200'
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
                        {tabsData[activeTabIndex].items.map((item: NavItemProp) => (

                            <li className="rounded-sm text-lg font-medium border-b p-3">
                                <Link
                                    href={`${item.url}`}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className='uppercase'>{item.title}</span>
                                </Link>
                            </li>
                        ))}



                    </ul>
                </div>
            </div>
        </div>
    );
}
