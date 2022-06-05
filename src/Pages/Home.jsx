import Banner from "Components/Includes/Header/Banner";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Layout from "Components/Layout";
import FeaturedCategories from "Components/Home/FeaturedCategories";

function Home() {
	return (
		<Layout title="Home">
			<Banner />
			<FeaturedCategories />
			<WhyUs />
			<Products />
		</Layout>
	);
}

export default Home;
