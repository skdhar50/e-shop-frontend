import Spinner from "../Spinner/Spinner";

const DangerButton = ({
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
			className={`bg-[#F6E6E6] antialiased hover:bg-[#F6CECE] hover:border-[#F2D9D9] text-[#913215] border border-[#F2D9D9] disabled:hover:bg-[#F6E6E6] disabled:hover:text-[#913215] disabled:opacity-50 disabled:cursor-not-allowed  hover:text-[#913215] flex justify-center items-center ${classes} px-4`}
		>
			{isLoading && <Spinner color="rgb(145, 50, 21)" />}
			<div
				className={`flex items-center justify-center transition-all duration-200 font-semibold w-full h-full`}
			>
				{children}
			</div>
		</button>
	);
};

export default DangerButton;
