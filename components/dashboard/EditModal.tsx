'use client';
import React from 'react';
const { useState } = React;
import RichTextEditor from '@/components/dashboard/RichTextEditor';

interface EditModalProps {
  initialTitle?: string;
  initialDescription?: string;
  onTitleChange?: (title: string) => void;
  onDescriptionChange?: (description: string) => void;
}

export default function EditModal({
  initialTitle = '',
  initialDescription = '',
  onTitleChange,
  onDescriptionChange,
}: EditModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const MAX_TITLE_LENGTH = 256;

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    onTitleChange?.(value);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text');
    const current = title;
    const remaining = MAX_TITLE_LENGTH - current.length;
    if (pasted.length > remaining) {
      e.preventDefault();
      const truncated = pasted.slice(0, Math.max(0, remaining));
      const newValue = current + truncated;
      setTitle(newValue);
      onTitleChange?.(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-[24px] sm:gap-[40px]">

      {/* Title Section */}
      <div className="flex flex-col gap-[8px] sm:gap-[12px]">
        <label className="hidden md:flex font-medium text-[#1A1A1A] text-[18px] sm:text-[20px] flex-row gap-[4px] items-center">
          Title
          <span className="bg-[#FCEFF1] text-[#E05A6F] px-2 py-0.5 rounded text-[12px]">(required)</span>
        </label>
        <div className="flex flex-col gap-[4px] text-[#4A4A4A]">
          <input
            type="text"
            placeholder="Enter the title here"
            className="w-full rounded-[8px] px-[8px] py-[4px] bg-[#F6FAFD] border border-[#7E9CAD] text-[14px] font-medium"
            value={title}
            onChange={handleTitleChange}
            onPaste={handlePaste}
            maxLength={MAX_TITLE_LENGTH}
          />
          <div className="flex justify-between px-[8px] sm:px-[16px] text-[12px] sm:text-[14px]">
            <span>{title.length} Characters</span>
            <span>Maximum {MAX_TITLE_LENGTH} Characters</span>
          </div>
        </div>
      </div>

      {/* Description Section with RichTextEditor */}
      <RichTextEditor
        initialContent={initialDescription}
        onChange={onDescriptionChange}
      />
    </div>
  );
}
