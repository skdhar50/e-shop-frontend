function ReviewStar({ rating, classes = "text-lg" }) {
	return (
		<div>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						key={index}
						disabled={true}
						onClick={(e) => e.preventDefault()}
						className={rating >= index ? "text-[#004E7E]" : "text-gray-300"}
					>
						<span className={classes}>&#9733;</span>
					</button>
				);
			})}
		</div>
	);
}

export default ReviewStar;
