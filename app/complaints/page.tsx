'use client';
import React, { useState } from 'react';

const ComplaintsPage = () => {
    const [addComplaintModal, setAddComplaintModal] = useState(false);
    const [exportModal, setExportModal] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex flex-col min-h-screen">
                <header className="bg-white dark:bg-background-dark shadow-sm border-b border-gray-200 dark:border-gray-800">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">BioMed Solutions</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-6">
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Dashboard</a>
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Work Orders</a>
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Equipment</a>
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Parts</a>
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Reports</a>
                                <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Settings</a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6jAcPX4ChO0X4bo0dVS2rrBJwANgoCtTBXsNvgVtTLwMDwqgw_qD4aTnynGEafv6eyyTa6hnl4YIogVU7y63AFScx4SPV4q69Fuul0R9u876IRlIyB19qkShplzc1At5ag8BzTcC8yCRc2YRRxQ5Cu3hggelTuxKQOMuLTrXKX-aa1WDkIQut5IffpbJd8MSGWl8tFgh-GP_3Lu0x14_AJX3UtuxhJ0rzmaZEESN4C6jCEGa7TMKsTWdRZPOnmR4qTQxnqnAVkF67")' }}></div>
                                <button className="md:hidden text-gray-600 dark:text-gray-300">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Complaints</h2>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setAddComplaintModal(true)} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-base">add</span>
                                <span>Add Complaint</span>
                            </button>
                            <button onClick={() => setExportModal(true)} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 transition-colors shadow-sm">
                                <span className="material-symbols-outlined text-base">download</span>
                                <span>Export Excel</span>
                            </button>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                        <nav aria-label="Tabs" className="-mb-px flex gap-6">
                            <a className="py-4 px-1 border-b-2 font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-500" href="#">
                                Resolved
                            </a>
                            <a aria-current="page" className="py-4 px-1 border-b-2 font-medium text-sm text-primary border-primary" href="#">
                                Pending
                            </a>
                        </nav>
                    </div>
                    <div className="bg-white dark:bg-background-dark shadow-md rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700/50">
                                    <tr>
                                        <th className="px-6 py-3" scope="col">Complaint ID</th>
                                        <th className="px-6 py-3" scope="col">Date Reported</th>
                                        <th className="px-6 py-3" scope="col">Equipment</th>
                                        <th className="px-6 py-3" scope="col">Description</th>
                                        <th className="px-6 py-3 text-center" scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white dark:bg-background-dark border-b dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-primary/10">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">CMP-005</th>
                                        <td className="px-6 py-4">2024-07-26</td>
                                        <td className="px-6 py-4">Ventilator</td>
                                        <td className="px-6 py-4">Malfunctioning fan</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-background-dark border-b dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-primary/10">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">CMP-004</th>
                                        <td className="px-6 py-4">2024-07-25</td>
                                        <td className="px-6 py-4">Defibrillator</td>
                                        <td className="px-6 py-4">Battery not charging</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-background-dark border-b dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-primary/10">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">CMP-003</th>
                                        <td className="px-6 py-4">2024-07-24</td>
                                        <td className="px-6 py-4">ECG Machine</td>
                                        <td className="px-6 py-4">Noisy readings</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-background-dark border-b dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-primary/10">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">CMP-002</th>
                                        <td className="px-6 py-4">2024-07-23</td>
                                        <td className="px-6 py-4">Infusion Pump</td>
                                        <td className="px-6 py-4">Flow rate inaccurate</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-background-dark hover:bg-gray-50/50 dark:hover:bg-primary/10">
                                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap" scope="row">CMP-001</th>
                                        <td className="px-6 py-4">2024-07-22</td>
                                        <td className="px-6 py-4">Anesthesia Machine</td>
                                        <td className="px-6 py-4">Gas leak detected</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pending</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
                {addComplaintModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-background-dark rounded-lg shadow-xl w-full max-w-lg mx-4">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Complaint</h3>
                            </div>
                            <form className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="equipment">Equipment</label>
                                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="equipment" name="equipment">
                                            <option>Select Equipment</option>
                                            <option>Ventilator</option>
                                            <option>Defibrillator</option>
                                            <option>ECG Machine</option>
                                            <option>Infusion Pump</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="date">Date</label>
                                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="date" name="date" type="date" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="description">Description</label>
                                        <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="description" name="description" rows={3}></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="status">Status</label>
                                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="status" name="status">
                                            <option>Pending</option>
                                            <option>Resolved</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="priority">Priority</label>
                                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="priority" name="priority">
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">File Upload</label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                                                </svg>
                                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                                    <label className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary" htmlFor="file-upload">
                                                        <span>Upload a file</span>
                                                        <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 mt-6">
                                    <button onClick={() => setAddComplaintModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button">Cancel</button>
                                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">Add Complaint</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {exportModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white dark:bg-background-dark rounded-lg shadow-xl w-full max-w-md mx-4">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Export to Excel</h3>
                            </div>
                            <div className="p-6">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="month">Select Month</label>
                                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="month" name="month">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 flex justify-end gap-4">
                                <button onClick={() => setExportModal(false)} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button">Cancel</button>
                                <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button">Export</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComplaintsPage;
