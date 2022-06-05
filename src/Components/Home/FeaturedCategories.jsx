import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "Components/SliderAndCarousel/ProductPreviewImageAndThumb.css";

import { Pagination } from "swiper";

function FeaturedCategories() {
	const categories = [
		{ title: "Groceries", image: "/images/featuredCategories/groceries.jpg" },
		{
			title: "Beauty Products",
			image: "/images/featuredCategories/beautyProducts.jpg",
		},
		{
			title: "Women's Collection",
			image: "/images/featuredCategories/womenFasion.jpg",
		},
		{
			title: "Men's Collection",
			image: "/images/featuredCategories/menFasion.jpg",
		},
	];
	return (
		<div className="px-4 md:container pt-12 antialiased">
			<div className="flex flex-col justify-center items-center space-y-8">
				<div className="title w-full">
					<p className="font-poppins text-center text-[22px] md:text-[26px] xl:text-[32px] text-[#353535]">
						Featured Categories
					</p>
				</div>
				<div className="w-[350px] md:w-[700px] lg:w-[800px] xl:w-[900px]">
					<Swiper
						className=""
						modules={[Pagination]}
						slidesPerView={2}
						spaceBetween={20}
						pagination={{
							el: ".swiper-pagination-bullet-1",
							clickable: true,
						}}
						breakpoints={{
							768: {
								pagination: false,
								allowTouchMove: false,
								slidesPerView: 4,
							},
						}}
					>
						{categories.map((category, index) => (
							<SwiperSlide key={index}>
								<div className="relative lg:max-w-[180px] xl:max-w-[220px]">
									<img
										src={category.image}
										alt={category.title}
										className="h-[250px] w-full object-cover"
									/>
									<div className="bg-black bg-opacity-60 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold">
										<p className="text-center">{category.title}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
						<div className="swiper-pagination-bullet-1 mt-4"></div>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default FeaturedCategories;
