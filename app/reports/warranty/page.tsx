import React from 'react';

const WarrantyReportDetailsPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <div className="flex flex-col min-h-screen">
                <header className="bg-content-light dark:bg-content-dark border-b border-border-light dark:border-border-dark sticky top-0 z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-8">
                                <div className="flex items-center space-x-2 text-primary">
                                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                                    <h1 className="text-xl font-bold">MediTrack</h1>
                                </div>
                                <nav className="hidden md:flex items-center space-x-6">
                                    <a className="text-sm font-medium text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Dashboard</a>
                                    <a className="text-sm font-medium text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Devices</a>
                                    <a className="text-sm font-medium text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Work Orders</a>
                                    <a className="text-sm font-bold text-primary dark:text-primary" href="#">Reports</a>
                                    <a className="text-sm font-medium text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Settings</a>
                                </nav>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="hidden md:block relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark">search</span>
                                    <input className="bg-input-light dark:bg-input-dark border-none rounded-full w-48 lg:w-64 h-10 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:outline-none text-sm" placeholder="Search" type="text" />
                                </div>
                                <button className="md:hidden p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
                                    <span className="material-symbols-outlined">search</span>
                                </button>
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_M_veyIUTyFH7LP_iMaXRFiKa0l3Sha4oEOsYcWwATY6pkKLrIhftuPO4qfc0er3mb_w3cYQrqP_TP39G_yX5Iv9bNuD8ASh2Mte0g0o2NUXVT6JrOQt8GnjYX28WOkVhdW1wjiBjeaKo8iojpP69UB2uhi5-4iJwbP0R1a2n8bRyvLnjrAGjqOJ26MpmxW7z21U1xtoqlxR2Xjvi9fD6LWKsIqJkQ1fwFNnXqYvZJbr9soqy_UwNFEbXia6g_t4NjvaAtRNB2Tc5")' }}></div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Warranty Report Details</h2>
                            <p className="text-subtext-light dark:text-subtext-dark mt-1">View detailed information for warranty reports.</p>
                        </div>
                        <button className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors self-start lg:self-auto">
                            <span className="material-symbols-outlined">download</span>
                            Export Report
                        </button>
                    </div>
                    <div className="bg-content-light dark:bg-content-dark p-4 sm:p-6 rounded-xl shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark">search</span>
                                <input className="w-full bg-input-light dark:bg-input-dark border-none rounded-lg h-12 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Search by Device ID or Name..." type="text" />
                            </div>
                            <div className="relative">
                                <select className="w-full appearance-none bg-input-light dark:bg-input-dark border-none rounded-lg h-12 px-4 pr-10 focus:ring-2 focus:ring-primary focus:outline-none">
                                    <option>All Warranty Types</option>
                                    <option>Standard</option>
                                    <option>Extended</option>
                                    <option>Premium</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-subtext-light dark:text-subtext-dark pointer-events-none">expand_more</span>
                            </div>
                            <div className="relative">
                                <input className="w-full bg-input-light dark:bg-input-dark border-none rounded-lg h-12 px-4 focus:ring-2 focus:ring-primary focus:outline-none text-subtext-light dark:text-subtext-dark" type="date" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold uppercase text-subtext-light dark:text-subtext-dark tracking-wider">Device ID</th>
                                        <th className="p-4 text-sm font-semibold uppercase text-subtext-light dark:text-subtext-dark tracking-wider">Name</th>
                                        <th className="p-4 text-sm font-semibold uppercase text-subtext-light dark:text-subtext-dark tracking-wider">Warranty Type</th>
                                        <th className="p-4 text-sm font-semibold uppercase text-subtext-light dark:text-subtext-dark tracking-wider">Due Date</th>
                                        <th className="p-4 text-sm font-semibold uppercase text-subtext-light dark:text-subtext-dark tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC001</td>
                                        <td className="p-4 whitespace-nowrap">Defibrillator</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Standard</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2024-12-31</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC002</td>
                                        <td className="p-4 whitespace-nowrap">Ventilator</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Extended</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2025-06-15</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC003</td>
                                        <td className="p-4 whitespace-nowrap">ECG Machine</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Standard</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2024-11-20</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC004</td>
                                        <td className="p-4 whitespace-nowrap">Ultrasound</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">Premium</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2026-01-10</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC005</td>
                                        <td className="p-4 whitespace-nowrap">Infusion Pump</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Standard</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2024-10-05</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC006</td>
                                        <td className="p-4 whitespace-nowrap">Anesthesia Machine</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Extended</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2025-03-22</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                    <tr className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                                        <td className="p-4 whitespace-nowrap font-medium">DVC007</td>
                                        <td className="p-4 whitespace-nowrap">Patient Monitor</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">Standard</span></td>
                                        <td className="p-4 whitespace-nowrap text-subtext-light dark:text-subtext-dark">2024-09-18</td>
                                        <td className="p-4 whitespace-nowrap text-right"><button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"><span className="material-symbols-outlined">more_horiz</span></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Showing 1 to 7 of 25 results</p>
                            <div className="flex items-center space-x-2">
                                <button className="px-3 py-1 rounded-lg border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark disabled:opacity-50" disabled>Previous</button>
                                <button className="px-3 py-1 rounded-lg border border-border-light dark:border-border-dark bg-primary text-white">1</button>
                                <button className="px-3 py-1 rounded-lg border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark">2</button>
                                <button className="px-3 py-1 rounded-lg border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark">3</button>
                                <button className="px-3 py-1 rounded-lg border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark">Next</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default WarrantyReportDetailsPage;
