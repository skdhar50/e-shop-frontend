import Spinner from "../Spinner/Spinner";

const PrimaryButton = ({
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
			className={`bg-[#004E7E] text-white hover:text-[#002F4C] hover:border-[#B0D0E4] hover:bg-[#D9E8F2] border border-[#004E7E] disabled:hover:bg-[#004E7E] disabled:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed antialiased flex items-center justify-center ${classes} px-4`}
		>
			{isLoading && <Spinner color="" />}

			<div
				className={`flex justify-center items-center transition-all duration-200 font-semibold w-full h-full`}
			>
				{children}
			</div>
		</button>
	);
};

export default PrimaryButton;
