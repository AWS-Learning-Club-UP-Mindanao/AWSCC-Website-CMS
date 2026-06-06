'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import EditModal from '@/components/dashboard/EditModal';
import StatusModal from '@/components/dashboard/StatusModal';

export default function EventForm() {
  const router = useRouter();
  const [view, setView] = React.useState<'edit' | 'status'>('edit');

  return (
    <div
      id='content'
      className='w-full p-[10px] gap-[10px] flex flex-col'
    >
      {/* Page Header */}
      <div className="flex flex-col items-center gap-1">
        {/* Mobile: centered layout */}
        <div className="flex md:hidden flex-col items-center gap-1 w-full">
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full">
            <h1 className="text-[20px] sm:text-[24px] font-bold text-[#1a1a1a]">
              EDIT CONTENT
            </h1>
          </div>
          <p className="text-[16px] sm:text-[18px]">
            <span className="text-[#777777]">Websites</span>
            <span className="text-[#777777]"> / </span>
            <span className="text-[#1a1a1a] font-bold">Untitled</span>
          </p>
        </div>

        {/* Tablet+: left-aligned header row */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-3">
            <button onClick={() => router.push('/dashboard')} className="w-8 h-8 flex items-center justify-center">
              <img src="/back-arrow.svg" className="w-5 h-5" alt="Back" />
            </button>
            <p className="text-[16px] sm:text-[18px]">
              <span className="text-[#777777]">Websites</span>
              <span className="text-[#777777]"> / </span>
              <span className="text-[#1a1a1a] font-bold">Untitled</span>
            </p>
            <div className="flex items-center gap-1">
              <img src="/link.svg" className="w-4 h-4" alt="Links" />
              <span className="text-[14px] text-[#1a1a1a]">0</span>
            </div>
          </div>

          {/* Tablet toggle button (hidden on desktop — both panels visible) */}
          <button
            onClick={() => setView(view === 'edit' ? 'status' : 'edit')}
            className="lg:hidden bg-[#72c05b] hover:bg-[#64a950] text-white text-[14px] font-medium px-[16px] py-1.5 rounded-xl transition-colors uppercase tracking-wide"
          >
            {view === 'edit' ? 'PUBLISH' : 'EDIT'}
          </button>
        </div>
      </div>

      {/* Form Cards (separate cards on desktop) */}
      <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[24px] lg:gap-[32px]">
        {/* Edit Card */}
        <div
          className={`bg-white rounded-[12px] overflow-hidden px-4 py-6 w-full ${
            view === 'edit' ? 'block' : 'hidden lg:block'
          }`}
        >
          {/* Mobile only: Title label + PUBLISH toggle */}
          <div className="flex items-center justify-between md:hidden mb-[24px] sm:mb-[40px]">
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
          <EditModal
            initialTitle='mock title'
            initialDescription='mock description'
          />
        </div>

        {/* Status Card */}
        <div
          className={`bg-white rounded-[12px] overflow-hidden px-4 py-6 w-full lg:w-[280px] h-fit ${
            view === 'status' ? 'block' : 'hidden lg:block'
          }`}
        >
          <StatusModal onEditClick={() => setView('edit')} />
        </div>
      </div>
    </div>
  );
}
