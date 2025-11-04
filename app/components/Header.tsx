import React from 'react';

interface HeaderProps {
    title: string;
    userName: string;
    userRole: string;
    avatarUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName, userRole, avatarUrl }) => {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark px-6">
            <div className="flex items-center gap-4">
                <div className="text-primary">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_6_319_2)">
                            <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_319_2"><rect fill="white" height="48" width="48"></rect></clipPath>
                        </defs>
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h1>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
                <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Dashboard</a>
                <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Hospitals</a>
                <a className="text-sm font-bold text-primary" href="#">Users</a>
                <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Equipment</a>
                <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Work Orders</a>
                <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Reports</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary">
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <div className="relative">
                    <button className="flex items-center gap-2">
                        <img alt="User avatar" className="h-10 w-10 rounded-full" src={avatarUrl} />
                        <div className="hidden text-left md:block">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{userName}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{userRole}</p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
