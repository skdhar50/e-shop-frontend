import Banner from "Components/Includes/Header/Banner";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Layout from "Components/Layout";
import FeaturedCategories from "Components/Home/FeaturedCategories";
import { Outlet } from "react-router-dom";

function Home() {
	return (
		<Layout title="Home">
			<Banner />
			<Outlet />
			<FeaturedCategories />
			<WhyUs />
			<Products />
		</Layout>
	);
}

export default Home;
