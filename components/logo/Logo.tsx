type LogoVariant = "logo" | "header" | "title" | "mobile";

interface LogoProps {
    variant?: LogoVariant;
    className?:string;
}

export default function Logo({
    variant = "logo",
        className = "",
}: LogoProps) {
        const variants = {
            logo: {
                showText: false,
                layout: "",
            },
            header: {
                showText: true,
                layout: "flex flex-row gap-[12px] w-full",
            },
            title: {
                showText: true,
                layout: "flex flex-row gap-[10px]",
            },
            mobile: {
                showText: false,
                layout: "w-[286px] h-fit flex flex-col gap-[12px]",
            },
        };

const config = variants[variant];

return(
    <div className={config.layout}>
        <img 
            src="/AWSCCLogo.png" 
            className="w-full h-auto object-contain" 
        />

        {config.showText && (
            <span className="flex flex-col justify-center">
                <h1 className="whitespace-nowrap font-bold leading-tight font-manrope 
                               text-[16px]"> 
                    AWSCC UPMIN
                </h1>
                <p className="font-medium leading-tight tracking-[1%] 
                              text-[10px]">
                    Content Management System
                </p>
            </span>
        )}
    </div>
  );
}

