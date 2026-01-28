"use client";

import { useRouter } from "next/navigation";
import LoginBackground from "./components/Background";

export default function LoginPage() {
  const router = useRouter();

  return (
    <LoginBackground>
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

        {/* Login form section */}
        <div className="flex-1 flex flex-col gap-8 items-center justify-center w-full">
          {/* Title */}
          <div className="w-full text-center">
            <h2 className="text-[#1a1a1a] font-bold text-[24px] leading-[32px] font-[family-name:_var(--font-manrope)]">
              Welcome
            </h2>
          </div>

          {/* Form content */}
          <div className="w-full flex flex-col gap-4 items-center max-w-sm">
            <p className="text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)]">
              Please Enter Admin Credentials
            </p>

            {/* Username input */}
            <div className="w-full">
              <div className="bg-[#f6fafd] border border-[#7e9cad] rounded-lg p-2">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] placeholder-[#4a4a4a] outline-none font-[family-name:_var(--font-manrope)]"
                />
              </div>
            </div>

            {/* Password input */}
            <div className="w-full">
              <div className="bg-[#f6fafd] border border-[#7e9cad] rounded-lg p-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] placeholder-[#4a4a4a] outline-none font-[family-name:_var(--font-manrope)]"
                />
              </div>
            </div>
          </div>

          {/* Login button and forgot password */}
          <div className="flex flex-col gap-2 items-center w-full max-w-sm">
            <button
              onClick={() => router.push("/login/verification")}
              className="bg-[#6bbf59] hover:bg-[#5caa4a] active:bg-[#4d9c3b] text-[#f0f9ee] font-semibold text-[16px] leading-[28px] uppercase rounded-lg px-16 py-3 transition-colors font-[family-name:_var(--font-manrope)] w-full"
            >
              Login
            </button>
            <p className="text-[#4a4a4a] font-medium text-[14px] leading-[20px] tracking-[0.14px] font-[family-name:_var(--font-manrope)] cursor-pointer hover:text-[#1a1a1a]">
              Forgotten Your Password?
            </p>
          </div>
        </div>
      </div>
    </LoginBackground>
  );
}
