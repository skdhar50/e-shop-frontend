import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./BannerCarousel.css";

import { EffectFade, Navigation, Autoplay } from "swiper";

function BannerCarousel({banners}) {
	
	return (
		<div className="relative">
			<Swiper
				modules={[Navigation, EffectFade, Autoplay]}
				effect={"fade"}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				speed={700}
				loop={true}
				slidesPerView={1}
				navigation={{
					nextEl: ".swiper-button-next-banner",
					prevEl: ".swiper-button-prev-banner",
				}}
			>
				{banners.map((banner, index) => (
					<SwiperSlide key={index}>
						<img
							src={banner.image}
							alt=""
							className="w-full aspect-[6/4] md:aspect-[4/2] object-fit"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-button-next-banner"></div>
			<div className="swiper-button-prev-banner"></div>
		</div>
	);
}

export default BannerCarousel;
