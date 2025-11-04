import React from 'react';

const BioMedDashboardPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex min-h-screen w-full flex-col">
                <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-6 py-3 shadow-sm bg-white dark:bg-background-dark">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <span className="material-symbols-outlined text-white text-2xl">monitor_heart</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-800 dark:text-white">BioMed CMMS</h1>
                    </div>
                    <nav className="hidden items-center gap-6 lg:flex">
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Devices</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Work Orders</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Parts</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Reports</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary/20 dark:hover:bg-primary/30">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1 right-1 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                        </button>
                    </div>
                </header>
                <main className="flex-1 p-6 lg:p-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, Engineer!</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Devices</p>
                                    <span className="material-symbols-outlined text-primary text-3xl">devices</span>
                                </div>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
                            </div>
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Devices Due PMS</p>
                                    <span className="material-symbols-outlined text-primary text-3xl">event_busy</span>
                                </div>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">56</p>
                            </div>
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Devices Due Calibration</p>
                                    <span className="material-symbols-outlined text-primary text-3xl">science</span>
                                </div>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">12</p>
                            </div>
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Complaints</p>
                                    <span className="material-symbols-outlined text-primary text-3xl">report</span>
                                </div>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">23</p>
                            </div>
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Low Stock Alerts</p>
                                    <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
                                </div>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">8</p>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-2 rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Device Status</h3>
                                <div className="mt-4 h-72">
                                    <div className="flex h-full items-end justify-around gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 rounded-t bg-primary" style={{ height: '60%' }}></div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Active</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 rounded-t bg-primary/50" style={{ height: '25%' }}></div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Inactive</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 rounded-t bg-primary/30" style={{ height: '15%' }}></div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Under Repair</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="w-12 rounded-t bg-primary/20" style={{ height: '5%' }}></div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Retired</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg bg-white dark:bg-background-dark p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Device Types</h3>
                                <div className="mt-4 space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <span>Infusion Pumps</span>
                                            <span>40%</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-background-light dark:bg-gray-700">
                                            <div className="h-2 rounded-full bg-primary" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <span>Ventilators</span>
                                            <span>25%</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-background-light dark:bg-gray-700">
                                            <div className="h-2 rounded-full bg-primary" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <span>Defibrillators</span>
                                            <span>15%</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-background-light dark:bg-gray-700">
                                            <div className="h-2 rounded-full bg-primary" style={{ width: '15%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <span>Monitors</span>
                                            <span>10%</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-background-light dark:bg-gray-700">
                                            <div className="h-2 rounded-full bg-primary" style={{ width: '10%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <span>Others</span>
                                            <span>10%</span>
                                        </div>
                                        <div className="mt-1 h-2 w-full rounded-full bg-background-light dark:bg-gray-700">
                                            <div className="h-2 rounded-full bg-primary" style={{ width: '10%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BioMedDashboardPage;
