import Banner from "Components/Includes/Header/Banner";
import FeaturedCategories from "Components/Home/FeaturedCategories";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Layout from "Components/Layout";

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
