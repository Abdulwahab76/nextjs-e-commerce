import React, { useState } from 'react';

const MenuItem = ({ item }: any) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    return (
        <li
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a
                href={item.url}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                {item.title}
            </a>

            {item.submenu && isSubMenuOpen && <SubMenu subMenuItems={item.submenu} />}
        </li>
    );
};

const SubMenu = ({ subMenuItems }: any) => {
    return (
        <ul className="absolute left-full top-0 mt-2 space-y-2 bg-white shadow-lg">
            {subMenuItems.map((subItem: any) => (
                <li key={subItem.title}>
                    <a
                        href={subItem.url}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {subItem.title}
                    </a>

                    {subItem.submenu && <SubMenu subMenuItems={subItem.submenu} />}
                </li>
            ))}
        </ul>
    );
};



const MultiLevelDropdownMenu = ({ menuItems }: any) => {
    return (
        <ul className="flex space-x-4">

            {menuItems.map((item: any) => (
                <MenuItem key={item.title} item={item} />
            ))}
        </ul>
    );
};

export default MultiLevelDropdownMenu;
