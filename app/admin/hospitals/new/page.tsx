import React from 'react';

const AddHospitalPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
            <div className="flex flex-col min-h-screen">
                <header className="bg-card-light dark:bg-card-dark border-b border-border-light dark:border-border-dark sticky top-0 z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-4">
                                <div className="text-primary size-7">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h1 className="text-xl font-bold">MediTrack</h1>
                            </div>
                            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                                <a className="hover:text-primary transition-colors" href="#">Dashboard</a>
                                <a className="text-primary font-semibold" href="#">Hospitals</a>
                                <a className="hover:text-primary transition-colors" href="#">Engineers</a>
                                <a className="hover:text-primary transition-colors" href="#">Equipment</a>
                                <a className="hover:text-primary transition-colors" href="#">Work Orders</a>
                                <a className="hover:text-primary transition-colors" href="#">Reports</a>
                            </nav>
                            <div className="flex items-center gap-4">
                                <button className="md:hidden p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                                <img alt="User avatar" className="size-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQHONXNi1fznm2RI06xIYDeRuP0JzBbXTdaVt-9EtI-pZW2ieVX2yNn4wk8APCi-Jk0V6jshabenzJnV_aJDpTkx38Jeq9911hKwM2doA_kF-xFSVH-DaY9l2L006af6HhM5Q7D1ECA4_4yBt5FZrwnsFChOyzvKoplS84vBkJim3cEvEfMu6UPTg8tO6mlAgHd5WjaDWr6J4BZHFouhYYSYdMxw7wAzOmHe757tk5UFLsKht9c42jPIvhqOtoeyRw4z1xvMOA2KK" />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold tracking-tight">Add New Hospital</h2>
                            <p className="text-placeholder-light dark:text-placeholder-dark mt-1">Fill in the details below to add a new hospital to the system.</p>
                        </div>
                        <div className="bg-card-light dark:bg-card-dark p-6 sm:p-8 rounded-xl shadow-sm">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2" htmlFor="hospital-name">Hospital Name</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="hospital-name" placeholder="e.g. General Hospital" type="text" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="address" placeholder="e.g. 123 Main Street, Anytown, USA" type="text" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="email" placeholder="e.g. contact@generalhospital.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone Number</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="phone" placeholder="e.g. (123) 456-7890" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="sub-start">Subscription Start</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="sub-start" type="date" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="sub-end">Subscription End</label>
                                    <input className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark" id="sub-end" type="date" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2" htmlFor="status">Status</label>
                                    <select className="w-full bg-input-light dark:bg-input-dark border border-border-light dark:border-border-dark rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary" id="status">
                                        <option>Select status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                                    <button className="px-6 py-3 rounded-lg text-sm font-semibold bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors" type="button">Cancel</button>
                                    <button className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors" type="submit">Add Hospital</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddHospitalPage;
