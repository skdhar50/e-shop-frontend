import WhyUsCard from "Components/Cards/WhyUsCard";
import React from "react";

function WhyUs() {
	const ourFeatures = [
		{
			title: "Free Shipping",
			image: "/images/icons/free-shipping.svg",
			width: "lg:w-3/4",
		},
		{
			title: "Secure Payment",
			image: "/images/icons/secure-payment.svg",
			width: "lg:w-3/5",
		},
		{
			title: "24/7 Support",
			image: "/images/icons/support.svg",
			width: "lg:w-3/5",
		},
		{
			title: "30 Days Return",
			image: "/images/icons/return-product.svg",
			width: "lg:w-3/5",
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
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{ourFeatures.map((feature, index) => (
						<WhyUsCard key={index} {...feature} />
					))}
				</div>
			</div>
		</div>
	);
}

export default WhyUs;
