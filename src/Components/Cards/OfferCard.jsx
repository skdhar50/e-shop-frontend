import { Link } from "react-router-dom";
import { format } from "date-fns";

function OfferCard({ offer }) {
	const {
		_id: id,
		name,
		startDate,
		endDate,
		description,
		discountAmount,
		photo,
	} = offer;

	return (
		<div className="relative">
			<div className="-inset-0.5 absolute bg-black bg-opacity-40 blur"></div>
			<div className="offer-card relative bg-gray-50 overflow-hidden rounded-md">
				<div className="">
					<img src={photo} alt="" className="aspect-[4/4] w-full" />
				</div>
				<div className="px-3 py-3 space-y-4 text-sm">
					<div className="border-b pb-1 text-xs font-semibold text-gray-700 border-gray-300">
						From: {format(new Date(startDate), "PP")} -{" "}
						{format(new Date(endDate), "PP")}
					</div>
					<div className="flex font-semibold text-gray-600 text-lg space-x-4 items-center">
						<p className="">Discount: </p>
						<p className="text-green-800">{discountAmount}</p>
					</div>
					<div className="space-y-3 text-center">
						<p className="text-xl font-semibold text-gray-700">{name}</p>
						<p className="text-gray-600 text-sm">{description}</p>
						<Link to={`/offerDetails/${id}`}>
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
