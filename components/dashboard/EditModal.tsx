'use client';
import React from 'react';
const { useState } = React;

export default function EditorApp({ initialTitle = '', initialDescription = '' }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [view, setView] = useState('editor');

    return (
        <div className="flex flex-col gap-[40px]">
            
            {/* Title Section */}
            <div className="flex flex-col gap-[12px]">
                <label className="font-medium text-[#1A1A1A] text-[20px] flex flex-row gap-[4px] items-center">
                    Title 
                    <span className="text-[14px] text-[#4a4a4a] tracking-wider">(required)</span>
                </label>
                <div className="flex flex-col gap-[4px] text-[#4A4A4A]">
                    <input
                        type="text"
                        placeholder="Enter the title here"
                        className="w-full rounded-[8px] px-[8px] py-[4px] bg-[#F6FAFD]  border border-[#7E9CAD] text-[14px] font-medium"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="flex justify-between px-[16px]">
                        <span>{title.length} Characters</span>
                        <span>Maximum 256 Characters</span>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col gap-[12px]">
                <label className="font-medium text-[#1A1A1A] text-[20px] flex flex-row gap-[4px] items-center">
                    Description <span className="text-[14px] text-[#4a4a4a] tracking-wider">(required)</span>
                </label>
                <div className="flex justify-center gap-[10px]">
                    {/* .toggle-bg -> bg-[#d1d5db] */}
                    <div className="bg-[#d1d5db] p-1 rounded-full text-[#3B4951] flex items-center w-48">
                        <button
                            onClick={() => setView('editor')}
                            className={`flex-1 py-1.5 px-4  rounded-full text-sm font-medium transition-colors ${
                                view === 'editor' 
                                ? 'bg-[#A8D0E6] shadow-sm' 
                                : ''
                            }`}
                        >
                            Editor
                        </button>
                        <button
                            onClick={() => setView('preview')}
                            className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-colors ${
                                view === 'preview' 
                                ? 'bg-[#A8D0E6]' 
                                : ''
                            }`}
                        >
                            Preview
                        </button>
                    </div>
                </div>

                <div className="bg-[#A8D0E6] rounded-[8px] px-[16px] py-[4px] flex gap-[24px] items-center justify-between h-[32px]">
                    <div className="flex items-left gap-[24px]">
                        <div className="flex h-auto">
                            <button>
                                <img 
                                    src="/toolbar/heading-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                        </div>
                        <div className="flex h-auto">
                            <button>
                                <img 
                                    src="/toolbar/bold-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                            <button>
                                <img 
                                    src="/toolbar/italic-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                            <button>
                                <img 
                                    src="/toolbar/underline-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                        </div>
                        <div className="flex h-auto">
                            <button>
                                <img 
                                    src="/toolbar/unordered-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                            <button>
                                <img 
                                    src="/toolbar/ordered-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                        </div>
                        <div className="flex h-auto">
                            <button>
                                <img 
                                    src="/toolbar/comment-icon.svg" 
                                    className="w-6 h-6 object-contain" 
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center flex-row gap-3 h-full ">
                        <button className="bg-[#EBF0FF] rounded px-2 flex flex-row gap-2 h-full items-center text-[14px] text-[#1a1a1a]">
                                <img 
                                    src="/toolbar/media-icon.svg" 
                                    className="w-4 h-4 object-contain" 
                                />
                                 Insert Media
                        </button>
                        <button className="bg-[#EBF0FF] rounded">
                            <img 
                                src="/toolbar/fullscreen-icon.svg" 
                                className="w-6 h-6 object-contain" 
                            />
                        </button>
                    </div>
                </div>

                    {/* Text Area */}
                <div className="relative">
                    <textarea
                        className="w-full h-auto min-h-50 p-4 rounded-xl border-[4px] border-[#3B4951] resize-none bg-[#F6FAFD]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <div className="mt-[4px] px-[16px] text-right text-[14px] text-[#4A4A4A]">
                        {description.length} Characters
                    </div>
                </div>

            </div>
        </div>
    );
};;
