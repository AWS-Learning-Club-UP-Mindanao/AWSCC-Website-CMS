"use client";
import {Logo} from "../logo/";
import React, { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
	const navItems = [{label: "All contents"}, {label: "Published"}, {label: "Archived"}, {label: "Events"}];

	return (
        <>
            {/* Mobile Trigger */}
            <button
                onClick={() => setOpen(true)}
                className="md:hidden fixed top-[25px] left-[8px] z-39 p-[8px] rounded-full"
            >
                <Logo variant="logo" 
                        className="h-[40px] w-[40px]" />
            </button>

            {/* Tablet-Desktop Navbar */}
            <div className='hidden md:flex flex-col flex-none gap-[16px] w-[60px] min-w-[60px] bg-[#FFFFFF] rounded-[20px] px-2 py-4 xl:px-[16px] xl:py-[24px] xl:w-[244px] xl:rounded-[16px] md:px-[4px] md:py-[16px] md:w-[60px] min-h-[680px] h-min text-[#1a1a1a] font-[family-name:_var(--font-manrope)]'>
                {/* Header Section */}
                <div className='w-full xl:w-fit h-fit'>
                    <Logo
                        variant='header'
                        className='hidden xl:flex h-auto w-fit min-w-0 object-contain'
                    />
                    <div className='hidden md:flex xl:hidden w-full h-[40px] items-center justify-center'>
                        <Logo
                            variant='logo'
                            className='h-full  object-contain'
                        />
                    </div>
                </div>
                {/* Divider */}
                <div className='min-w-full h-[2px] bg-[#3B4951] rounded-full'></div>

                {/* Navigation Items */}
                <nav className='flex flex-col w-full gap-[10px] xl:p-[10px] justify-center '>
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-row justify-center items-center gap-[12px] md:w-full'
                        >
                            <div className='xl:p-[8px]'>
                                <img
                                    src='/nav-item-icon.svg'
                                    className='w-[21px] xl:w-[43px] h-auto object-contain'
                                />
                            </div>
                            <span className='hidden xl:block   h-fit w-full align-center justify center'>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </nav>
            </div>
            {/* Mobile Drawer */}
            <div
                className={`absolute flex flex-col left-0 top-0 w-full h-full z-40 bg-white transform transition-transform duration-300 px-[16px] py-[24px] ${
                    open ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                    {/* Header */}
                    <div className="flex items-center  mb-6 justify-center">
                        <button onClick={() => setOpen(false)}>
                            <Logo variant="mobile" />
                        </button>
                    </div>

                    <div className="h-[2px] bg-[#3B4951] mb-6"></div>

                    {/* Nav Items */}
                    <nav className="flex flex-col gap-[10px] p-[10px]">
                        {navItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-[12px]">
                                <img src="/nav-item-icon.svg" className="w-[43px] h-[20px]" />
                                <span className="text-[24px]">{item.label}</span>
                            </div>
                        ))}
                    </nav>
            </div>
        </>
	);
}
