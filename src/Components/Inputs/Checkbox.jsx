function Checkbox({ name, label, onChange, checked }) {
	return (
		<div className="flex items-center space-x-3">
			<input
				type="checkbox"
				name={name}
				id={name}
				className="text-green-600 focus:ring-0 focus:outline-none cursor-pointer rounded-bl rounded-br rounded-tl"
			/>
			<label htmlFor={name} className="cursor-pointer">
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
