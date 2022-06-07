import {Link} from 'react-router-dom'
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
					<p className="font-poppins text-center text-[1.38rem] md:text-[1.63rem] xl:text-[2rem] text-[#353535]">
						Featured Categories
					</p>
				</div>
				<div className="w-[21.875rem] md:w-[43.75rem] lg:w-[50rem] xl:w-[56.25rem]">
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
								allowTouchMove: false,
								slidesPerView: 4,
							},
						}}
					>
						{categories.map((category, index) => (
							<SwiperSlide key={index}>
								<Link to="/product-list">
									<div className="relative cursor-pointer lg:w-[11.25rem] xl:w-[13.75rem] overflow-hidden group">
										<img
											src={category.image}
											alt={category.title}
											className="h-[15.625rem] w-full inset-0 object-cover group-hover:scale-150 transition-all duration-300"
										/>
										<div className="bg-black bg-opacity-60 group-hover:bg-opacity-75 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold transition-all duration-300">
											<p className="text-center">{category.title}</p>
										</div>
									</div>
								</Link>
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
