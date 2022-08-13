import "Components/SliderAndCarousel/ProductPreviewImageAndThumb.css";
import { useFeaturedCategory } from "Hooks/useCategory";
import { createSearchParams, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "utilities/config.utility";

import { Pagination } from "swiper";

function FeaturedCategories() {
	const navigate = useNavigate();

	const { data: categories, isLoading, isError } = useFeaturedCategory();

	const goToPage = (productId) => {
		let searchString = {
			tag: "category",
			value: productId === undefined ? true : productId,
			page: 1,
		};

		navigate(
			{
				pathname: "/product-list/product",
				search: `?${createSearchParams(searchString)}`,
			},
			{ replace: true }
		);
	};

	if (isLoading) {
		return (
			<div className="flex flex-col pt-12 justify-center items-center">
				<p className="font-poppins text-center text-[1.38rem] md:text-[1.63rem] xl:text-[2rem] text-[#353535]">
					Featured Categories
				</p>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					<div className="aspect-[3/4] bg-slate-600 h-full w-full"></div>
					<div className="aspect-[3/4] bg-slate-600 h-full w-full"></div>
					<div className="aspect-[3/4] bg-slate-600 h-full w-full"></div>
					<div className="aspect-[3/4] bg-slate-600 h-full w-full"></div>
				</div>
			</div>
		);
	}

	if (categories?.data?.length === 0) {
		return <></>;
	}

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
						{categories?.data.map((category) => (
							<SwiperSlide key={category._id}>
								{/* <Link to="/product-list/all"> */}
								<div
									onClick={() => goToPage(category._id)}
									className="relative cursor-pointer lg:w-[11.25rem] xl:w-[13.75rem] shadow-lg shadow-black/70 overflow-hidden group"
								>
									<img
										src={`${IMAGE_URL}/${category.photo}`}
										alt={category.name}
										className="aspect-[3/4] object-cover group-hover:scale-150 transition-all duration-300"
									/>
									<div className="bg-black bg-opacity-60 group-hover:bg-opacity-75 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold transition-all duration-300">
										<p className="text-center">{category.name}</p>
									</div>
								</div>
								{/* </Link> */}
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
