import OfferCard from "Components/Cards/OfferCard";

function Offers() {
	return (
		<div className="md:px-6 xl:container antialiased">
			<div className="pb-14 pt-5">
				<div className="grid grid-cols-1 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 w-full">
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
					<OfferCard />
				</div>
			</div>
		</div>
	);
}

export default Offers;
