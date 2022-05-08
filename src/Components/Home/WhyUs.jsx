import WhyUsCard from "Components/Cards/WhyUsCard";
import React from "react";

function WhyUs() {
	const ourFeatures = [
		{
			title: "Free Shipping",
			image: "/images/icons/freeDelivery.svg",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate officiis",
		},
		{
			title: "Secure Payment",
			image: "/images/icons/creditCard.svg",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate officiis",
		},
		{
			title: "24/7 Support",
			image: "/images/icons/support.svg",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate officiis",
		},
		{
			title: "30 Days Return",
			image: "/images/icons/return.svg",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate officiis",
		},
	];
	return (
		<div className="xl:container pt-12 md:pt-20 antialiased">
			<div className="flex flex-col justify-center items-center space-y-8">
				<div className="title w-full">
					<p className="font-poppins text-center text-[20px] md:text-[26px] xl:text-[32px] text-[#353535]">
						Why Us?
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-x-6 gap-y-8 xl:flex xl:space-x-4">
					{ourFeatures.map((feature, index) => (
						<WhyUsCard key={index} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
}

export default WhyUs;
