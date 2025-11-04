import React from 'react';

const HospitalDetailsPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
            <div className="flex min-h-screen">
                <aside className="w-64 bg-card-light dark:bg-card-dark flex flex-col border-r border-border-light dark:border-border-dark">
                    <div className="p-6">
                        <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">Acme CMMS</h1>
                    </div>
                    <nav className="flex-1 px-4 space-y-2">
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-white bg-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined !fill-current">apartment</span>
                            <span>Hospitals</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">groups</span>
                            <span>Biomedical Engineers</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">factory</span>
                            <span>Manufacturers</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span>Consumables</span>
                        </a>
                    </nav>
                    <div className="p-4 border-t border-border-light dark:border-border-dark">
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary rounded-lg" href="#">
                            <span className="material-symbols-outlined">help</span>
                            <span>Help and feedback</span>
                        </a>
                    </div>
                </aside>
                <main className="flex-1 p-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-6">
                            <nav aria-label="Breadcrumb" className="text-sm font-medium text-muted-light dark:text-muted-dark">
                                <ol className="list-none p-0 inline-flex">
                                    <li className="flex items-center">
                                        <a className="hover:text-primary" href="#">Hospitals</a>
                                        <span className="material-symbols-outlined text-lg mx-2">chevron_right</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-foreground-light dark:text-foreground-dark">City General Hospital</span>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-foreground-light dark:text-foreground-dark">City General Hospital</h1>
                        </div>
                        <div className="space-y-10">
                            <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold text-foreground-light dark:text-foreground-dark mb-6">Hospital Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Hospital Name</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">City General Hospital</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Address</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">123 Main Street</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">City</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">Anytown</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">State</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">CA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Zip Code</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">91234</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Phone Number</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">(555) 123-4567</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Email</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">info@citygeneral.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold text-foreground-light dark:text-foreground-dark mb-6">Subscription</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Start Date</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">01/01/2023</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">End Date</p>
                                        <p className="font-medium text-foreground-light dark:text-foreground-dark">12/31/2023</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-light dark:text-muted-dark">Current Status</p>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                                            Active
                                        </span>
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

export default HospitalDetailsPage;
