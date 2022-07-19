import { Link } from "react-router-dom";

function OfferCard() {
	return (
		<div className="relative">
			<div className="-inset-0.5 absolute bg-black bg-opacity-40 blur"></div>
			<div className="offer-card relative bg-gray-50 overflow-hidden rounded-md">
				<div className="">
					<img
						src="/images/offers/offer.jpg"
						alt=""
						className="aspect-[4/4] w-full"
					/>
				</div>
				<div className="px-3 py-3 text-sm">
					<div className="border-b pb-1 text-xs border-gray-300">
						From: 22 July 2022 - 24 July 2022
					</div>
					<div className="space-y-3 text-center pt-3">
						<p className="text-xl font-semibold text-gray-700">
							This is an Offer
						</p>
						<p className="text-gray-600 text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
							nostrum fuga illo placeat fugit aliquam maiores eos, ut,
						</p>
						<Link to="/offerDetails">
							<button className="mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-500">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OfferCard;
