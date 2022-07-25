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
					"md:p-4 md:w-[70px] md:h-[70px] xl:p-6 xl:w-[80px] xl:h-[80px] rounded-full flex items-center justify-center" +
					(isDone ? " bg-green-500" : " bg-gray-300")
				}
			>
				<img
					src="/images/icons/check.svg"
					alt=""
					className="w-[35px] h-[35px]"
				/>
			</div>
			<div className="text-center pt-3 text-gray-600 md:text-sm">
				<p className="">{title}</p>
				{isDone ? <p className="">{date}</p> : <p className="">Pending</p>}
			</div>
		</div>
	);
}

export default OrderDeliveryInfoCard;
