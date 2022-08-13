function SortBy({ handleToggle }) {
	return (
		<div className="border-b pb-4 space-y-1">
			<p className="pb-2 text-lg font-[600] text-gray-600">Sort By</p>
			<div className="flex flex-col space-y-2">
				<div className="flex justify-start items-center">
					<input
						type="radio"
						name="createdAt"
						onChange={() => handleToggle(1)}
						className="mr-2"
					/>
					<p className="">Default</p>
				</div>
				<div className="flex justify-start items-center">
					<input
						type="radio"
						name="unitPrice"
						value="asce"
						onChange={() => handleToggle(1)}
						className="mr-2"
					/>
					<p className="">Price (Low to High)</p>
				</div>
				<div className="flex justify-start items-center">
					<input
						type="radio"
						name="unitPrice"
						value="desc"
						onChange={() => handleToggle(-1)}
						className="mr-2"
					/>
					<p className="">Price (High to Low)</p>
				</div>
			</div>
		</div>
	);
}

export default SortBy;
