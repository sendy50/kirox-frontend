import React from 'react';

const ReportsPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-10 border-b border-primary/20 bg-background-light/80 backdrop-blur-sm dark:bg-background-dark/80">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center gap-8">
                                <a className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white" href="#">
                                    <span className="material-symbols-outlined text-primary">biotech</span>
                                    MediTrack
                                </a>
                                <nav className="hidden md:flex items-center gap-6">
                                    <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Dashboard</a>
                                    <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Work Orders</a>
                                    <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Assets</a>
                                    <a className="text-sm font-medium text-primary dark:text-primary font-semibold" href="#">Reports</a>
                                    <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#">Settings</a>
                                </nav>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative hidden sm:block">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> search </span>
                                    <input className="w-full rounded-lg border-none bg-background-light py-2 pl-10 pr-4 text-sm text-gray-800 ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-background-dark dark:text-white dark:ring-primary/30" placeholder="Search..." type="text" />
                                </div>
                                <button className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                                <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9iTgMhbtq78P7uPqVaL6dk4LgBRaCF_5FcLRB49Z9Y2NHeMKgsKO--PMKYEU3Z6iQTwhB1OBV8TtVV__L4yROagB4DOEIDeI7hi0ZTtpV2f9Q-YUztPifvI42WdoQ26agjTLB5FlOM8Svc7U1104GU9Q9_VDBOJCebAP0_fOB9d-PX02DRbLZvt-IH40DVp37aVGJyai_a8oejiv_sPnKaaYP8875KjDCAntbs2Na4oegZGOcnjZTtfJhREikjCR-NjBXiHxCfk_E")' }}></div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow">
                    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Reports</h1>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Generate and export reports on maintenance activities.</p>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90">
                                <span className="material-symbols-outlined">download</span>
                                Export
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="report-type">Report Type</label>
                                    <select className="mt-1 block w-full rounded-lg border-primary/20 bg-background-light py-2 pl-3 pr-10 text-base text-gray-900 focus:border-primary focus:outline-none focus:ring-primary dark:border-primary/30 dark:bg-background-dark dark:text-white sm:text-sm" id="report-type" name="report-type">
                                        <option>Preventive Maintenance (PMS)</option>
                                        <option selected>Calibration</option>
                                        <option>Warranty</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="search-reports">Search Reports</label>
                                    <div className="relative mt-1">
                                        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> search </span>
                                        <input className="w-full rounded-lg border-primary/20 bg-background-light py-2 pl-10 pr-4 text-sm text-gray-800 focus:border-primary focus:ring-primary dark:border-primary/30 dark:bg-background-dark dark:text-white" id="search-reports" placeholder="Search by name, asset, or ID..." type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters:</span>
                                <button className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                                    Date Range
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                                <button className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                                    Asset Type
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                                <button className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                                    Status
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </button>
                            </div>
                            <div className="overflow-hidden rounded-lg border border-primary/20 shadow-sm dark:border-primary/30">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-primary/20 dark:divide-primary/30">
                                        <thead className="bg-background-light dark:bg-background-dark">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Report Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Type</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Date Generated</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400" scope="col">Status</th>
                                                <th className="relative px-6 py-3" scope="col">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-primary/20 bg-background-light dark:divide-primary/30 dark:bg-background-dark/50">
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Preventive Maintenance Report</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">PM</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2024-01-15</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">Completed</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                    <a className="text-primary hover:text-primary/80" href="#">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Calibration Report</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Calibration</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2024-02-20</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">Completed</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                    <a className="text-primary hover:text-primary/80" href="#">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Warranty Report</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Warranty</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2024-03-05</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                    <a className="text-primary hover:text-primary/80" href="#">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Performance Report</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Performance</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2024-03-10</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">Completed</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                    <a className="text-primary hover:text-primary/80" href="#">View</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Inventory Report</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Inventory</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">2024-03-15</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm">
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300">Completed</span>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                    <a className="text-primary hover:text-primary/80" href="#">View</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <nav aria-label="Pagination" className="flex items-center justify-between border-t border-primary/20 px-4 py-3 sm:px-6 dark:border-primary/30">
                                <div className="hidden sm:block">
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        Showing
                                        <span className="font-medium">1</span>
                                        to
                                        <span className="font-medium">5</span>
                                        of
                                        <span className="font-medium">20</span>
                                        results
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-between sm:justify-end">
                                    <a className="relative inline-flex items-center rounded-md border border-primary/20 bg-background-light px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary/10 dark:border-primary/30 dark:bg-background-dark dark:text-gray-300 dark:hover:bg-primary/20" href="#">Previous</a>
                                    <a className="relative ml-3 inline-flex items-center rounded-md border border-primary/20 bg-background-light px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary/10 dark:border-primary/30 dark:bg-background-dark dark:text-gray-300 dark:hover:bg-primary/20" href="#">Next</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ReportsPage;
