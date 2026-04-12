import React from "react";
import {Logo} from "../logo/";

export default function Sidebar() {
	const navItems = [{label: "All contents"}, {label: "Published"}, {label: "Archived"}, {label: "Events"}];

	return (
		<div className='flex flex-col flex-shrink-0 flex-none gap-[16px] w-[60px] min-w-[60px] bg-[#FFFFFF] rounded-[20px] px-2 py-4 xl:px-[16px] xl:py-[24px] xl:w-[244px] xl:rounded-[16px] md:px-[4px] md:py-[16px] md:w-[60px] min-h-[680px] h-min text-[#1a1a1a] font-[family-name:_var(--font-manrope)]'>
			{/* Header Section */}
			<div className='w-full h-fit md:w-[52px] md:h-[40px]'>
				<Logo
					variant='header'
					className='hidden xl:flex h-auto w-full min-w-0 object-contain'
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
			<nav className='flex flex-col w-full gap-[10px] p-[10px]'>
				{navItems.map((item, index) => (
					<div
						key={index}
						className='flex flex-row items-center gap-[12px]'
					>
						<div className='xl:p-[8px]'>
							<img
								src='/nav-item-icon.svg'
								className='w-[43px] h-auto object-contain'
							/>
						</div>
						<span className='hidden xl:block   h-fit w-full align-center justify center'>
							{item.label}
						</span>
					</div>
				))}
			</nav>
		</div>
	);
}
