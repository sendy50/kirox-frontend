'use client';
import React, { useState, useEffect } from 'react';

const AddInventoryItemPage = () => {
    const [purchasedQuantity, setPurchasedQuantity] = useState(0);
    const [used, setUsed] = useState(0);
    const [stockLeft, setStockLeft] = useState(0);

    useEffect(() => {
        const stock = purchasedQuantity - used;
        setStockLeft(stock >= 0 ? stock : 0);
    }, [purchasedQuantity, used]);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-foreground-light dark:text-foreground-dark">
            <div className="flex min-h-screen">
                <aside className="w-64 bg-white dark:bg-background-dark border-r border-subtle-light dark:border-subtle-dark flex-col hidden lg:flex">
                    <div className="flex items-center gap-2 h-16 border-b border-subtle-light dark:border-subtle-dark px-6">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            spark
                        </span>
                        <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">MediTrack</h1>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                        <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20" href="#">
                            <span className="material-symbols-outlined">assignment</span>
                            <span>Work Orders</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT bg-primary/10 text-primary dark:bg-primary/20" href="#">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span>Inventory</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20" href="#">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <span>Reports</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-DEFAULT text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            <span>Settings</span>
                        </a>
                    </nav>
                </aside>
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
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center gap-4 mb-6">
                                <a className="p-2 rounded-full hover:bg-subtle-light dark:hover:bg-subtle-dark" href="#">
                                    <span className="material-symbols-outlined">arrow_back</span>
                                </a>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">Add New Inventory Item</h2>
                                    <p className="text-muted-light dark:text-muted-dark">Manually add a new item to the inventory.</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-background-dark/50 rounded-lg border border-subtle-light dark:border-subtle-dark p-6 sm:p-8">
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2" htmlFor="item_name">Item Name</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">inventory</span>
                                            <input className="pl-10 pr-4 py-3 w-full bg-background-light dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-DEFAULT focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm" id="item_name" name="item_name" placeholder="e.g., Ventilator Filters" required type="text" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2" htmlFor="purchased_quantity">Purchased Quantity</label>
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">shopping_cart</span>
                                                <input
                                                    className="pl-10 pr-4 py-3 w-full bg-background-light dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-DEFAULT focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                                                    id="purchased_quantity"
                                                    name="purchased_quantity"
                                                    onChange={(e) => setPurchasedQuantity(parseInt(e.target.value) || 0)}
                                                    placeholder="e.g., 100"
                                                    required
                                                    type="number"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2" htmlFor="used">Used</label>
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">outbox</span>
                                                <input
                                                    className="pl-10 pr-4 py-3 w-full bg-background-light dark:bg-subtle-dark border border-subtle-light dark:border-subtle-dark rounded-DEFAULT focus:ring-2 focus:ring-primary focus:border-primary transition-all text-sm"
                                                    id="used"
                                                    name="used"
                                                    onChange={(e) => setUsed(parseInt(e.target.value) || 0)}
                                                    placeholder="e.g., 20"
                                                    required
                                                    type="number"
                                                />
                                            </div>
                                            <p className="text-xs text-danger-light mt-1 hidden">Used quantity cannot exceed purchased quantity.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground-light dark:text-foreground-dark mb-2" htmlFor="stock_left">Stock Left</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-light dark:text-muted-dark">inventory_2</span>
                                            <input
                                                className="pl-10 pr-4 py-3 w-full bg-subtle-light/40 dark:bg-subtle-dark/40 border border-subtle-light dark:border-subtle-dark rounded-DEFAULT text-sm font-semibold"
                                                id="stock_left"
                                                name="stock_left"
                                                readOnly
                                                type="number"
                                                value={stockLeft}
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition-all" type="submit">
                                            <span className="material-symbols-outlined text-lg">add</span>
                                            <span>Add Item</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AddInventoryItemPage;
