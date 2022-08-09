import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./BannerCarousel.css";
import { IMAGE_URL } from "utilities/config.utility";

import { EffectFade, Navigation, Autoplay } from "swiper";

function BannerCarousel({banners}) {
	// console.log(banners)
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
				{banners.map((banner) => (
					<SwiperSlide key={banner._id}>
						{/* {console.log(banner)} */}
						<img
							src={`${IMAGE_URL}/${banner.image_path}`}
							alt={banner.title}
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
