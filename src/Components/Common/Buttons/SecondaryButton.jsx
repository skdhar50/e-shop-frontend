const SecondaryButton = ({
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
			className={`bg-[#E6F0F6] text-[#004E7E] border border-[#B0D0E4] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#D9E8F2] hover:text-[#003E65] hover:border-[#0068A8] text-center transition-all duration-200 font-semibold antialiased ${classes}`}
		>
			{children}
		</button>
	);
};

export default SecondaryButton;
