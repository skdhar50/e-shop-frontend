const DangerButton = ({
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
			className={`bg-[#F6E6E6] text-[#913215] border border-[#F2D9D9] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F6CECE] hover:text-[#913215] hover:border-[#F2D9D9] text-center transition-all duration-200 font-semibold antialiased ${classes}`}
		>
			{children}
		</button>
	);
};

export default DangerButton;
