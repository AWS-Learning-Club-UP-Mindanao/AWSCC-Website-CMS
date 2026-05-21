'use client';
import React from 'react';
import EditModal from '@/components/dashboard/EditModal';
import StatusModal from '@/components/dashboard/StatusModal';

export default function EventForm() {
  const [view, setView] = React.useState<'edit' | 'status'>('edit');

  return (
    <div
      id='content'
      className='w-full p-[10px] gap-[10px] flex flex-col'
    >
      {/* Page Header - Centered */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full">
          <h1 className="text-[20px] sm:text-[24px] font-bold text-[#1a1a1a]">
            EDIT CONTENT
          </h1>
          {/* Tablet toggle button */}
          <button
            onClick={() => setView(view === 'edit' ? 'status' : 'edit')}
            className="hidden md:block lg:hidden bg-[#72c05b] hover:bg-[#64a950] text-white text-[14px] font-medium px-[16px] py-1.5 rounded-xl transition-colors uppercase tracking-wide"
          >
            {view === 'edit' ? 'PUBLISH' : 'EDIT'}
          </button>
        </div>
        <p className="text-[16px] sm:text-[18px]">
          <span className="text-[#777777]">Websites</span>
          <span className="text-[#777777]"> / </span>
          <span className="text-[#1a1a1a] font-bold">Untitled</span>
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[12px] w-full overflow-hidden">
        {/* Mobile-only Title Row with PUBLISH button */}
        <div className="flex items-center justify-between px-[16px] sm:px-[24px] pt-[16px] sm:pt-[24px] pb-[12px] sm:pb-[16px] border-b border-[#e5e7eb] md:hidden">
          <label className="font-medium text-[#1A1A1A] text-[18px] flex items-center gap-[4px]">
            Title
            <span className="bg-[#FCEFF1] text-[#E05A6F] px-2 py-0.5 rounded text-[12px]">(required)</span>
          </label>
          <button
            onClick={() => setView('status')}
            className="bg-[#72c05b] hover:bg-[#64a950] text-white text-[14px] font-medium px-[16px] py-1.5 rounded-xl transition-colors uppercase tracking-wide"
          >
            PUBLISH
          </button>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[24px] lg:gap-[32px] p-[16px] sm:p-[24px]">
          {/* Edit Section */}
          <div
            className={`flex flex-col gap-[24px] sm:gap-[40px] w-full ${
              view === 'edit' ? 'block' : 'hidden lg:block'
            }`}
          >
            <EditModal
              initialTitle='mock title'
              initialDescription='mock description'
            />
          </div>

          {/* Status Section */}
          <div
            className={`flex flex-col gap-[24px] sm:gap-[40px] px-3 sm:px-4 py-4 sm:py-6 w-full lg:w-[240px] h-fit ${
              view === 'status' ? 'block' : 'hidden lg:block'
            }`}
          >
            <StatusModal onEditClick={() => setView('edit')} />
          </div>
        </div>
      </div>
    </div>
  );
}
