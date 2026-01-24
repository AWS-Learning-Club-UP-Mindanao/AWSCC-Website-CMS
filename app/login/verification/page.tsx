"use client";

import { useState, useRef } from "react";

// Background asset URLs
const bgVectorTop =
  "https://www.figma.com/api/mcp/asset/68c895b2-519a-42a9-bc8c-9c77c70b559c";
const bgVectorLeft =
  "https://www.figma.com/api/mcp/asset/96372cb9-343f-43be-a203-f578e5c8964a";
const bgVectorBottomRight1 =
  "https://www.figma.com/api/mcp/asset/7b1b60e3-2665-4650-b5fd-12193db0d75b";
const bgVectorCenter =
  "https://www.figma.com/api/mcp/asset/920aa1b4-c975-43c6-bb71-0153c56ed70c";
const bgVectorTopRight =
  "https://www.figma.com/api/mcp/asset/fb53177e-f7ba-428b-b9bd-84df52fcf265";

export default function ForgotPasswordPage() {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input if value is entered and not the last input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace to move to previous input
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newCode = [...verificationCode];

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newCode[i] = pastedData[i];
    }

    setVerificationCode(newCode);

    // Focus the next empty input or the last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden p-4">
      {/* Animated background container */}
      <div className="absolute inset-0 bg-[#de5fb7] overflow-hidden">
        {/* Top right vector */}
        <div className="absolute -top-[124px] -right-[176px] w-[447px] h-[525px] overflow-hidden">
          <img
            alt=""
            src={bgVectorTop}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Top left vector */}
        <div className="absolute top-[21px] left-[18px] w-[271px] h-[355px] overflow-hidden">
          <img
            alt=""
            src={bgVectorLeft}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Bottom right vector 1 */}
        <div className="absolute bottom-[80px] -right-[198px] w-[406px] h-[410px] overflow-hidden">
          <img
            alt=""
            src={bgVectorBottomRight1}
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        {/* Center rotated vector */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[675px] h-[689px] flex items-center justify-center">
          <div className="-rotate-30 w-[479px] h-[520px]">
            <img
              alt=""
              src={bgVectorCenter}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Top right vector 2 */}
        <div className="absolute -top-[41px] -right-[117px] w-[371px] h-[560px] overflow-hidden">
          <img
            alt=""
            src={bgVectorTopRight}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modal container */}
      <div className="relative z-10 bg-white rounded-2xl items shadow-lg p-6 md:p-10 w-full md:w-[856px] flex flex-col md:flex-row gap-5 md:gap-5 md:m-3">
        {/* Logo section */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-[12px] items-center lg:items-center flex-1 lg:flex-none lg:w-auto w-full justify-center lg:justify-start">
          <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex-shrink-0 lg:flex-shrink-0">
            <img
              alt="AWSCC Logo"
              src="/AWSCCLogo.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 justify-center py-2 text-center lg:text-left lg:justify-start lg:items-center">
            <h1 className="text-[#1a1a1a] font-bold text-[28px] md:text-[36px] leading-[26px] font-[family-name:_var(--font-manrope)]">
              AWSCC UPMIN
            </h1>
            <p className="text-[#1a1a1a] font-medium text-[16px] md:text-[20px] leading-[20px] tracking-[0.2px] font-[family-name:_var(--font-manrope)]">
              Content Management System
            </p>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block w-px h-[300px] flex-shrink-0 bg-[#1A1A1A]"></div>

        {/* MFA Container section */}
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full">
          {/* Title */}
          <div className="w-full text-center">
            <h2 className="text-[#1a1a1a] font-bold text-[24px] leading-[32px] font-[family-name:_var(--font-manrope)]">
              Enter Verification Code
            </h2>
          </div>

          {/* MFA Code Input Fields */}
          <div className="flex gap-3 items-center justify-center">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                inputMode="numeric"
                value={verificationCode[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-[37px] h-[55px] bg-[#f4f2f9] border border-[#a8d0e6] rounded-[2px] text-center text-[#1a1a1a] font-medium text-[20px] outline-none focus:border-[#6bbf59] focus:ring-1 focus:ring-[#6bbf59] transition-colors font-[family-name:_var(--font-manrope)]"
              />
            ))}
          </div>

          {/* Details section */}
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-[#1a1a1a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)]">
              We have sent code to awsccupmin.gmail.com
            </p>
            <p className="text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)] cursor-pointer hover:text-[#1a1a1a]">
              Didn't get a code? Click to respond
            </p>
          </div>

          {/* Enter button */}
          <button className="bg-[#6bbf59] hover:bg-[#5caa4a] active:bg-[#4d9c3b] text-[#f0f9ee] font-semibold text-[16px] leading-[28px] uppercase rounded-lg px-16 py-3 transition-colors font-[family-name:_var(--font-manrope)]">
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
