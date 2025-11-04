'use client';
import React, { useEffect } from 'react';

const DeviceListPage = () => {
    useEffect(() => {
        const checkboxes = document.querySelectorAll('table tbody input[type="checkbox"]');
        const bulkActionBar = document.getElementById('bulk-action-bar');
        const selectedCount = bulkActionBar?.querySelector('span');

        const handleChange = () => {
            const checkedCheckboxes = document.querySelectorAll('table tbody input[type="checkbox"]:checked');
            if (bulkActionBar && selectedCount) {
                if (checkedCheckboxes.length > 0) {
                    bulkActionBar.classList.remove('hidden');
                    bulkActionBar.classList.add('flex');
                    selectedCount.textContent = `${checkedCheckboxes.length} item${checkedCheckboxes.length > 1 ? 's' : ''} selected`;
                } else {
                    bulkActionBar.classList.add('hidden');
                    bulkActionBar.classList.remove('flex');
                }
            }
        };

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleChange);
        });

        return () => {
            checkboxes.forEach(checkbox => {
                checkbox.removeEventListener('change', handleChange);
            });
        };
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
            <div className="flex h-screen">
                <aside className="w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-border-light dark:border-border-dark flex flex-col">
                    <div className="flex items-center gap-3 h-16 px-6 border-b border-border-light dark:border-border-dark">
                        <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                        <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">MediTrack</h1>
                    </div>
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-subtle-light dark:text-subtle-dark hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary" href="#">
                            <span className="material-symbols-outlined">devices</span>
                            <span>Devices</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-subtle-light dark:text-subtle-dark hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
                            <span className="material-symbols-outlined">receipt_long</span>
                            <span>Work Orders</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-subtle-light dark:text-subtle-dark hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
                            <span className="material-symbols-outlined">analytics</span>
                            <span>Reports</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-lg text-subtle-light dark:text-subtle-dark hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary" href="#">
                            <span className="material-symbols-outlined">build</span>
                            <span>Parts</span>
                        </a>
                    </nav>
                </aside>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex items-center justify-between h-16 px-8 border-b border-border-light dark:border-border-dark bg-white dark:bg-background-dark">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold">Device List</h2>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <img alt="User avatar" className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAmMj4vQPUGW78tb-OmEIkqe9lOpzxQH8iz5YRPh_zwpwelMhRg3MpgUdXszojCVTqhoE4I4yYVR_AsvnyDkn0UGoj37y0WYtxmZDjxcKAFlZxtPnVnE_Q_Jt_gBYY5XXnFfTsLVyniWSoZEcfSZmkkAmls2fwq0bSSFt9jn0sh10Jqy8A5_kpXrfbdKgTpjSm-mk58aZopUIGw1E2Mm38-sdxuBB--VESZfCLWjGyf3a4L8IcMqzcKZhYrppLYjofz3jEPRHZMFR0" />
                        </div>
                    </header>
                    <main className="flex-1 overflow-y-auto p-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-white dark:bg-background-dark p-4 rounded-lg shadow-sm border border-border-light dark:border-border-dark">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark">search</span>
                                            <input className="w-full pl-10 pr-4 py-2 rounded-lg bg-background-light dark:bg-border-dark border-border-light dark:border-border-dark focus:ring-primary focus:border-primary" placeholder="Search devices..." type="text" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark text-sm">
                                            <span>Status</span>
                                            <span className="material-symbols-outlined text-sm">expand_more</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark text-sm">
                                            <span>Type</span>
                                            <span className="material-symbols-outlined text-sm">expand_more</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark text-sm">
                                            <span>Location</span>
                                            <span className="material-symbols-outlined text-sm">expand_more</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 dark:border-primary/50 dark:bg-primary/20 dark:hover:bg-primary/30 text-sm font-medium">
                                            <span className="material-symbols-outlined text-lg">upload_file</span>
                                            <span>Import Devices</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 text-sm font-medium">
                                            <span className="material-symbols-outlined text-lg">add</span>
                                            <span>Add Device</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 hidden bg-primary/10 dark:bg-primary/20 p-2 rounded-lg border border-primary/20 flex items-center justify-between" id="bulk-action-bar">
                                <span className="text-sm font-medium text-primary px-2">2 items selected</span>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 text-sm">
                                        <span className="material-symbols-outlined text-base">qr_code_2</span>
                                        <span>Export QR</span>
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 text-sm">
                                        <span className="material-symbols-outlined text-base">sticky_note_2</span>
                                        <span>Print Stickers</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-subtle-light dark:text-subtle-dark uppercase bg-background-light dark:bg-background-dark">
                                        <tr>
                                            <th className="p-4 w-12" scope="col"><input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" /></th>
                                            <th className="px-6 py-3" scope="col">Device ID</th>
                                            <th className="px-6 py-3" scope="col">Name</th>
                                            <th className="px-6 py-3" scope="col">Status</th>
                                            <th className="px-6 py-3" scope="col">Type</th>
                                            <th className="px-6 py-3" scope="col">Location</th>
                                            <th className="px-6 py-3 text-right" scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-background-dark border-b dark:border-border-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                            <td className="p-4"><input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" /></td>
                                            <td className="px-6 py-4 font-medium text-foreground-light dark:text-foreground-dark whitespace-nowrap">D12345</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Defibrillator</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-bg-light text-success-light dark:bg-success-bg-dark dark:text-success-dark">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Life Support</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">ICU</td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">qr_code</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">sticky_note_2</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-subtle-light dark:text-subtle-dark hover:text-red-500"><span className="material-symbols-outlined text-xl">toggle_off</span></button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-background-dark border-b dark:border-border-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                            <td className="p-4"><input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" /></td>
                                            <td className="px-6 py-4 font-medium text-foreground-light dark:text-foreground-dark whitespace-nowrap">D67890</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Ventilator</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-bg-light text-success-light dark:bg-success-bg-dark dark:text-success-dark">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Life Support</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">ER</td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">qr_code</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">sticky_note_2</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-subtle-light dark:text-subtle-dark hover:text-red-500"><span className="material-symbols-outlined text-xl">toggle_off</span></button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-background-dark border-b dark:border-border-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                            <td className="p-4"><input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" /></td>
                                            <td className="px-6 py-4 font-medium text-foreground-light dark:text-foreground-dark whitespace-nowrap">D11213</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">ECG Machine</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Maintenance</span>
                                            </td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Monitoring</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Cardiology</td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">qr_code</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">sticky_note_2</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-subtle-light dark:text-subtle-dark hover:text-red-500"><span className="material-symbols-outlined text-xl">toggle_off</span></button>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-background-dark hover:bg-primary/5 dark:hover:bg-primary/10">
                                            <td className="p-4"><input className="rounded border-border-light dark:border-border-dark text-primary focus:ring-primary" type="checkbox" /></td>
                                            <td className="px-6 py-4 font-medium text-foreground-light dark:text-foreground-dark whitespace-nowrap">D41516</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Infusion Pump</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Disabled</span>
                                            </td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Therapeutic</td>
                                            <td className="px-6 py-4 text-subtle-light dark:text-subtle-dark">Oncology</td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">visibility</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">qr_code</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 text-subtle-light dark:text-subtle-dark hover:text-primary"><span className="material-symbols-outlined text-xl">sticky_note_2</span></button>
                                                <button className="p-1.5 rounded-lg hover:bg-green-500/10 text-subtle-light dark:text-subtle-dark hover:text-green-500"><span className="material-symbols-outlined text-xl">toggle_on</span></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DeviceListPage;
