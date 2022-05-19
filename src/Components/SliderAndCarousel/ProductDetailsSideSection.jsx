import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ProductDetailsSideSection.css";

import { Pagination, Autoplay } from "swiper";

function ProductDetailsSideSection({ products }) {
	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				pagination={{ el: ".swiper-pagination-bullet-1", clickable: true }}
				// loop={true}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				speed={700}
				slidesPerView={1}
				spaceBetween={10}
				className="product-details-side-section__swiper"
			>
				{products.map((product, index) => (
					<SwiperSlide
						key={index}
						className="product-details-side-section__main"
					>
						<div className="flex p-3 rounded-sm border-2 border-slate-300 bg-white space-x-4">
							<img src={product.image} alt="" className="" />
							<div className="text-sm space-y-6">
								<p className="font-[600] text-gray-700">{product.name}</p>
								<p className="text-xl font-[700] text-gray-800">
									TK.{product.price}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
				<div className="swiper-pagination-bullet-1"></div>
			</Swiper>
		</>
	);
}

export default ProductDetailsSideSection;
