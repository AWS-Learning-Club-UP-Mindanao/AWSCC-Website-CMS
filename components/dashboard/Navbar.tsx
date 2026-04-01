import React from 'react';
import { Logo } from "../logo/"; 

export default function Sidebar() {
    const navItems = [
        { label: "All contents" },
        { label: "Published" },
        { label: "Archived" },
        { label: "Events" }
    ];

    return (
        <div className="flex flex-col gap-[16px] bg-[#FFFFFF] px-2 py-4 xl:px-[16] xl:py-[24] rounded-[20px] xl:rounded-[16px] md:w-[60px] xl:w-[244px] min-h-[680px] h-min text-[#1a1a1a] font-[family-name:_var(--font-manrope)]">
            {/* Header Section */}
            <div className="w-full h-fit overflow-hidden">
                <Logo variant="header" className="hidden xl:flex h-auto w-full min-w-0 object-contain"/>
                <Logo variant="logo" className="hidden md:block  xl:hidden h-auto w-full min-w-0 object-contain"/>
            </div>
            {/* Divider */}
            <div className="min-w-full h-[2px] bg-[#3B4951] rounded-full"></div>

            {/* Navigation Items */}
            <nav className="flex flex-col w-full gap-[10px] p-[10px]">
                {navItems.map((item, index) => (
                    <div key={index} className="nav-item flex flex-row items-center gap-[12px]">
                        <div className="nav-icon">
                            <img 
                                src="/nav-item-icon.svg" 
                                className="w-[43px] h-auto object-contain" 
                            />
                        </div>
                        <span className="hidden xl:block  nav-text h-fit w-full align-center justify center">{item.label}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
}
