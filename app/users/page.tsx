import React from 'react';

const UsersPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="flex h-screen flex-col">
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
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">MediMaintain</h1>
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
                                <img alt="User avatar" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_5b9qOV4cK1JYWgzCZeFJbJdj1yELw8ghh5xsrw7iEK84Z1O2QBL76Dh9KrZICL16Max61qbHkkLUkfW6u0UGG5vtfgz_nQ3bnUwK-DS5YKvTewJZJzPakcHJbchH9UMmCc7RQ8eKkPcX7GJXLlXqXhKgx_QRyHbzDghHUnRhk0kwEiKSf7KGg9ej7QPm6R9zYDqP8mBK5ER5s_-ZLSZ37344Zp_Jzme6IQzPfpDf52tJRpZT2p8r__K9Tp9FR8PXmIccmcWiiXRH" />
                                <div className="hidden text-left md:block">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Emily Carter</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hospital Users</h2>
                            <div className="flex items-center gap-2">
                                <button className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                                    <span className="material-symbols-outlined mr-2">add</span>
                                    Add User
                                </button>
                            </div>
                        </div>
                        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-background-dark">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="relative">
                                    <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input className="w-full rounded border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400" placeholder="Search users..." type="text" />
                                </div>
                                <button className="inline-flex items-center justify-center gap-2 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                    <span className="material-symbols-outlined text-base">filter_list</span>
                                    Filter
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                    <span className="material-symbols-outlined text-base">download</span>
                                    Export
                                </button>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-background-dark">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">User ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Designation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Mobile No.</th>
                                        <th className="relative px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-background-dark">
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">12345</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Ethan Harper</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ethan.harper@example.com</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Biomedical Engineer</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">555-123-4567</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="text-primary hover:text-primary/80"><span className="material-symbols-outlined">edit</span></button>
                                                <button className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">67890</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Olivia Bennett</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">olivia.bennett@example.com</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Biomedical Engineer</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">555-987-6543</td>
                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="text-primary hover:text-primary/80"><span className="material-symbols-outlined">edit</span></button>
                                                <button className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Showing <span className="font-semibold">2</span> of <span className="font-semibold">2</span> users</p>
                            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded shadow-sm">
                                <a className="relative inline-flex items-center rounded-l border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" href="#">
                                    <span className="sr-only">Previous</span>
                                    <span className="material-symbols-outlined h-5 w-5">chevron_left</span>
                                </a>
                                <a aria-current="page" className="relative z-10 inline-flex items-center border border-primary bg-primary/20 px-4 py-2 text-sm font-medium text-primary focus:z-20" href="#">1</a>
                                <a className="relative inline-flex items-center rounded-r border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600" href="#">
                                    <span className="sr-only">Next</span>
                                    <span className="material-symbols-outlined h-5 w-5">chevron_right</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UsersPage;
