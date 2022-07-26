import OfferCard from "Components/Cards/OfferCard";
import { useOfferData } from "Hooks/useOffers";

function Offers() {
	const { data: offers, isLoading: offerLoading } = useOfferData();

	if (offerLoading) {
		return <div className="">Loading.....</div>;
	}

	return (
		<div className="px-1 sm:px-2 md:px-6 xl:container antialiased">
			<div className="pb-14 pt-5 mt-20 border-2 lg:mt-6 bg-white">
				{offers.data.length === 0 ? (
					<div className="text-center w-full text-lg text-gray-500">Sorry! We don't have any offers for you now!</div>
				) : (
					<div className="grid grid-cols-1 px-2 sm:px-4 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-8 w-full">
						{offers?.data.map((offer) => (
							<OfferCard key={offer._id} offer={offer} />
						))}
					</div>
				)}
				{/* <div className="grid grid-cols-1 px-2 sm:px-4 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-8 w-full">
					<OfferCard />
				</div> */}
			</div>
		</div>
	);
}

export default Offers;
