import React from 'react';
import Header from '../../components/Header';

const AdminDashboardPage = () => {
    const headerProps = {
        title: "MediMaintain",
        userName: "Emily Carter",
        userRole: "Admin",
        avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_5b9qOV4cK1JYWgzCZeFJbJdj1yELw8ghh5xsrw7iEK84Z1O2QBL76Dh9KrZICL16Max61qbHkkLUkfW6u0UGG5vtfgz_nQ3bnUwK-DS5YKvTewJZJzPakcHJbchH9UMmCc7RQ8eKkPcX7GJXLlXqXhKgx_QRyHbzDghHUnRhk0kwEiKSf7KGg9ej7QPm6R9zYDqP8mBK5ER5s_-ZLSZ37344Zp_Jzme6IQzPfpDf52tJRpZT2p8r__K9Tp9FR8PXmIccmcWiiXRH"
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
            <Header {...headerProps} />
            <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h2>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Overview of system activity and key metrics.</p>
                        </div>
                        <div className="flex flex-shrink-0 gap-2">
                            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-sm bg-primary hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
                                <span className="material-symbols-outlined text-base">add</span>
                                Add Hospital
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                <span className="material-symbols-outlined text-base">manage_accounts</span>
                                Manage Subscriptions
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="p-6 bg-white rounded-xl dark:bg-slate-800/50 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Hospitals</p>
                            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">25</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl dark:bg-slate-800/50 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Subscriptions</p>
                            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">20</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl dark:bg-slate-800/50 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Expired Subscriptions</p>
                            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">5</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl dark:bg-slate-800/50 shadow-sm">
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Engineers</p>
                            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">152</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboardPage;
