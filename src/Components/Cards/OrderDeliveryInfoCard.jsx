function OrderDeliveryInfoCard({ title, date, isDone, index }) {
	return (
		<div
			className={
				"flex flex-col" +
				(index === 4
					? " justify-end items-end"
					: index === 1
					? " justify-start items-start"
					: " justify-center items-center")
			}
		>
			<div
				className={
					"md:p-4 md:w-[70px] md:h-[70px] xl:p-6 xl:w-[90px] xl:h-[90px] rounded-full flex items-center justify-center" +
					(isDone ? " bg-green-500" : " bg-gray-300")
				}
			>
				<img
					src="/images/icons/check.svg"
					alt=""
					className="w-[40px] h-[40px]"
				/>
			</div>
			<div className="text-center pt-3 text-gray-700 md:text-sm xl:text-base">
				<p className="">{title}</p>
				<p className="">{date}</p>
			</div>
		</div>
	);
}

export default OrderDeliveryInfoCard;
