import React from 'react';

const DeviceProfilePage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="relative flex h-auto min-h-screen w-full flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-b-gray-200 dark:border-b-gray-700 px-10 py-3 bg-white dark:bg-background-dark">
                    <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path d="M2 7L12 12L22 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path d="M12 22V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path d="M20.5 14.5L12 18L3.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <path d="M17 5L7 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">BioMed Manager</h2>
                    </div>
                    <nav className="hidden md:flex flex-1 justify-center gap-8">
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Dashboard</a>
                        <a className="text-sm font-medium text-primary" href="#">Devices</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Work Orders</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Parts</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Reports</a>
                        <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Settings</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 aspect-square rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf-zsL87t8F2vhuf7aVGKsIU1t_nKMN-u0USzWX7zU1W7eNpMXCQsmtSwXIoVWakallJYSyWKRyFGgIIiCloXTDC5ceyxOsLQiOmJrh6P1bXnCZJAJLh0aUrke8O-AQ5qjAcVrwJCw-i921WRSWz6VSLVXk3Y1RP7o2QtQyb4zkqtwSOwMQC-YRZQyvCr4BmibhCvdSXAQANu4H-6hGCcJEmom_A4rco6cE2u4Gd9XffRJnnHoZadfcynR8Kb3A0D_uCEsovWWdfeu")' }}></div>
                    </div>
                </header>
                <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white dark:bg-background-dark rounded-lg shadow-sm p-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Device Profile</h2>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Device Information</h3>
                                    <dl className="space-y-4">
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Device Name</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">Defibrillator</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Manufacturer</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">Medtronic</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Model</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">LifePak 15</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Serial Number</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">123456789</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">Emergency Room</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Asset Details</h3>
                                    <dl className="space-y-4">
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Asset Tag</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">A1234</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Purchase Date</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">2022-01-15</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Warranty Expiration</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">2024-01-15</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Service</dt>
                                            <dd className="text-sm text-gray-900 dark:text-white">2023-07-20</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
                                            <dd className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary">Active</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex justify-end gap-3">
                                <button className="flex items-center gap-2 rounded bg-primary/20 dark:bg-primary/30 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/30 dark:hover:bg-primary/40">
                                    <span className="material-symbols-outlined text-base">qr_code_2</span>
                                    <span>Generate QR</span>
                                </button>
                                <button className="flex items-center gap-2 rounded bg-primary/20 dark:bg-primary/30 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/30 dark:hover:bg-primary/40">
                                    <span className="material-symbols-outlined text-base">sticky_note_2</span>
                                    <span>Print Sticker</span>
                                </button>
                                <button className="flex items-center gap-2 rounded bg-primary/20 dark:bg-primary/30 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/30 dark:hover:bg-primary/40">
                                    <span className="material-symbols-outlined text-base">upload_file</span>
                                    <span>Upload</span>
                                </button>
                            </div>
                            <div className="bg-white dark:bg-background-dark rounded-lg shadow-sm p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Information</h2>
                                    <div className="flex gap-3">
                                        <button className="rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600">Cancel</button>
                                        <button className="rounded bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90">Save Changes</button>
                                    </div>
                                </div>
                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Device Name</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="Defibrillator" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Manufacturer</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="Medtronic" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Model</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="LifePak 15" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Serial Number</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="123456789" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Location</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="Emergency Room" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Asset Tag</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" defaultValue="A1234" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Purchase Date</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" type="date" defaultValue="2022-01-15" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Warranty Expiration</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" type="date" defaultValue="2024-01-15" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Last Service Date</p>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 text-sm" type="date" defaultValue="2023-07-20" />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 pb-2">Status</p>
                                        <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 h-10 p-2 text-sm">
                                            <option selected>Active</option>
                                            <option>Inactive</option>
                                            <option>Under Maintenance</option>
                                        </select>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DeviceProfilePage;
