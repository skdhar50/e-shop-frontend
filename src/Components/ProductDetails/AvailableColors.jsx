function AvailableColors({ colors }) {
	return (
		<div className="flex space-x-4 items-center">
			<p className="">Colors: </p>
			<div className="flex space-x-4">
				{colors.map((color, index) => (
					<div className={`p-3 border-2 cursor-pointer border-slate-500 rounded-full ${color}`} key={index}></div>
				))}
			</div>
		</div>
	);
}

export default AvailableColors;