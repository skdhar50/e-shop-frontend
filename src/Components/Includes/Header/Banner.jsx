import BannerCarousel from "Components/SliderAndCarousel/BannerCarousel";

function Banner() {
	const banners = [
		{ image: "/images/banners/banner-3.jpg", url: "/" },
		{ image: "/images/banners/banner-4.jpg", url: "/" },
		{ image: "/images/banners/banner-5.jpg", url: "/" },
	];

	return <BannerCarousel banners={banners} />;
}

export default Banner;
