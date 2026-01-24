'use client';

// Background asset URLs
const bgVectorTop = 'https://www.figma.com/api/mcp/asset/68c895b2-519a-42a9-bc8c-9c77c70b559c';
const bgVectorLeft = 'https://www.figma.com/api/mcp/asset/96372cb9-343f-43be-a203-f578e5c8964a';
const bgVectorBottomRight1 = 'https://www.figma.com/api/mcp/asset/7b1b60e3-2665-4650-b5fd-12193db0d75b';
const bgVectorCenter = 'https://www.figma.com/api/mcp/asset/920aa1b4-c975-43c6-bb71-0153c56ed70c';
const bgVectorTopRight = 'https://www.figma.com/api/mcp/asset/fb53177e-f7ba-428b-b9bd-84df52fcf265';

export default function ForgotPasswordPage() {

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
          />
        </div>

        {/* Top left vector */}
        <div className="absolute top-[21px] left-[18px] w-[271px] h-[355px] overflow-hidden">
          <img
            alt=""
            src={bgVectorLeft}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom right vector 1 */}
        <div className="absolute bottom-[80px] -right-[198px] w-[406px] h-[410px] overflow-hidden">
          <img
            alt=""
            src={bgVectorBottomRight1}
            className="w-full h-full object-cover"
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

        {/* Set your new password section */}
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full">
          {/* Title */}
          <div className="w-full text-center">
            <h2 className="text-[#1a1a1a] font-bold text-[24px] leading-[32px] font-[family-name:_var(--font-manrope)]">
              Set your new password
            </h2>
          </div>

          {/* Form content */}
          <div className="w-full flex flex-col gap-4 items-center max-w-sm">
            <p className="text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)]">
              Enter and confirm your new password.
            </p>

            {/* Enter new password */}
            <div className="w-full">
              <div className="bg-[#f6fafd] border border-[#7e9cad] rounded-lg p-2">
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-transparent text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] placeholder-[#4a4a4a] outline-none font-[family-name:_var(--font-manrope)]"
                />
              </div>
            </div>

            {/* Re-enter new password */}
            <div className="w-full">
              <div className="bg-[#f6fafd] border border-[#7e9cad] rounded-lg p-2">
                <input
                  type="password"
                  placeholder="Re-enter new password"
                  className="w-full bg-transparent text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] placeholder-[#4a4a4a] outline-none font-[family-name:_var(--font-manrope)]"
                />
              </div>
            </div>
          </div>

          {/* Update password button */}
          <div className="flex flex-col gap-2 items-center w-full max-w-sm">
            <button
              className="bg-[#6bbf59] hover:bg-[#5caa4a] active:bg-[#4d9c3b] text-[#f0f9ee] font-semibold text-[16px] leading-[28px] uppercase rounded-lg px-16 py-3 transition-colors font-[family-name:_var(--font-manrope)] w-full"
            >
              Update Password
            </button>
            <p className="text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)] cursor-pointer hover:text-[#1a1a1a]">
              Cancel and return to sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
