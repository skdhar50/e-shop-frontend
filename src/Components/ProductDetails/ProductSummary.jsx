
function ProductSummary({ description }) {
	return (
		<div className="pt-10 space-y-5">
			<div className="">
				<p className="text-xl md:text-2xl font-[600] text-gray-600">
					Product Summary
				</p>
			</div>
			<div className="px-2">
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
}

export default ProductSummary