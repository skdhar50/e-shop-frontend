import Spinner from "../Spinner/Spinner";

const SecondaryButton = ({
	classes = "",
	type = "button",
	handler,
	disabled = false,
	isLoading = false,
	children,
}) => {
	return (
		<button
			type={type}
			disabled={disabled || isLoading}
			onClick={handler ? handler : undefined}
			className={`bg-[#E6F0F6] text-[#004E7E] border border-[#B0D0E4] disabled:hover:bg-[#E6F0F6] disabled:hover:text-[#004E7E] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D9E8F2] hover:text-[#003E65] hover:border-[#0068A8] antialiased flex justify-center items-center ${classes} px-4`}
		>
			{isLoading && <Spinner color="rgb(44, 89, 138)" />}
			<div className="flex justify-center items-center transition-all duration-200 font-semibold w-full h-full">
				{children}
			</div>
		</button>
	);
};

export default SecondaryButton;
