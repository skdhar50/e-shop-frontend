function OrderTotal({ totalItems, subTotal, discount, shipping, payable, isPaid }) {
	return (
		<div className="flex md:justify-end pt-5 border-t-2 xl:text-lg px-2 md:px-0">
			<div className="w-full md:w-[350px]">
				<div className="flex justify-between items-center">
					<p className="">Total Items: </p>
					<p className="font-bold text-gray-700">{totalItems} Product(s)</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Sub-Total: </p>
					<p className="font-bold text-gray-700">TK.{subTotal}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Discount: </p>
					<p className="font-bold text-gray-700">TK.{discount}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Shipping: </p>
					<p className="font-bold text-gray-700">TK.{shipping}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Payable Amount: </p>
					<p className="font-bold text-gray-700">TK.{payable}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="">Payment Status: </p>
					{isPaid ? (
						<p className="">
							Paid <span className="font-normal text-sm">(By BiKash)</span>
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
