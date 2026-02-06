'use client';

import React from 'react';

const StatusWidget = () => {
    return (
        /* The body styles are now handled by font-sans (Inter) and bg-white */
        <div className="flex flex-col gap-[40px]">
            {/* Status Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-[20px] font-medium text-[#1a1a1a] border-b border-black pb-1">
                    Status
                </h2>
                
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center ">
                        <span className="text-[14px] text-[#4a4a4a]">Current</span>
                        <span className="bg-[#FCEFF1] text-[#E05A6F] px-3 py-1 rounded text-[14px]">
                            Draft
                        </span>
                    </div>
                    <button className="w-full bg-[#72c05b] hover:bg-[#64a950] text-white text-[22px] font-medium px-[52px] py-4 rounded-xl transition-colors  uppercase tracking-wide">
                        PUBLISH
                    </button>
                </div>
                <p className="text-center text-[#1a1a1a] text-[14px]">
                    Last Saved in a few seconds
                </p>
            </div>

            {/* Preview Section */}
            <div className="flex flex-col gap-5">
                <h2 className="text-[20px] font-medium text-[#1a1a1a] border-b border-black pb-1">
                    Preview
                </h2>

                <div className="flex gap-3 items-center">
                    <button className="flex items-center justify-center gap-1 border-2 
                                        border-[#4a5d68] rounded-lg px-2 py-[6px] bg-[#f8fafb]
                                        hover:bg-[#f0f4f7] transition-colors">
                        <span className="text-[#4a5d68] font-semibold text-[10px]
                                        tracking-tight">
                                        OPEN LIVE PREVIEW</span>
                        <div className="w-[1px] h-6 bg-[#3B4951]"></div>
                            <img 
                                src="/toolbar/externalopen-icon.svg" 
                                className="w-6 h-6 object-contain" 
                            />
                    </button>
                    
                    <button className="w-fit h-fit p-2 flex items-center justify-center border-2 border-[#4a5d68] rounded-lg bg-[#f8fafb] hover:bg-[#f0f4f7] transition-colors">
                            <img 
                                src="/link.svg" 
                                className="w-5 h-5 object-contain" 
                            />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatusWidget;
