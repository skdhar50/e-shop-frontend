import CreateProductQA from "Components/ProductQA/CreateProductQA";
import ProductPreview from "Components/ProductDetails/ProductPreview";
import ProductSummary from "Components/ProductDetails/ProductSummary";
import SideSection from "Components/ProductDetails/SideSection";
import CreateReviewsAndRatings from "Components/ReviewsAndRatings/CreateReviewsAndRatings";
import CustomersReviews from "Components/ReviewsAndRatings/CustomersReviews";
import ProductListCarousel from "Components/SliderAndCarousel/ProductListCarousel";
import CustomersQA from "Components/ProductQA/CustomersQA";
import Layout from "Components/Layout";
import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, STATUS } from "../Redux/Slices/ProductSlice";


function ProductDetails() {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector((state) => state.product);

	useEffect(() => {
		if(status === STATUS.IDLE) {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	const productDetails = {
		images: [
			"/images/products/8.jpg",
			"/images/products/7.jpg",
			"/images/products/5.jpg",
			"/images/products/4.jpg",
			"/images/products/3.jpg",
			"/images/products/2.jpg",
			"/images/products/1.jpg",
		],
		colors: [`bg-[#B91C1C]`, `bg-[#15803D]`, `bg-[#1D4ED8]`, `bg-[#374151]`],
		sizes: ["S", "M", "L", "XL", "XXL"],
		productSummary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumodit, deserunt necessitatibus fuga labore, quam recusandaequaerat vel, laboriosam praesentium harum esse cupiditate enimeaque minima commodi? Error vel dicta eveniet perferendis obcaecati ex, illum itaque atque quos minima officia?",
		categorys: ["Clothing", "Men's Fasion", "Top Rated"],
		productTitle: "Gildan Ultra Cotton T‑shirt",
		rating: 250,
		review: 200,
		stock: 80,
		price: 650,
		discountedPrice: 450,
	};

	const otherProducts = [
		{
			id: 1,
			title: "Customers Also Bought",
			products: products,
		},
		{
			id: 2,
			title: "Related Products To This Item",
			products: products,
		},
		{
			id: 3,
			title: "Similar Category Best Selling",
			products: products,
		},
		{
			id: 4,
			title: "Related Products",
			products: products,
		},
	];

	const productSummary = {
		title: "Product Summary",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima autem et voluptatum nam nisi veritatis blanditiis iste doloribus totam est. Reprehenderit id expedita consectetur corrupti, neque similique nam quaerat, dignissimos minus sit excepturi quasi, saepe dolore facilis nulla! Assumenda harum optio, quae saepe maxime placeat quia ad eveniet rerum nulla quaerat accusantium repudiandae velit quisquam officiis voluptate totam id. Id perferendis eos repudiandae consectetur nam, et velit qui. Asperiores laborum veniam soluta enim laudantium iste commodi autem modi est exercitationem sunt quisquam illo harum eos, eum sequi qui! Nobis odit ratione repudiandae, quis doloremque pariatur inventore enim nisi illum, doloribus amet. Quam corporis quod nam excepturi eveniet natus voluptatibus omnis, at tenetur harum cumque in deserunt perspiciatis, neque mollitia, dicta soluta dolorum sapiente possimus! Ullam, adipisci sequi. Facere ea iste quos, impedit cupiditate iusto est labore sint corrupti deleniti odio magni accusamus illo unde culpa! Nostrum molestiae excepturi, aspernatur quas mollitia perferendis reiciendis qui eveniet aut maiores distinctio delectus temporibus officiis cumque inventore incidunt dolorem veniam consectetur sint omnis illo? Quis architecto molestias adipisci rem. Ut eum sunt, quod esse corporis necessitatibus animi natus tempora, dolores magni vel modi distinctio ea nobis ipsum, iure mollitia nulla. Magnam at animi expedita.",
	}

	const customersQAs = [
		{
			question: "How do I get a refund?",
			customer: "Taher Bin Faizard",
			queDate: "12 Dec 2020",
			answer:
				"Sorry, we don't have a refund policy yet. You can however contact us for help.",
			ansBy: "Admin",
			ansDate: "12 Dec 2020",
		},
		{
			question: "How do I get a refund?",
			customer: "Taher Bin Faizard",
			queDate: "12 Dec 2020",
			answer:
				"Sorry, we don't have a refund policy yet. You can however contact us for help.",
			ansBy: "Admin",
			ansDate: "12 Dec 2020",
		},
		{
			question: "How do I get a refund?",
			customer: "Taher Bin Faizard",
			queDate: "12 Dec 2020",
			answer:
				"Sorry, we don't have a refund policy yet. You can however contact us for help.",
			ansBy: "Admin",
			ansDate: "12 Dec 2020",
		},
	];

	return (
		<Layout title="Product Details">
			<Outlet />
			<div className="md:px-6 md:pt-1 xl:container antialiased">
				<div className="mt-4 bg-white drop-shadow md:pb-4 md:flex border border-gray-300 w-full h-full">
					{/* Product Preview Section */}
					<ProductPreview {...productDetails} />

					{/* Side Section */}
					<SideSection returnDays={7} deliveryCharge={50} />
				</div>

				<div className="mt-4 pb-16 bg-white drop-shadow space-y-10 divide-y-2 border border-gray-300 px-3 md:px-8">
					{/* Product Summary */}
					<ProductSummary {...productSummary} />

					{/* Other Products */}
					{otherProducts.map((otherProduct, index) => (
						<ProductListCarousel {...otherProduct} key={index} />
					))}

					{/* Create Reviews And Ratings */}
					<CreateReviewsAndRatings />
					<div className="space-y-14 px-4 pt-10">
						{/* Customers Reviews */}
						<CustomersReviews />
						<CustomersReviews />
					</div>

					<CreateProductQA />
					<div className="space-y-10 px-4 pt-10">
						{/* Customers QA */}
						{customersQAs.map((customersQA, index) => (
							<CustomersQA customersQA={customersQA} key={index} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ProductDetails;
