type LogoVariant = "logo" | "header" | "title" | "mobile";

interface LogoProps {
	variant?: LogoVariant;
	className?: string;
}

export default function Logo({variant = "logo", className = ""}: LogoProps) {
	const variants = {
		logo: {
			showText: false,
			layout: "",
		},
		header: {
			showText: true,
			layout: "flex flex-row gap-[12px]",
		},
		title: {
			showText: true,
			layout: "flex flex-row gap-[10px]",
		},
		mobile: {
			showText: true,
        layout: "flex flex-col items-center gap-[12px] w-full"
		},
	};

	const config = variants[variant];

	return (
		<div className={`${config.layout} ${className}`}>
			<img
				src='/AWSCCLogo.png'
				className='object-contain xl:w-[70px] md:w-[40px] w-[70px]'
			/>

			{config.showText && (
				<span className='flex flex-col justify-center'>
					<h1
						className='font-bold leading-tight font-manrope 
                               text-[16px]'
					>
						AWSCC UPMIN
					</h1>
					<p
						className='font-medium leading-tight tracking-[1%] 
                              text-[10px]'
					>
						Content Management System
					</p>
				</span>
			)}
		</div>
	);
}
