const PrimaryButton = ({
	classes = "",
	type = "button",
	handler,
	disabled = false,
	children,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={handler ? handler : undefined}
			className={`bg-[#004E7E] text-white border border-[#004E7E] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D9E8F2] hover:text-[#002F4C] hover:border-[#B0D0E4] text-center transition-all duration-200 font-semibold antialiased ${classes}`}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
