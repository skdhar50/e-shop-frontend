import React from "react";

function Input({
	type = "text",
	name,
	placeholder,
	value,
	error = null,
	handleChange,
}) {
	return (
		<div className="space-y-1">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				autoComplete="none"
				onChange={handleChange}
				className={
					`w-full rounded focus:outline-none focus:border-green-600 focus:ring-0` +
					(error ? ` border-red-600` : ``)
				}
			/>
			{error && <p className="text-sm text-red-600 italic">{error}</p>}
		</div>
	);
}

export default Input;
