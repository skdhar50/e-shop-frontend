import React from "react";

function ReviewStar({ rating }) {
	return (
		<div>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						key={index}
						disabled={true}
						onClick={(e) => e.preventDefault()}
						className={rating >= index ? "text-[#E96115]" : "text-gray-500"}
					>
						<span className="text-lg">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
}

export default ReviewStar;
