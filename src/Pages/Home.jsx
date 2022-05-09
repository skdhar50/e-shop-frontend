import Banner from "Components/Includes/Header/Banner";
import FeaturedCategories from "Components/Home/FeaturedCategories";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Footer from "Components/Includes/Footer/Footer";
import Layout from "Components/Layout";

function Home() {
	return (
		<Layout title="Home">
			<Banner />
			<FeaturedCategories />
			<WhyUs />
			<Products />
			<Footer />
		</Layout>
	);
}

export default Home;
