import React from 'react';

const NotificationsPage = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <div className="flex flex-col min-h-screen">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-4 sm:px-6 lg:px-10 py-3 bg-surface-light dark:bg-surface-dark shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="text-primary w-8 h-8">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold">MediTrack</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Dashboard</a>
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Assets</a>
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Work Orders</a>
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Parts</a>
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Vendors</a>
                        <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors" href="#">Reports</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-full p-2 hover:bg-primary/10 dark:hover:bg-primary/20 text-subtext-light dark:text-subtext-dark hover:text-primary dark:hover:text-primary transition-colors">
                            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                            </svg>
                            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-primary"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChr_q43zRfEZhgwCJaHNa5DL2lmN4UuHCRrDPVMsP37pz0wULV3DdxomNkYk9QKYbaHbmAEcVobEvOW81Ab2q230TMoLLeEMJvtBbDM62pYABiDXzIuwvYk_HzFWfJeEHHoNFZNHcgTY1vLEVGAvzy_-kZNOeL9JA7xs8g5gfYOWqu3q3XBg-e97J3mRYi8ZmcWLu_MRM4KwB8L-c_a19YMhHdvwrWShL6prGVpEqpYyxKeMeWyvpNaZqcGqx45Z7Sw6AHkYpELAoZ")' }}></div>
                    </div>
                </header>
                <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden">
                            <div className="border-b border-border-light dark:border-border-dark">
                                <div className="flex items-center gap-2 sm:gap-4 p-2">
                                    <a className="flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold flex-1 justify-center transition-colors bg-primary/10 text-primary" href="#">
                                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"></path>
                                        </svg>
                                        <span>In-App</span>
                                    </a>
                                    <a className="flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold flex-1 justify-center transition-colors text-subtext-light dark:text-subtext-dark hover:bg-primary/10 hover:text-primary dark:hover:text-primary" href="#">
                                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                                        </svg>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a className="flex flex-col sm:flex-row items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold flex-1 justify-center transition-colors text-subtext-light dark:text-subtext-dark hover:bg-primary/10 hover:text-primary dark:hover:text-primary" href="#">
                                        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                                        </svg>
                                        <span>Email</span>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6 space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold mb-4 px-2">Today</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-text-light dark:text-text-dark">New Work Order Assigned</p>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">Work Order #12345</p>
                                            </div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5"></div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-text-light dark:text-text-dark">Preventive Maintenance Due</p>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">Asset #A6789</p>
                                            </div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5"></div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-text-light dark:text-text-dark">Calibration Due</p>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">Asset #B1234</p>
                                            </div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-4 px-2">Yesterday</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors opacity-70">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-text-light dark:text-text-dark">Work Order Completed</p>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">Work Order #12344</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors opacity-70">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-text-light dark:text-text-dark">Warranty Expiring Soon</p>
                                                <p className="text-sm text-subtext-light dark:text-subtext-dark">Asset #C5678</p>
                                            </div>
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

export default NotificationsPage;
