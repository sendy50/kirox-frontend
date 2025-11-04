import React from 'react';

const HospitalManagementPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <div className="flex h-screen flex-col">
                <header className="bg-white dark:bg-[#18262E] shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl">local_hospital</span>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">MediTrack</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
                                <a className="text-primary font-semibold" href="#">Hospitals</a>
                                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Biomedical Engineers</a>
                                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Reports</a>
                                <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Settings</a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwN8njbjEmWOdxGTjx9bp9Ney8YKkYLKY3tkhNlV2q8EnOcA29VM84WGZcUceKTiQvTGSSlK7k7E_VNzOxszOegwe8rf5SL6nECGpecrSDar-KtWf5P6FaheiHThW0AkSHxnXkQtYrhVlSxmAaoG_nefnFmHRj30NqVdJMCJi3sDakijkUBFXXIh3DRkXLBN9y0us-_VGUg0eINVBey4R_FMLyMjPNZEPk5Kr3fmuR8C_Ebqh1fNnAtJ4NisdY27oKnxuMWyD4Wtkc")' }}></div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow p-4 sm:p-6 lg:p-8">
                    <div className="mx-auto max-w-screen-xl">
                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hospital Management</h2>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 rounded-lg bg-primary/20 dark:bg-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/30 dark:hover:bg-primary/40">
                                    <span className="material-symbols-outlined">download</span>
                                    Export
                                </button>
                                <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90">
                                    <span className="material-symbols-outlined">add</span>
                                    Add Hospital
                                </button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#18262E] rounded-lg shadow-sm">
                            <div className="p-4 flex flex-col md:flex-row gap-4 justify-between">
                                <div className="relative flex-grow">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">search</span>
                                    <input className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search hospitals by name, address, or contact" type="text" />
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <span>Status</span>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                    <button className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <span>Subscription</span>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                                    <thead className="bg-gray-50 dark:bg-gray-800/50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Hospital Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Address</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Contact</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Subscription</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Status</th>
                                            <th className="relative px-6 py-3" scope="col"><span className="sr-only">Actions</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#18262E]">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/20">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">City General Hospital</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">123 Medical Plaza, Anytown, CA 91234</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>info@citygeneral.com</div>
                                                <div>(555) 123-4567</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>2023-01-15 to</div>
                                                <div>2024-01-14</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">Active</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/20">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">County Medical Center</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">456 Health Ave, Anytown, CA 91234</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>support@countymedical.com</div>
                                                <div>(555) 987-6543</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>2023-03-20 to</div>
                                                <div>2024-03-19</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">Active</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/20">
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">Regional Trauma Center</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">789 Emergency Rd, Anytown, CA 91234</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>contact@regionaltrauma.com</div>
                                                <div>(555) 456-7890</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                                                <div>2023-05-10 to</div>
                                                <div>2024-05-09</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/50 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:text-red-300">Inactive</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                                                    <button className="p-1 text-gray-400 hover:text-red-500 dark:hover:text-red-400"><span className="material-symbols-outlined">delete</span></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
                                </p>
                                <div className="flex items-center gap-1">
                                    <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18262E] text-gray-900 dark:text-white rtl:rotate-180 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
                                        <span className="sr-only">Previous Page</span>
                                        <span className="material-symbols-outlined text-base">chevron_left</span>
                                    </a>
                                    <a className="h-8 w-8 items-center justify-center rounded border border-primary bg-primary text-center text-sm font-medium text-white hidden sm:flex" href="#">1</a>
                                    <a className="h-8 w-8 items-center justify-center rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18262E] text-center text-sm font-medium text-gray-900 dark:text-white hidden sm:flex hover:bg-gray-50 dark:hover:bg-gray-800" href="#">2</a>
                                    <a className="h-8 w-8 items-center justify-center rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18262E] text-center text-sm font-medium text-gray-900 dark:text-white hidden sm:flex hover:bg-gray-50 dark:hover:bg-gray-800" href="#">3</a>
                                    <span className="h-8 w-8 items-center justify-center text-center text-sm font-medium text-gray-900 dark:text-white hidden sm:flex">...</span>
                                    <a className="h-8 w-8 items-center justify-center rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18262E] text-center text-sm font-medium text-gray-900 dark:text-white hidden sm:flex hover:bg-gray-50 dark:hover:bg-gray-800" href="#">10</a>
                                    <a className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#18262E] text-gray-900 dark:text-white rtl:rotate-180 hover:bg-gray-50 dark:hover:bg-gray-800" href="#">
                                        <span className="sr-only">Next Page</span>
                                        <span className="material-symbols-outlined text-base">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HospitalManagementPage;
