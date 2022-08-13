import BannerCarousel from "Components/SliderAndCarousel/BannerCarousel";
import { useCarouselData } from "Hooks/useCarousel";

function Banner() {
	const { data: banners, isLoading } = useCarouselData();

	if (isLoading) {
		return <div className="w-full aspect-[6/4] md:aspect-[4/2] bg-slate-100"></div>;
	}

	return <BannerCarousel banners={banners?.data} />;
}

export default Banner;
