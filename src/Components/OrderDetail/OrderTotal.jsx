function OrderTotal({ totalItems, subTotal, discount, shipping, payable, isPaid }) {
	return (
		<div className="flex md:justify-end pt-5 border-t-2 px-2 md:px-0">
			<div className="w-full text-sm md:text-base md:w-[350px] space-y-2">
				<div className="flex justify-between items-center">
					<p className="">Total Items: </p>
					<p className="font-[600] text-gray-600">{totalItems} Product(s)</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Sub-Total: </p>
					<p className="font-[600] text-gray-600">TK.{subTotal}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Discount: </p>
					<p className="font-[600] text-gray-600">TK.{discount}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Shipping: </p>
					<p className="font-[600] text-gray-600">TK.{shipping}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Payable Amount: </p>
					<p className="font-[600] text-gray-600">TK.{payable}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Payment Status: </p>
					{isPaid ? (
						<p className="">
							Paid <span className="text-gray-600 text-xs md:text-sm">(By BiKash)</span>
						</p>
					) : (
						<p className="">Unpaid</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default OrderTotal;
