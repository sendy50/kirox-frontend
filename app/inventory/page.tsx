import React from 'react';
import Sidebar from '../components/Sidebar';

const InventoryManagementPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
            <div className="flex min-h-screen">
                <Sidebar activeItem="Inventory" />
                <div className="flex-1 flex flex-col">
                    <header className="flex items-center justify-between h-16 bg-white dark:bg-background-dark border-b border-subtle-light dark:border-subtle-dark px-4 sm:px-6 lg:px-8">
                        <button className="lg:hidden text-muted-light dark:text-muted-dark">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div className="flex-1"></div>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden sm:block">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">search</span>
                                <input className="pl-10 pr-4 py-2 w-64 bg-subtle-light/50 dark:bg-subtle-dark/50 border border-subtle-light dark:border-subtle-dark rounded-DEFAULT focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Search..." type="text" />
                            </div>
                            <button className="relative text-muted-light dark:text-muted-dark">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger-light opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-danger-light"></span>
                                </span>
                            </button>
                            <div className="flex items-center gap-3">
                                <img alt="User avatar" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAddBoPZ90yhimEq9Jf-fbRVvpm2aYFJavz-rPuIt7oTxZsIhct9bchRwSblef2xQ0O2CHMbfO36Slyul90VZANPB9w-jhj0iaLmWrJREf1hiQ267TUbUb-T6AZirVcymsEPBJb2BR1drZ0BoBWjX5otbeUwVqdaBudZ2VVOSfSpyB9dIpTHONrBbueY2FHlsZnkq3PTGPzeyUN5KS9Dpu_EaCAD2OlDkKjvQeJpxDzOfvcVGKxXfrBFMJzLgu__fxPArufnQMePd_A" />
                                <div className="hidden md:block">
                                    <p className="font-semibold text-sm">John Doe</p>
                                    <p className="text-xs text-muted-light dark:text-muted-dark">Biomedical Engineer</p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">Inventory Management</h2>
                                    <p className="text-muted-light dark:text-muted-dark">Manage and track your inventory of medical equipment parts and supplies.</p>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-DEFAULT text-sm font-medium hover:bg-subtle-light/50 dark:hover:bg-subtle-dark/50">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        <span>Export</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-DEFAULT text-sm font-medium hover:bg-primary/90">
                                        <span className="material-symbols-outlined text-lg">add</span>
                                        <span>Add Item</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-background-dark/50 rounded-lg border border-subtle-light dark:border-subtle-dark">
                                <div className="p-4 border-b border-subtle-light dark:border-subtle-dark flex flex-col md:flex-row gap-4">
                                    <div className="relative flex-1">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">search</span>
                                        <input className="pl-10 pr-4 py-2 w-full bg-background-light dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-DEFAULT focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Search for items..." type="text" />
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-subtle-light dark:border-subtle-dark rounded-DEFAULT text-sm text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary">
                                            <span>Category</span>
                                            <span className="material-symbols-outlined text-lg">expand_more</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-subtle-light dark:border-subtle-dark rounded-DEFAULT text-sm text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary">
                                            <span>Supplier</span>
                                            <span className="material-symbols-outlined text-lg">expand_more</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-3 py-2 bg-transparent border border-subtle-light dark:border-subtle-dark rounded-DEFAULT text-sm text-muted-light dark:text-muted-dark hover:border-primary hover:text-primary">
                                            <span>Status</span>
                                            <span className="material-symbols-outlined text-lg">expand_more</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-muted-light dark:text-muted-dark uppercase bg-background-light dark:bg-subtle-dark">
                                            <tr>
                                                <th className="px-6 py-3" scope="col">Item Name</th>
                                                <th className="px-6 py-3 text-center" scope="col">Purchased Qty</th>
                                                <th className="px-6 py-3 text-center" scope="col">Used</th>
                                                <th className="px-6 py-3 text-center" scope="col">Stock Left</th>
                                                <th className="px-6 py-3 text-center" scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                                <th className="px-6 py-4 font-medium whitespace-nowrap" scope="row">Ventilator Filters</th>
                                                <td className="px-6 py-4 text-center">100</td>
                                                <td className="px-6 py-4 text-center">20</td>
                                                <td className="px-6 py-4 text-center font-semibold">80</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">In Stock</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b border-subtle-light dark:border-subtle-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                                <th className="px-6 py-4 font-medium whitespace-nowrap" scope="row">Infusion Pump Tubing</th>
                                                <td className="px-6 py-4 text-center">500</td>
                                                <td className="px-6 py-4 text-center">150</td>
                                                <td className="px-6 py-4 text-center font-semibold">350</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">In Stock</span>
                                                </td>
                                            </tr>
                                            <tr className="bg-danger-background-light dark:bg-danger-background-dark border-b border-subtle-light dark:border-subtle-dark hover:bg-danger-light/20 dark:hover:bg-danger-dark/20">
                                                <th className="px-6 py-4 font-medium whitespace-nowrap text-danger-light" scope="row">Defibrillator Pads</th>
                                                <td className="px-6 py-4 text-center">200</td>
                                                <td className="px-6 py-4 text-center">180</td>
                                                <td className="px-6 py-4 text-center font-semibold text-danger-light">20</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-danger-light/20 text-danger-light dark:bg-danger-dark/30 dark:text-danger-dark">Low Stock</span>
                                                </td>
                                            </tr>
                                            {/* ... other rows ... */}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <span className="text-sm text-muted-light dark:text-muted-dark">
                                        Showing <span className="font-semibold">1-7</span> of <span className="font-semibold">100</span>
                                    </span>
                                    <nav className="flex items-center gap-2">
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT border border-subtle-light dark:border-subtle-dark hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">
                                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                                        </a>
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT bg-primary text-white" href="#">1</a>
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">2</a>
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">3</a>
                                        <span className="px-2">...</span>
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">10</a>
                                        <a className="flex items-center justify-center size-8 rounded-DEFAULT border border-subtle-light dark:border-subtle-dark hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">
                                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default InventoryManagementPage;
