import MultipleImageUpload from "Components/Form/MultipleImageUpload";
import { useState } from "react";
import StarRating from "./StarRating";

function ReviewsAndRatings() {
	const [showReviewForm, setShowReviewForm] = useState(true);

	const handleShowReviewForm = () => {
		setShowReviewForm(!showReviewForm);
	};

	return (
		<div className="space-y-4 w-full pb-6 pt-10">
			<p className="text-xl md:text-2xl font-[600] text-gray-600">
				Reviews and Ratings
			</p>
			<div className="space-y-4">
				<div className="flex justify-between items-center">
					<div className="flex space-x-4 pb-6 md:pb-0 md:space-x-8 justify-between items-center">
						<p className="text-4xl text-gray-700">4.77</p>
						<div className="space-y-2">
							<p className="text-gray-600">260 Ratings and 200 Reviews</p>
							<img src="/images/icons/stars.svg" alt="" className="" />
						</div>
					</div>
					<div className="hidden md:block">
						<button
							className="border-2 border-indigo-500 text-indigo-500 text-lg px-3 py-2 rounded-md"
							onClick={handleShowReviewForm}
						>
							{showReviewForm ? "Cancel" : "Write a Review"}
						</button>
					</div>
				</div>
				{showReviewForm && (
					<form
						onSubmit={(e) => e.preventDefault()}
						action=""
						className="border border-gray-300 py-6 px-2 md:p-4 space-y-6"
					>
						<textarea
							name=""
							id=""
							rows="3"
							className="w-full resize-none border-0 border-b border-b-gray-300 outline-none p-1 md:p-2 focus:ring-0 placeholder:text-sm md:placeholder:text-base placeholder:text-slate-400"
							placeholder="Please write your honest opinion and give a rating"
						/>
						<div className="flex flex-col space-y-4 md:flex-row md:space-x-6 items-center">
							<StarRating />

							<MultipleImageUpload />

							<button className="w-full md:w-fit border px-6 py-2 h-fit border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
								Submit
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}

export default ReviewsAndRatings;
