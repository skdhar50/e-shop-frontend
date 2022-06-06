function PaymentMethodCard({ isCOD = false, image, width, height }) {
	return (
		<div className="flex items-center bg-gray-100 w-full h-[60px] px-8 rounded-md border shadow">
			<div className="flex justify-start items-center space-x-4 py-2">
				<input
					type="radio"
					name="payment"
					id=""
					className="w-5 h-5 cursor-pointer text-indigo-600 focus:outline-none focus:ring-0"
				/>
				<label
					htmlFor=""
					className={isCOD ? "flex items-center space-x-4" : ""}
				>
					<img
						src={image}
						alt=""
						className={`w-[${width}px] h-[${height}px] object-cover`}
					/>
					{isCOD ? (
						<span className="text-gray-600">Cash on Delivery</span>
					) : null}
				</label>
			</div>
		</div>
	);
}

export default PaymentMethodCard;
