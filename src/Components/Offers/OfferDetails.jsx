import React from "react";
import OfferTimeCounter from "./OfferTimeCounter";
import { Link, useParams } from "react-router-dom";
import { useSingleOffer } from "Hooks/useOffers";
import { format } from "date-fns";

function OfferDetails() {
	const { id } = useParams();
	const { data: offer, isLoading: offerLoading } = useSingleOffer(id);

	if(offerLoading) {
		return <div className="">Loading....</div>
	}

	const {
		name,
		startDate,
		endDate,
		description,
		discountAmount,
		limit,
		photo,
	} = offer?.data[0];

	return (
		<div className="md:px-6 xl:container antialiased pt-6 lg:pt-12 px-3">
			<div className=" relative flex items-center justify-center">
				<div className="-inset-1 absolute bg-black bg-opacity-30 blur w-full md:w-3/4 lg:w-2/3 xl:w-3/5 mx-auto"></div>
				<div className="rounded-md overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-3/5 relative">
					<div className="bg-white px-5 md:px-12 pt-8 pb-8 flex justify-between ">
						<Link to="/offers">
							<div className="flex items-center space-x-3 group">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 group-hover:cursor-pointer"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10 19l-7-7m0 0l7-7m-7 7h18"
									/>
								</svg>
								<p className="group-hover:cursor-pointer">Back to Offers</p>
							</div>
						</Link>
						<div className="">
							<OfferTimeCounter targetDate={new Date(endDate)} />
						</div>
					</div>
					<div className="">
						<img src={photo} alt="" className="aspect-square w-full" />
					</div>
					<div className="space-y-4 px-8 md:px-12 pt-8 pb-12 bg-white">
						<div className="border-b border-gray-300 pb-3 space-y-2">
							<p className="text-2xl text-gray-600 font-semibold">{name}</p>
							<p className="text-sm">
								From: {format(new Date(startDate), "PP")} -
								{format(new Date(endDate), "PP")}
							</p>
						</div>
						<div className="text-gray-600">{description}</div>
						<div className="space-y-2">
							<p className="font-semibold text-gray-700 text-lg">Conditions:</p>
							<ul className="list-disc text-gray-600 space-y-2 pl-4">
								<li className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolorem, animi.
								</li>
								<li className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolorem, animi.
								</li>
								<li className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aperiam quasi beatae dolore fuga dolorum natus!
								</li>
								<li className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aperiam quasi beatae dolore fuga dolorum natus!
								</li>
								<li className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolorem, animi.
								</li>
								<li className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolorem, animi.
								</li>
								<li className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Aperiam quasi beatae dolore fuga dolorum natus!
								</li>
								<li className="">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Dolorem, animi.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OfferDetails;
