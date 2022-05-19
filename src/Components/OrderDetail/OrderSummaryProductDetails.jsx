function OrderSummaryProductDetails({
	name,
	description,
	image,
	quantity,
	price,
}) {
	return (
		<div className="">
			<div className="flex items-top space-x-3 md:space-x-6">
				<img
					src={image}
					alt=""
					className="w-[50px] h-[50px] md:w-[120px] md:h-[130px] xl:w-[150px] xl:h-[160px]"
				/>
				<div className="space-y-3 md:space-y-4">
					<p className="font-poppins text-[15px] md:text-lg text-gray-700">
						{name}
					</p>
					<p className="text-sm md:text-base">{description}</p>
					<div className="flex space-x-6 md:space-x-12 text-sm md:text-base">
						<p className="">
							Price: <span>TK.{price}</span>
						</p>
						<p className="">
							Qty: <span>{quantity}</span>
						</p>
						<p className="">
							Total: <span>TK.{quantity * price}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrderSummaryProductDetails;
