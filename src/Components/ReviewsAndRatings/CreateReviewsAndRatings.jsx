import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import SecondaryButton from "Components/Common/Buttons/SecondaryButton";
import MultipleImageUpload from "Components/Form/MultipleImageUpload";
import ReviewStar from "Components/ReviewsAndRatings/ReviewStar";
import { useIsReviewed, usePostReview } from "Hooks/useReviews";
import { useState } from "react";
import { isAuthenticated } from "utilities/auth.utility";
import StarRating from "./StarRating";

function ReviewsAndRatings({ productId, totalReview, average }) {
	const [showReviewForm, setShowReviewForm] = useState(false);

	const [review, setReview] = useState("");
	const [files, setFiles] = useState([]);
	const [rating, setRating] = useState(0);
	const { mutate: createReviewMutation } = usePostReview(productId);
	const { data: isReviewed } = useIsReviewed(productId, isAuthenticated());

	const handleReview = (review) => {
		setReview(review);
	};

	const handleRating = (rating) => {
		setRating(rating);
	};

	const handleFiles = (file) => {
		setFiles([...files, ...file]);
	};

	const handleRemoveFile = (e, index) => {
		e.preventDefault();
		const newFiles = [...files];
		newFiles.splice(index, 1);
		setFiles(newFiles);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.set("review", review);
		formData.set("rating", rating);
		// formData.set('photos', files[0]);
		files.forEach((file) => {
			formData.append("photos", file);
		});
		// console.log(formData.get('photos'));
		createReviewMutation({ value: formData, id: productId });
		// console.log(files);
		setReview("");
		setRating(0);
		setFiles([]);
	};

	const handleShowReviewForm = () => {
		setShowReviewForm(!showReviewForm);
	};

	return (
		<div className="space-y-4 w-full pb-6 pt-10">
			<p className="text-xl md:text-2xl font-[600] text-gray-600">
				Reviews and Ratings
			</p>
			<div className="space-y-4">
				<div className="md:flex md:justify-between items-center">
					<div className="flex space-x-4 pb-6 md:pb-0 md:space-x-8 justify-start items-center">
						<p className="text-4xl text-gray-700">
							{average}
							{average ? ".0" : ""}
						</p>
						<div className="space-y-2">
							<p className="text-gray-600">{totalReview} Ratings and Reviews</p>
							{average ? (
								<ReviewStar rating={average} classes="md:text-2xl" />
							) : (
								""
							)}
						</div>
					</div>
					{!isReviewed?.data && (
						<div className="mt-4 md:mt-0">
							{/* <button
								className="border-2 border-indigo-500 text-indigo-500 text-lg px-3 py-2 rounded-md"
								onClick={handleShowReviewForm}
							>
								{showReviewForm ? "Cancel" : "Write a Review"}
							</button> */}
							<SecondaryButton
								handler={handleShowReviewForm}
								classes="px-3 py-2 rounded-md"
							>
								{showReviewForm ? "Cancel" : "Write a Review"}
							</SecondaryButton>
						</div>
					)}
				</div>
				{!isReviewed?.data && showReviewForm && (
					<form
						onSubmit={handleSubmit}
						action=""
						encType="multipart/form-data"
						className="border border-gray-300 py-6 px-2 md:p-4 space-y-6"
					>
						{/* Review */}
						<textarea
							rows="3"
							value={review}
							onChange={(e) => handleReview(e.target.value)}
							className="w-full resize-none border-0 border-b border-b-gray-300 outline-none p-1 md:p-2 focus:ring-0 placeholder:text-sm md:placeholder:text-base placeholder:text-slate-400"
							placeholder="Please write your honest opinion and give a rating"
						/>
						<div className="flex flex-col space-y-4 md:flex-row md:space-x-6 items-center">
							{/* Rating */}
							<StarRating handleRating={handleRating} rating={rating} />

							{/* Image upload */}
							<MultipleImageUpload
								handleFiles={handleFiles}
								handleRemoveFile={handleRemoveFile}
								files={files}
							/>

							{/* <button
								type="submit"
								className="w-full md:w-fit border px-6 py-2 h-fit border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
								disabled={rating === 0 || review.length < 4}
							>
								Submit
							</button> */}
							<PrimaryButton
								type="submit"
								classes="w-full md:w-fit px-6 py-2 h-fit"
								disabled={rating === 0 || review.length < 4}
							>
								Submit
							</PrimaryButton>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default ReviewsAndRatings;
