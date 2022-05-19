import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./ProductPreviewImageAndThumb.css";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

function ProductPreviewImageAndThumb({ images }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="">
			<Swiper
				modules={[Navigation, Thumbs, FreeMode, Pagination]}
				thumbs={{ swiper: thumbsSwiper }}
				pagination={{ clickable: true }}
				className="product-preview-image-swiper-wrapper"
				breakpoints={{
					768: {
						pagination: false,
						allowTouchMove: false,
					},
				}}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img
							src={image}
							alt="product"
							className="product-preview-image-swiper-slide w-full h-[450px] md:h-[350px] object-cover"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="product-preview-image-swiper-thumbs hidden md:block">
				<Swiper
					onSwiper={setThumbsSwiper}
					slidesPerView="auto"
					spaceBetween={5}
					watchSlidesProgress={true}
					navigation={{
						nextEl: ".swiper-button-next-thumbs",
						prevEl: ".swiper-button-prev-thumbs",
					}}
					freeMode={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="product-preview-image-swiper-thumbs-wrapper"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index + 1}>
							<img
								src={image}
								alt="product thumb"
								className="product-preview-image-swiper-thumb-slide h-full object-cover"
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="swiper-button-next-thumbs"></div>
				<div className="swiper-button-prev-thumbs"></div>
			</div>
		</div>
	);
}

export default ProductPreviewImageAndThumb;
