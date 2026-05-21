'use client';
import React from 'react';

interface InsertMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (url: string) => void;
}

export default function InsertMediaModal({ isOpen, onClose, onInsert }: InsertMediaModalProps) {
  const [tab, setTab] = React.useState<'upload' | 'url'>('upload');
  const [url, setUrl] = React.useState('');
  const [fileName, setFileName] = React.useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleInsert = () => {
    if (tab === 'upload' && fileName) {
      onInsert(`/uploads/${fileName}`);
    } else if (tab === 'url' && url.trim()) {
      onInsert(url.trim());
    }
    setUrl('');
    setFileName('');
    onClose();
  };

  const isValid = tab === 'upload' ? !!fileName : !!url.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-xl w-full max-w-[400px] shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
          <h3 className="text-[18px] font-semibold text-[#1a1a1a]">Insert Media</h3>
          <button
            onClick={onClose}
            className="text-[#6b7280] hover:text-[#1a1a1a] text-[24px] leading-none"
          >
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#e5e7eb]">
          <button
            onClick={() => setTab('upload')}
            className={`flex-1 py-3 text-[14px] font-medium transition-colors ${
              tab === 'upload'
                ? 'text-[#1a1a1a] border-b-2 border-[#72c05b]'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            Upload
          </button>
          <button
            onClick={() => setTab('url')}
            className={`flex-1 py-3 text-[14px] font-medium transition-colors ${
              tab === 'url'
                ? 'text-[#1a1a1a] border-b-2 border-[#72c05b]'
                : 'text-[#6b7280] hover:text-[#1a1a1a]'
            }`}
          >
            URL
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-5">
          {tab === 'upload' ? (
            <div key="upload-tab" className="flex flex-col gap-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#d1d5db] rounded-lg p-8 text-center cursor-pointer hover:border-[#72c05b] hover:bg-[#f0fdf4] transition-colors"
              >
                <svg className="w-10 h-10 mx-auto text-[#9ca3af] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-[14px] text-[#6b7280]">
                  {fileName ? fileName : 'Click to browse or drag & drop'}
                </p>
                <p className="text-[12px] text-[#9ca3af] mt-1">PNG, JPG, GIF, MP4 up to 10MB</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          ) : (
            <div key="url-tab" className="flex flex-col gap-3">
              <label className="text-[14px] font-medium text-[#374151]">Media URL</label>
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full rounded-lg border border-[#d1d5db] px-4 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#72c05b]/40 focus:border-[#72c05b]"
              />
              <p className="text-[12px] text-[#9ca3af]">Enter a direct link to an image or video</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-5 py-4 border-t border-[#e5e7eb]">
          <button
            onClick={onClose}
            className="px-5 py-2 text-[14px] font-medium text-[#6b7280] hover:text-[#1a1a1a] rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleInsert}
            disabled={!isValid}
            className={`px-5 py-2 text-[14px] font-medium text-white rounded-lg transition-colors ${
              isValid
                ? 'bg-[#72c05b] hover:bg-[#64a950]'
                : 'bg-[#d1d5db] cursor-not-allowed'
            }`}
          >
            Insert
          </button>
        </div>
      </div>
    </div>
  );
}
