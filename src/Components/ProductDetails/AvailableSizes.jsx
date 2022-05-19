function AvailableSizes({ sizes }) {
	return (
		<div className="flex items-center space-x-4">
			<p className="">Sizes: </p>
			<div className="flex space-x-4">
				{sizes.map((size, index) => (
					<div className="px-3 py-1 border border-indigo-200 cursor-pointer text-sm rounded-md" key={index}>
						{size}
					</div>
				))}
			</div>
		</div>
	);
}

export default AvailableSizes;
