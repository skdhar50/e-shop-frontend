import { useState } from "react";

function StarRating() {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						onClick={() => setRating(index)}
						className={
							(rating || hover) >= index ? "text-[#E96115]" : "text-gray-500"
						}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className="text-3xl">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
}

export default StarRating;
