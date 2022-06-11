import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductListCarousel.css";

import { Navigation } from "swiper";
import ProductCard from "Components/Cards/ProductCard";

function ProductListCarousel({ id, title, products }) {

	return (
		<div className="space-y-4 md:space-y-6 pt-10">
			<div className="">
				<p className="text-xl md:text-2xl font-[600] text-gray-600">{title}</p>
			</div>
			<div className="product-card-container">
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: `.swiper-button-next-card-${id}`,
						prevEl: `.swiper-button-prev-card-${id}`,
					}}
					slidesPerView={1}
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						// when window width is >= 480px
						480: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						// when window width is >= 1024px
						1024: {
							slidesPerView: 4,
							spaceBetween: 5,
						},
						// when window width is >= 1280px
						1280: {
							slidesPerView: 4,
							spaceBetween: 5,
						},
						// when window width is >= 1536px
						1536: {
							slidesPerView: 5,
							spaceBetween: 5,
						},
					}}
				>
					{products.map((product, index) => (
						<SwiperSlide
							key={index}
							style={{ }}
						>
							<ProductCard product={product} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className={`swiper-button-prev-card-${id}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</div>
				<div className={`swiper-button-next-card-${id}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default ProductListCarousel;
