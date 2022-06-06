import Banner from "Components/Includes/Header/Banner";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Layout from "Components/Layout";
import FeaturedCategories from "Components/Home/FeaturedCategories";
import { Link, Outlet, useLocation } from "react-router-dom";

function Home() {
	const location = useLocation();
	return (
		<Layout title="Home">
			<Banner />
			<Link to="login" state={{ background: location }}>
				Open Modal
			</Link>
			<Outlet />
			<FeaturedCategories />
			<WhyUs />
			<Products />
		</Layout>
	);
}

export default Home;
