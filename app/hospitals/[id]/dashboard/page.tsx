import React from 'react';

const HospitalDashboardPage = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex min-h-screen w-full flex-col">
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border-light bg-background-light px-4 dark:border-border-dark dark:bg-background-dark sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-3xl"> medical_services </span>
                            <h1 className="text-xl font-bold text-text-light dark:text-text-dark">MediTrack</h1>
                        </div>
                        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
                            <a className="text-primary" href="#">Dashboard</a>
                            <a className="text-muted-light transition-colors hover:text-primary dark:text-muted-dark dark:hover:text-primary" href="#">Devices</a>
                            <a className="text-muted-light transition-colors hover:text-primary dark:text-muted-dark dark:hover:text-primary" href="#">Complaints</a>
                            <a className="text-muted-light transition-colors hover:text-primary dark:text-muted-dark dark:hover:text-primary" href="#">Inventory</a>
                            <a className="text-muted-light transition-colors hover:text-primary dark:text-muted-dark dark:hover:text-primary" href="#">Reports</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full text-muted-light transition-colors hover:bg-primary/10 hover:text-primary dark:text-muted-dark dark:hover:bg-primary/20">
                            <span className="material-symbols-outlined"> notifications </span>
                        </button>
                        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTDGEV5MMcOEQuWJD0lPUiiUx_n6Nf5nJ7IAGtQ_RW85zLbob3rRNqxEAZlzgHm9SmKC73uoN0gLERLvb7xF-2ybyn67Z3QERvpGk2Nq2hGUcH07Z77TQPpo677oOHkuBl3bPGRH6ttYprn8c0jlQsTff0lra4EW3LO4x8k1tdn8hj0P2l9Da2vzNdo1UG7GHmwLZLPErVFp2MBrPvsvxfhRoMZdD1x6aTCnIlDvLD29H_K-VFHgK1aIHa07FMczTASEpiW09Wr0Mv")' }}></div>
                    </div>
                </header>
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">Hospital Dashboard</h2>
                            <p className="mt-2 text-muted-light dark:text-muted-dark">Welcome back! Here's a snapshot of your hospital's operations.</p>
                        </div>
                        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-3xl"> devices </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Total Devices</p>
                                        <p className="text-2xl font-bold text-text-light dark:text-text-dark">1,250</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-3xl"> event_repeat </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Devices Due PMS</p>
                                        <p className="text-2xl font-bold text-text-light dark:text-text-dark">35</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-3xl"> science </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Devices Due Calibration</p>
                                        <p className="text-2xl font-bold text-text-light dark:text-text-dark">20</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-3xl"> report_problem </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Active Complaints</p>
                                        <p className="text-2xl font-bold text-text-light dark:text-text-dark">12</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-4 dark:border-border-dark dark:bg-background-dark">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-3xl"> inventory_2 </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Low Stock Alerts</p>
                                        <p className="text-2xl font-bold text-text-light dark:text-text-dark">5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-8 overflow-hidden rounded-lg">
                            <div className="bg-cover bg-center p-8 sm:p-12" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpdCIZZbv1frq8EOVK1BBIPIOGZ0RiA2bb-LIxGmOByaZMkLZ2_4bqPDZ5qWctOuWF60D2lMTdJiM_nq0gc1xglgn78xOcGOZo-AEjkPlt7Fv1KR4bkU_pyX-uOzUOoo_W4zQA3VfmdLChRGfu9Q42NFG00IwqLc_KpdCZ6m1NF15mRyJrSIv-i2sIHYKF713VA0MzUHA9apCmISdn0MgFz2npJwiZpF2iGBsY3GBqHueJRKK9MOxXJWLJrIq-NuLcbDTJItvOo51_")' }}>
                                <div className="max-w-xl">
                                    <h3 className="text-3xl font-bold text-white">Subscription Renewal</h3>
                                    <p className="mt-2 text-lg text-white/90">Your subscription is expiring in 30 days. Renew now to continue enjoying uninterrupted service.</p>
                                    <button className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">Renew Subscription</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            <div className="rounded-lg border border-border-light bg-background-light p-6 dark:border-border-dark dark:bg-background-dark lg:col-span-1">
                                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Device Due %</h3>
                                <p className="mt-1 text-3xl font-bold text-text-light dark:text-text-dark">15%</p>
                                <div className="mt-1 flex items-center gap-1">
                                    <span className="text-sm text-muted-light dark:text-muted-dark">Current</span>
                                    <span className="text-sm font-medium text-success-light dark:text-success-dark">+5%</span>
                                </div>
                                <div className="mt-6 grid h-48 grid-flow-col items-end justify-items-center gap-4 px-2">
                                    <div className="w-full rounded-t-sm bg-primary/20" style={{ height: '30%' }}></div>
                                    <div className="w-full rounded-t-sm bg-primary/20" style={{ height: '40%' }}></div>
                                    <div className="w-full rounded-t-sm bg-primary/20" style={{ height: '60%' }}></div>
                                    <div className="w-full rounded-t-sm bg-primary/20" style={{ height: '40%' }}></div>
                                    <div className="w-full rounded-t-sm bg-primary/20" style={{ height: '30%' }}></div>
                                    <div className="w-full rounded-t-sm bg-primary" style={{ height: '90%' }}></div>
                                </div>
                                <div className="mt-2 grid grid-flow-col justify-items-center gap-4 px-2">
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Jan</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Feb</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Mar</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Apr</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">May</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Jun</p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-6 dark:border-border-dark dark:bg-background-dark lg:col-span-1">
                                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Complaint Trends</h3>
                                <p className="mt-1 text-3xl font-bold text-text-light dark:text-text-dark">25</p>
                                <div className="mt-1 flex items-center gap-1">
                                    <span className="text-sm text-muted-light dark:text-muted-dark">Last 6 Months</span>
                                    <span className="text-sm font-medium text-danger-light dark:text-danger-dark">-10%</span>
                                </div>
                                <div className="mt-6 h-48">
                                    <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_area)"></path>
                                        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="var(--color-primary)" stroke-linecap="round" stroke-width="3"></path>
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_area" x1="236" x2="236" y1="1" y2="150">
                                                <stop stop-color="var(--color-primary)" stop-opacity="0.2"></stop>
                                                <stop offset="1" stop-color="var(--color-primary)" stop-opacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <style>
                                            {`
                                                svg { --color-primary: #1193d4; }
                                            `}
                                        </style>
                                    </svg>
                                </div>
                                <div className="mt-2 grid grid-flow-col justify-around">
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Jan</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Feb</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Mar</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Apr</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">May</p>
                                    <p className="text-xs font-medium text-muted-light dark:text-muted-dark">Jun</p>
                                </div>
                            </div>
                            <div className="rounded-lg border border-border-light bg-background-light p-6 dark:border-border-dark dark:bg-background-dark lg:col-span-1">
                                <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Stock Usage</h3>
                                <p className="mt-1 text-3xl font-bold text-text-light dark:text-text-dark">75%</p>
                                <div className="mt-1 flex items-center gap-1">
                                    <span className="text-sm text-muted-light dark:text-muted-dark">Current</span>
                                    <span className="text-sm font-medium text-success-light dark:text-success-dark">+15%</span>
                                </div>
                                <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 py-3">
                                    <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Critical</p>
                                    <div className="h-3 w-full overflow-hidden rounded-full bg-primary/20"><div className="h-full rounded-full bg-primary" style={{ width: '80%' }}></div></div>
                                    <p className="text-sm font-medium text-muted-light dark:text-muted-dark">High</p>
                                    <div className="h-3 w-full overflow-hidden rounded-full bg-primary/20"><div className="h-full rounded-full bg-primary" style={{ width: '80%' }}></div></div>
                                    <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Medium</p>
                                    <div className="h-3 w-full overflow-hidden rounded-full bg-primary/20"><div className="h-full rounded-full bg-primary" style={{ width: '70%' }}></div></div>
                                    <p className="text-sm font-medium text-muted-light dark:text-muted-dark">Low</p>
                                    <div className="h-3 w-full overflow-hidden rounded-full bg-primary/20"><div className="h-full rounded-full bg-primary" style={{ width: '10%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HospitalDashboardPage;
