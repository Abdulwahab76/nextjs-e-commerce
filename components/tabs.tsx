import Link from 'next/link';
import { useState } from 'react';
import { NavItems, NavItemProp } from 'utils/navItem';

const tabsData = [
    {
        label: 'Categories',
        content:
            'Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.',
        items: NavItems
    },
    {
        label: 'Menu',
        content:
            'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
        items: NavItems
    },

];

export default function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div>
            <div className="flex  border-b flex1">
                {/* Loop through tab data and render button for each. */}
                {tabsData.map((tab, idx) => {
                    return (
                        <button
                            key={idx}
                            className={`py-2 border-b-4 transition-colors font-medium text-xl text-gray-600 duration-300 h-16  uppercase bg-gray-50 flex-1 ${idx === activeTabIndex
                                ? 'border-primary-orange !text-black bg-gray-100'
                                : 'border-transparent hover:border-gray-200'
                                }`}
                            // Change the active tab on click.
                            onClick={() => setActiveTabIndex(idx)}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
            {/* Show active tab content. */}
            <div className="py-4">
                {/* <p>{tabsData[activeTabIndex].content}</p> */}
                <div>

                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        {tabsData[activeTabIndex].items.map((item: NavItemProp) => (

                            <li className="rounded-sm">
                                <Link
                                    href={`${item.url}`}
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        ))}

                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >

                                <span>Inbox</span>
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >

                                <span>Orders</span>
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >

                                <span>Settings</span>
                            </a>
                        </li>
                        <li className="rounded-sm">
                            <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >

                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
