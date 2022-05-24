function CheckoutSummary(props) {
	const { subTotal = 0, shipping = 0, payablePrice = 0 } = props;
	return (
		<div>
			<p className="pb-4 text-xl">Checkout Summary</p>
			<div className="divide-y space-y-3">
				<div className="flex justify-between items-center pt-3">
					<p className="">Subtotal</p>
					<p className="">{subTotal} TK</p>
				</div>
				<div className="flex justify-between items-center pt-3">
					<p className="">Shipping</p>
					<p className="">{shipping} TK</p>
				</div>
				<div className="flex justify-between items-center pt-3">
					<p className="">Total</p>
					<p className="">{subTotal + shipping} TK</p>
				</div>
				<div className="flex justify-between items-center pt-3">
					<p className="">Payable Total</p>
					<p className="">{payablePrice} TK</p>
				</div>
			</div>
		</div>
	);
}

export default CheckoutSummary;
