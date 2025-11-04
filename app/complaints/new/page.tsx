import React from 'react';

const AddComplaintPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex flex-col min-h-screen">
                <header className="bg-white dark:bg-background-dark shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-3">
                                <a className="md:hidden text-gray-600 dark:text-gray-300" href="#">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </a>
                                <div className="w-8 h-8 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">BioMed Solutions</h1>
                            </div>
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
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <a className="hidden md:inline-block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
                            </a>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Complaint</h2>
                        </div>
                        <div className="bg-white dark:bg-background-dark shadow-md rounded-lg p-6">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="equipment">Equipment <span className="text-red-500">*</span></label>
                                    <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="equipment" name="equipment" required>
                                        <option disabled selected value="">Select Equipment</option>
                                        <option>Ventilator</option>
                                        <option>Defibrillator</option>
                                        <option>ECG Machine</option>
                                        <option>Infusion Pump</option>
                                        <option>Anesthesia Machine</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="description">Description <span className="text-red-500">*</span></label>
                                    <textarea className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="description" name="description" placeholder="Describe the issue in detail..." required rows={4}></textarea>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="date">Date of Complaint <span className="text-red-500">*</span></label>
                                        <input className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="date" name="date" required type="date" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="priority">Priority <span className="text-red-500">*</span></label>
                                        <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="priority" name="priority" required>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="status">Status</label>
                                    <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm" id="status" name="status">
                                        <option>Pending</option>
                                        <option>In Progress</option>
                                        <option>Resolved</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Attach File(s)</label>
                                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <span className="material-symbols-outlined text-5xl text-gray-400">cloud_upload</span>
                                            <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                                <label className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary dark:ring-offset-background-dark" htmlFor="file-upload">
                                                    <span>Upload a file</span>
                                                    <input className="sr-only" id="file-upload" multiple name="file-upload" type="file" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, PDF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-4 pt-4">
                                    <button className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" type="button">Cancel</button>
                                    <button className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" type="submit">
                                        <span className="material-symbols-outlined text-base">send</span>
                                        <span>Submit Complaint</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 md:hidden sticky bottom-0 z-10">
                    <nav className="flex justify-around items-center p-2">
                        <a className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-xs">Dashboard</span>
                        </a>
                        <a className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">list_alt</span>
                            <span className="text-xs">Orders</span>
                        </a>
                        <a className="flex flex-col items-center text-primary dark:text-primary transition-colors p-2 -mt-8 bg-background-light dark:bg-background-dark rounded-full" href="#">
                            <div className="bg-primary text-white rounded-full p-3 shadow-lg">
                                <span className="material-symbols-outlined">add</span>
                            </div>
                        </a>
                        <a className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">build</span>
                            <span className="text-xs">Equipment</span>
                        </a>
                        <a className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-xs">Settings</span>
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default AddComplaintPage;
