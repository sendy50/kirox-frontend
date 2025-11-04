import React from 'react';

interface SidebarProps {
    activeItem: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem }) => {
    const menuItems = [
        { name: 'Dashboard', icon: 'dashboard' },
        { name: 'Work Orders', icon: 'assignment' },
        { name: 'Inventory', icon: 'inventory_2' },
        { name: 'Reports', icon: 'bar_chart' },
        { name: 'Settings', icon: 'settings' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-background-dark border-r border-subtle-light dark:border-subtle-dark flex-col hidden lg:flex">
            <div className="flex items-center gap-2 h-16 border-b border-subtle-light dark:border-subtle-dark px-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                    spark
                </span>
                <h1 className="text-xl font-bold text-foreground-light dark:text-foreground-dark">MediTrack</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        className={`flex items-center gap-3 px-4 py-2 rounded-DEFAULT ${
                            activeItem === item.name
                                ? 'bg-primary/10 text-primary dark:bg-primary/20'
                                : 'text-muted-light dark:text-muted-dark hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20'
                        }`}
                        href="#"
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
