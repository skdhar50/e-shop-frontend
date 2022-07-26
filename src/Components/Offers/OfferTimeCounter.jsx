import { useCountdown } from "Hooks/useCountdown";

function OfferTimeCounter({ targetDate }) {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0)
		return <p className="text-red-500 font-semibold">Offer Expired</p>;
	return (
		<div className="flex items-center space-x-1 sm:space-x-3 text-sm sm:text-base pt-6 sm:pt-0">
			<p className="hidden sm:block">Offers Ends In:</p>
			<div className="flex flex-col space-y-0.5 items-center">
				<p className="px-2 py-1 bg-[#004E7E] text-xs sm:text-base text-white font-semibold rounded-md">
					{days > 9 ? days : "0" + days}
				</p>
				<p className="text-[10px] sm:text-xs text-gray-800">Days</p>
			</div>
			<div className="flex flex-col space-y-0.5 items-center">
				<p className="px-2 py-1 bg-[#004E7E] text-xs sm:text-base text-white font-semibold rounded-md">
					{hours > 9 ? hours : "0" + hours}
				</p>
				<p className="text-[10px] sm:text-xs text-gray-800">Hours</p>
			</div>
			<div className="flex flex-col space-y-0.5 items-center">
				<p className="px-2 py-1 bg-[#004E7E] text-xs sm:text-base text-white font-semibold rounded-md">
					{minutes > 9 ? minutes : "0" + minutes}
				</p>
				<p className="text-[10px] sm:text-xs text-gray-800">Minutes</p>
			</div>
			<div className="flex flex-col space-y-0.5 items-center">
				<p className="px-2 py-1 bg-[#004E7E] text-xs sm:text-base text-white font-semibold rounded-md">
					{seconds > 9 ? seconds : "0" + seconds}
				</p>
				<p className="text-[10px] sm:text-xs text-gray-800">Seconds</p>
			</div>
		</div>
	);
}

export default OfferTimeCounter;
