import { IMAGE_URL } from "utilities/config.utility";

function OrderSummaryProductDetails({ cartItem }) {
	const { product, count: quantity } = cartItem;
	const { name, unitPrice: price, description, photos } = product;
	return (
		<div className="pt-6 space-y-4 text-gray-600 md:space-y-0">
			<div className="flex items-top space-x-5 md:justify-start">
				<img
					src={`${IMAGE_URL}/${photos[0]}`}
					alt=""
					className="shrink-0 w-[5rem] h-[6rem] md:w-[7.5rem] md:h-[8.75rem] object-fill"
				/>
				<div className="space-y-2 md:space-y-4">
					<p className="font-bold text-sm md:text-lg text-gray-700">{name}</p>
					<p className="text-sm md:text-base">{description}</p>
				</div>
			</div>
			<div className="flex justify-end space-x-6 md:space-x-12 text-sm md:text-base">
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
	);
}

export default OrderSummaryProductDetails;
