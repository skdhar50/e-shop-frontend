import BannerCarousel from "Components/SliderAndCarousel/BannerCarousel";
import {useCarouselData} from "Hooks/useCarousel";

function Banner() {
	// const banners = [
	// 	{ image: "/images/banners/banner-3.jpg", url: "/" },
	// 	{ image: "/images/banners/banner-4.jpg", url: "/" },
	// 	{ image: "/images/banners/banner-5.jpg", url: "/" },
	// ];

	const { data: banners, isLoading, isError } = useCarouselData();

	if(isLoading) {
		return <div className="">Loading....</div>
	}

	return <BannerCarousel banners={banners?.data} />;
}

export default Banner;
