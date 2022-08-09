import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./ProductPreviewImageAndThumb.css";

import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

function ProductPreviewImageAndThumb({ photos, isOutOfStock, isOnSale }) {
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
				{photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<div className="relative">
							{isOutOfStock && (
								<img
									src="/images/others/sold-out.png"
									className="absolute z-30 my-auto w-full h-full aspect-auto object-contain"
									alt=""
								/>
							)}
							{isOnSale && !isOutOfStock && (
								<img
									src="/images/others/sale.svg"
									alt=""
									className="absolute z-30 my-auto w-[50px] md:w-[80px] top-0 right-0 aspect-auto object-contain"
								/>
							)}
							<img
								src={photo}
								alt="product"
								className="relative product-preview-image-swiper-slide aspect-square sm:aspect-[3/4] object-cover"
							/>
						</div>
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
					{photos.map((photo, index) => (
						<SwiperSlide key={index + 1}>
							<img
								src={photo}
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
