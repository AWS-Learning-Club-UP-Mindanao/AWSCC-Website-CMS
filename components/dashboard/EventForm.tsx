import React from "react";
import EditModal from "@/components/dashboard/EditModal";
import StatusModal from "@/components/dashboard/StatusModal";

export default function EventForm() {
	return (
		<div
			id='content'
			className='w-full p-[10px] gap-[10px] flex flex-col '
		>
			<div
				id='header'
				className='flex flex-row gap-[12px] items-center text-[#333333]'
			>
				<div id='back-arrow'>
					<img
						src='/back-arrow.svg'
						className='w-[43px] h-auto object-contain'
					/>
				</div>
				<div
					id='text'
					className='text-black flex flex-row items-center gap-[8px] text-[24px]'
				>
					<p
						id='content-type'
						className='text-[#777777]'
					>
						Websites
					</p>
					/
					<p
						id='content-title'
						className='font-extrabold'
					>
						Untitled
					</p>
				</div>
				<div
					id='link-container'
					className='flex flex-row items-center gap-[8px] p-[4px] bg-[#F2F8FB] rounded-[4px] h-fit'
				>
					<img
						src='/link.svg'
						className='w-[12px] h-auto object-contain'
					/>
					<p
						id='link-number'
						className='text-[12px]'
					>
						0
					</p>
				</div>
				<button className='ml-auto bg-[#72c05b] hover:bg-[#64a950] text-white text-[16px] font-medium px-[52px] py-2 rounded-xl transition-colors  uppercase tracking-wide xl:hidden'>
					PUBLISH
				</button>
			</div>
			<div
				id='edit-section'
				className='flex flex-row gap-[32px] w-full '
			>
				<div
					id='edit-modal'
					className='flex flex-col gap-[40px] p-[24px] bg-white rounded-[12px] w-full max-w-[1200px] h-auto min-h-[620px]'
				>
					<EditModal
						initialTitle='mock title'
						initialDescription='mock description'
					/>
				</div>
				<div
					id='right-modal'
					className='flex flex-col gap-[40px] px-4 py-6 w-[240px] h-fit bg-white rounded-xl xl:flex hidden'
				>
					<StatusModal />
				</div>
			</div>
		</div>
	);
}
