import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import BarSpinner from "Components/Common/Spinner/BarSpinner";
import Layout from "Components/Layout";
import ProductPreview from "Components/ProductDetails/ProductPreview";
import ProductSummary from "Components/ProductDetails/ProductSummary";
import SideSection from "Components/ProductDetails/SideSection";
import CreateProductQA from "Components/ProductQA/CreateProductQA";
import CustomersQA from "Components/ProductQA/CustomersQA";
import CreateReviewsAndRatings from "Components/ReviewsAndRatings/CreateReviewsAndRatings";
import CustomersReviews from "Components/ReviewsAndRatings/CustomersReviews";
import ProductListCarousel from "Components/SliderAndCarousel/ProductListCarousel";
import { useAddToCart } from "Hooks/useCart";
import { useProductDetails } from "Hooks/useProduct";
import { useQuestionData } from "Hooks/useQuestions";
import { useOverallReview, useReviewData } from "Hooks/useReviews";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { Outlet, useParams } from "react-router-dom";
import { isAuthenticated } from "utilities/auth.utility";

function ProductDetails() {
	const { id } = useParams();
	const [, setLoginModalOpen] = useAtom(loginModal);
	const { mutate: addToCartMutation } = useAddToCart();
	const { data: rating, isLoading, isError } = useOverallReview(id);
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

	if (productIsLoading) {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<BarSpinner />
			</div>
		);
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
						total={rating?.data.total}
						average={rating?.data.average}
						handleScrollToReview={scrollToReview}
						products={products?.data}
					/>

					{/* Side Section */}
					<SideSection returnDays={7} deliveryCharge={50} />
				</div>

				<div className="mt-4 pb-16 space-y-6 bg-white drop-shadow  divide-y-2 border border-gray-300 px-3 md:px-8">
					{/* Product Summary */}
					<ProductSummary description={products?.data[0].description} />

					{/* Related Products */}
					{/* {products?.relavent.map((product) => ( */}
					<ProductListCarousel products={products?.relavent} />
					{/* ))} */}

					{products?.data.quantity > 0 && (
						<PrimaryButton
							handler={() => handleAddToCart(products?.data[0]?._id)}
							classes="px-12 py-2 md:hidden z-50 sticky bottom-0 left-0 right-0 w-full"
						>
							Add to Cart
						</PrimaryButton>
					)}

					{/* <div id="review--section" className="opacity-0"></div> */}

					{/* Create Reviews And Ratings */}
					{isAuthenticated() ? (
						<CreateReviewsAndRatings
							productId={id}
							key={id}
							totalReview={rating?.data.total}
							average={rating?.data.average}
						/>
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
