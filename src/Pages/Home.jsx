import Header from 'Components/Includes/Header'
import FeaturedCategories from "Components/Home/FeaturedCategories";
import Products from "Components/Home/Products";
import WhyUs from "Components/Home/WhyUs";
import Footer from "Components/Includes/Footer/Footer";

function Home() {
  return (
		<>
			<Header />
			<FeaturedCategories />
			<WhyUs />
			<Products />
			<Footer />
		</>
	);
}

export default Home