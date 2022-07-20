import OfferCard from "Components/Cards/OfferCard";
import { useOfferData } from "Hooks/useOffers";

function Offers() {
	const { data: offers, isLoading: offerLoading } = useOfferData();

	if(offerLoading) {
		return <div className="">Loading.....</div>
	}

	return (
		<div className="md:px-6 xl:container antialiased">
			<div className="pb-14 pt-5">
				<div className="grid grid-cols-1 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 w-full">
					{offers?.data.map((offer) => (
						<OfferCard key={offer._id} offer={offer} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Offers;
