import { Link } from "react-router-dom";
import { format } from "date-fns";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import { OFFER_URL } from "utilities/config.utility";

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
			<div className="-inset-0.5 absolute bg-gradient-to-br from-[#004E7E] to-[#002F4C] blur transition-all duration-200 opacity-20"></div>
			<div className="offer-card relative bg-gray-50 pb-4 border border-[#b0d0e4] overflow-hidden rounded-sm">
				<div className="">
					<img src={`${OFFER_URL}/${photo}`} alt="" className="aspect-[1/1] " />
				</div>
				<div className="px-4 pb-4">
					<div className="py-3">
						<div className="flex text-sm pl-2 text-[#004E7E] font-semibold">
							From:
							<p className="italic font-normal pl-2">
								{format(new Date(startDate), "PP")} -{" "}
								{format(new Date(endDate), "PP")}
							</p>
						</div>
					</div>
					<div className="space-y-4 pt-3">
						<div className="text-lg font-semibold text-[#004E7E] md:text-xl text-center">
							{name}
						</div>
						<div className="text-sm md:text-base pb-2 text-gray-600">
							{description}
						</div>
						<Link to={`/offerDetails/${id}`}>
							<PrimaryButton classes="text-sm sm:text-base px-5 py-2 float-right">
								View Details
							</PrimaryButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OfferCard;
