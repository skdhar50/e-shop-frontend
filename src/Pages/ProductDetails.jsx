import CreateProductQA from "Components/ProductQA/CreateProductQA";
import ProductPreview from "Components/ProductDetails/ProductPreview";
import ProductSummary from "Components/ProductDetails/ProductSummary";
import SideSection from "Components/ProductDetails/SideSection";
import CreateReviewsAndRatings from "Components/ReviewsAndRatings/CreateReviewsAndRatings";
import CustomersReviews from "Components/ReviewsAndRatings/CustomersReviews";
import CustomersQA from "Components/ProductQA/CustomersQA";
import Layout from "Components/Layout";
import { Outlet, useParams } from "react-router-dom";
import { useProductDetails } from "Hooks/useProduct";
import { useReviewData } from "Hooks/useReviews";
import { useQuestionData } from "Hooks/useQuestions";
import { isAuthenticated } from "utilities/auth.utility";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { useAddToCart } from "Hooks/useCart";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

function ProductDetails() {
	const { id } = useParams();
	const [, setLoginModalOpen] = useAtom(loginModal);
	const { mutate: addToCartMutation } = useAddToCart();
	const {
		data: products,
		isLoading: productIsLoading,
		isError: productIsError,
		isSuccess: productIsSuccess,
	} = useProductDetails(id);
	const {
		data: reviews,
		isLoading: reviewLoding,
		isError: reviewError,
		isSuccess: reviewSuccess,
	} = useReviewData(id);
	const {
		data: questions,
		isLoading: questionLoding,
		isError: questionError,
		isSuccess: questionSuccess,
	} = useQuestionData(id);

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
		productTitle: "Gildan Ultra Cotton T???shirt",
		rating: 250,
		review: 200,
		stock: 80,
		price: 650,
		discountedPrice: 450,
	};

	// const otherProducts = [
	// 	{
	// 		id: 1,
	// 		title: "Customers Also Bought",
	// 		products: products,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Related Products To This Item",
	// 		products: products,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Similar Category Best Selling",
	// 		products: products,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Related Products",
	// 		products: products,
	// 	},
	// ];

	const productSummary = {
		title: "Product Summary",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima autem et voluptatum nam nisi veritatis blanditiis iste doloribus totam est. Reprehenderit id expedita consectetur corrupti, neque similique nam quaerat, dignissimos minus sit excepturi quasi, saepe dolore facilis nulla! Assumenda harum optio, quae saepe maxime placeat quia ad eveniet rerum nulla quaerat accusantium repudiandae velit quisquam officiis voluptate totam id. Id perferendis eos repudiandae consectetur nam, et velit qui. Asperiores laborum veniam soluta enim laudantium iste commodi autem modi est exercitationem sunt quisquam illo harum eos, eum sequi qui! Nobis odit ratione repudiandae, quis doloremque pariatur inventore enim nisi illum, doloribus amet. Quam corporis quod nam excepturi eveniet natus voluptatibus omnis, at tenetur harum cumque in deserunt perspiciatis, neque mollitia, dicta soluta dolorum sapiente possimus! Ullam, adipisci sequi. Facere ea iste quos, impedit cupiditate iusto est labore sint corrupti deleniti odio magni accusamus illo unde culpa! Nostrum molestiae excepturi, aspernatur quas mollitia perferendis reiciendis qui eveniet aut maiores distinctio delectus temporibus officiis cumque inventore incidunt dolorem veniam consectetur sint omnis illo? Quis architecto molestias adipisci rem. Ut eum sunt, quod esse corporis necessitatibus animi natus tempora, dolores magni vel modi distinctio ea nobis ipsum, iure mollitia nulla. Magnam at animi expedita.",
	};

	if (productIsLoading) {
		return <div className="">Loading</div>;
	}

	const handleAddToCart = (id) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToCartMutation(id);
	};

	const scrollToReview = () => {
		document.getElementById("review--section").scrollIntoView({
			top: true,
			behavior: "smooth",
		});
	};

	return (
		<Layout title="Product Details">
			<Outlet />
			<div className="md:px-6 md:pt-1 xl:container antialiased">
				<div className="-mt-3 md:mt-4 bg-white drop-shadow md:pb-4 md:flex border border-gray-300 w-full h-full">
					{/* Product Preview Section */}
					<ProductPreview
						handleScrollToReview={scrollToReview}
						products={products?.data}
					/>

					{/* Side Section */}
					<SideSection returnDays={7} deliveryCharge={50} />
				</div>

				<div className="mt-4 pb-16 space-y-6 bg-white drop-shadow  divide-y-2 border border-gray-300 px-3 md:px-8">
					{/* Product Summary */}
					<ProductSummary {...productSummary} />

					{/* Other Products */}
					{/* {otherProducts.map((otherProduct, index) => (
						<ProductListCarousel {...otherProduct} key={index} />
					))} */}

					<PrimaryButton
						handler={() => handleAddToCart(products?.data[0]?._id)}
						classes="px-12 py-2 md:hidden z-50 sticky bottom-0 left-0 right-0 w-full"
					>
						Add to Cart
					</PrimaryButton>

					{/* <div id="review--section" className="opacity-0"></div> */}

					{/* Create Reviews And Ratings */}
					{isAuthenticated() ? (
						<CreateReviewsAndRatings productId={id} key={id} />
					) : (
						<div className="text-gray-600 text-center pt-4">
							Login to create a review...
						</div>
					)}

					<div
						id="review--section"
						className="space-y-8 px-4 pt-5 divide-y-[1px]"
					>
						{reviews?.data.length ? (
							reviews.data.map((review) => (
								<CustomersReviews review={review} key={review._id} />
							))
						) : (
							<div className="text-gray-600">No reviews available.</div>
						)}
					</div>

					{isAuthenticated() ? (
						<CreateProductQA productId={id} />
					) : (
						<div className="text-gray-600 text-center pt-4">
							Login to ask a question...
						</div>
					)}
					<div className="space-y-10 px-4 pt-10">
						{/* Customers QA */}
						{questions?.data.length ? (
							questions?.data.map((question) => (
								<CustomersQA customersQA={question} key={question._id} />
							))
						) : (
							<div className="text-gray-600">No Questiones available.</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ProductDetails;
