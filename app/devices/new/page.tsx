'use client';
import React, { useState } from 'react';

const AddDevicePage = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
            <div className="flex min-h-screen w-full flex-col">
                <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-background-light/80 px-4 backdrop-blur-sm dark:border-slate-800/80 dark:bg-background-dark/80 sm:px-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                            </svg>
                            <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50">MediTrack</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200/50 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-2xl"> help </span>
                        </button>
                        <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3f_R3Vfo_KRfxPONdPVRNZisTiWe0BcXcZof78-uPlXnYqYBgubVLSPmxuDBb3Ghhr0TSkw4gJHdnGimVy89QbYvIKC2X1LiQajclAG9g4bXNjSu8qsfN_lhepoyYJS0a9SeZW4MwiP4SYh6SrilPAKLPWUJpvjunpdElSOra-tjwBYQwnxcAsHaF_OXVTh0L3rUxSqNj7LDMxHvMpa9Ri4-MMbT-JnYrme3akf55q7mxtG-MkG61CqC-qWzx-kgXaJX6WeaM_kmi")' }}></div>
                    </div>
                </header>
                <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-4xl">
                        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-background-dark">
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">Add Device Form</h2>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">Fill in the details to add a new device.</p>
                            </div>
                            <div className="px-6 sm:px-8 pb-8">
                                <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
                                    <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                                        <button onClick={() => setStep(1)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${step === 1 ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'}`}>
                                            Basic Info
                                        </button>
                                        <button onClick={() => setStep(2)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${step === 2 ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'}`}>
                                            Technical Info
                                        </button>
                                        <button onClick={() => setStep(3)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${step === 3 ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'}`}>
                                            Maintenance Info
                                        </button>
                                    </nav>
                                </div>
                                <form>
                                    {step === 1 && (
                                        <div>
                                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="sr-no">SR. NO.</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="sr-no" placeholder="Enter Serial Number" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="cc-ncc">CC/NCC</label>
                                                    <select className="mt-1 form-select block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm" id="cc-ncc" required>
                                                        <option value="">Select Type</option>
                                                        <option value="CC">CC</option>
                                                        <option value="NCC">NCC</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="equipment-name">NAME OF EQUIPMENT</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="equipment-name" placeholder="e.g., Defibrillator" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="asset-code">Asset Code</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="asset-code" placeholder="e.g., ICU-DEF-001" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="installation-date">Installation Date</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="installation-date" required type="date" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="department">DEPARTMENT</label>
                                                    <select className="mt-1 form-select block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm" id="department" required>
                                                        <option value="">Select Department</option>
                                                        <option>Intensive Care Unit (ICU)</option>
                                                        <option>Cardiology</option>
                                                        <option>Emergency Room</option>
                                                        <option>Radiology</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 flex justify-end pt-8">
                                                <button onClick={() => setStep(2)} className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="button">
                                                    Next
                                                    <span className="material-symbols-outlined ml-1.5 text-base"> arrow_forward </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div>
                                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="make">MAKE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="make" placeholder="Manufacturer's Name" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="model">MODEL</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="model" placeholder="Model Number" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="equipment-sr-no">Sr.No. Of Equipment</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="equipment-sr-no" placeholder="Equipment Serial Number" required type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="vendor-name">Vendor Name</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="vendor-name" placeholder="Vendor's Name" required type="text" />
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="vendor-contact">Vendor Contact</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="vendor-contact" placeholder="Vendor's Phone or Email" required type="text" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 flex justify-between pt-8">
                                                <button onClick={() => setStep(1)} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:ring-offset-background-dark" type="button">
                                                    <span className="material-symbols-outlined mr-1.5 text-base"> arrow_back </span>
                                                    Back
                                                </button>
                                                <button onClick={() => setStep(3)} className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="button">
                                                    Next
                                                    <span className="material-symbols-outlined ml-1.5 text-base"> arrow_forward </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {step === 3 && (
                                        <div>
                                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="pms-frequency">PMS Frequency</label>
                                                    <select className="mt-1 form-select block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm" id="pms-frequency" required>
                                                        <option value="">Select Frequency</option>
                                                        <option>Monthly</option>
                                                        <option>Quarterly</option>
                                                        <option>Half-Yearly</option>
                                                        <option>Yearly</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="warranty-amc-cmc">WARRANTY/AMC/CMC</label>
                                                    <select className="mt-1 form-select block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:text-sm" id="warranty-amc-cmc" required>
                                                        <option value="">Select Status</option>
                                                        <option>In Warranty</option>
                                                        <option>Under AMC</option>
                                                        <option>Under CMC</option>
                                                        <option>None</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="warranty-due-date">WARRANTY/AMC/CMC DUE DATE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="warranty-due-date" type="date" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="qa">QA</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="qa" placeholder="QA Details" type="text" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="pms-done">PMS DONE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="pms-done" type="date" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="pms-due">PMS DUE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="pms-due" type="date" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="calibration-done">CALIBRATION/QA DONE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="calibration-done" type="date" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="calibration-due">CALIBRATION/QA DUE</label>
                                                    <input className="mt-1 block w-full rounded-lg border-slate-300 bg-white shadow-sm focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:placeholder-slate-500 sm:text-sm" id="calibration-due" type="date" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 flex justify-between pt-8">
                                                <button onClick={() => setStep(2)} className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:ring-offset-background-dark" type="button">
                                                    <span className="material-symbols-outlined mr-1.5 text-base"> arrow_back </span>
                                                    Back
                                                </button>
                                                <button className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark" type="submit">
                                                    <span className="material-symbols-outlined mr-1.5 text-base"> done </span>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddDevicePage;
