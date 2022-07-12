import { useState, useEffect } from "react";
import { SuccessIcon, ErrorIcon, WarningIcon } from "./ToastIcons";

function Toaster({ message, title }) {
	const style = {
		bgColor: "",
		textColor: "",
		borderColor: "",
		icon: null,
	};

	const [showToast, setShowToast] = useState(true);

	let { bgColor, textColor, borderColor, icon } = style;

	switch (title) {
		case "success":
			bgColor = "bg-green-100";
			textColor = "text-green-800";
			borderColor = "border-green-200";
			icon = <SuccessIcon />;
			break;
		case "error":
			bgColor = "bg-red-100";
			textColor = "text-red-800";
			borderColor = "border-red-200";
			icon = <ErrorIcon />;
			break;
		case "warning":
			bgColor = "bg-yellow-100";
			textColor = "text-yellow-800";
			borderColor = "border-yellow-200";
			icon = <WarningIcon />;
			break;
		default:
			bgColor = "";
			textColor = "";
			borderColor = "";
			icon = null;
			break;
	}

	useEffect(() => {});

	const handleToast = () => {
		setShowToast(!showToast);
	};

	return (
		<div className="fixed bottom-[15px] text-sm md:text-base right-[5px] md:bottom-[20px] z-50">
			<div
				className={`flex items-center border ${borderColor} rounded-sm ${bgColor} px-6 py-4 ${textColor} ${
					showToast
						? "translate-x-[0px] duration-500"
						: "translate-x-[400px] duration-500"
				}`}
			>
				<span className="pr-2">{icon}</span>
				<p className="">{message}</p>
				<button
					onClick={handleToast}
					className="text-xl pl-4 md:pl-6 cursor-pointer"
				>
					&#10005;
				</button>
			</div>
		</div>
	);
}

export default Toaster;
