function MyNotifications() {
	return (
		<div className="border-2 bg-white drop-shadow-sm p-2 md:p-6 space-y-8 xl:flex-grow">
			<div className="border-b-2 pb-4">
				<p className="text-2xl">My Notifications</p>
			</div>
			<div className="space-y-4">
				{/* <div className="text-center w-full text-lg text-gray-500">
					No notifications found.
				</div> */}
				<div className="space-y-2 border-2 p-6 shadow-md rounded">
					<p className="md:text-lg border-b pb-2 font-semibold text-gray-600">
						Order{" "}
						<span className="text-green-700 text-opacity-70">: Success</span>
					</p>
					<p className="text-gray-600 py-2 italic text-sm md:text-base">
						We have received your order with order id : 123ddds. The order is
						under processing now. We hope to delivar it to you soon. Thank you
						to be with us.
					</p>
					<p className="text-gray-600 italic border-t pt-2 text-xs md:text-sm">
						23 January, 2022
					</p>
				</div>

				<div className="space-y-2 border-2 p-6 shadow-md rounded">
					<p className="md:text-lg border-b pb-2 font-semibold text-gray-600">
						Order <span className="text-red-700 text-opacity-70">: Failed</span>
					</p>
					<p className="text-gray-600 py-2 italic text-sm md:text-base">
						We have received your order with order id : 123ddds. The order is
						under processing now. We hope to delivar it to you soon. Thank you
						to be with us.
					</p>
					<p className="text-gray-600 italic border-t pt-2 text-xs md:text-sm">
						23 January, 2022
					</p>
				</div>

				<div className="space-y-2 border-2 p-6 shadow-md rounded">
					<p className="md:text-lg border-b pb-2 font-semibold text-gray-600">
						Offer{" "}
						<span className="text-yellow-600 text-opacity-70">: Exclucive</span>
					</p>
					<p className="text-gray-600 py-2 italic text-sm md:text-base">
						We have received your order with order id : 123ddds. The order is
						under processing now. We hope to delivar it to you soon. Thank you
						to be with us.
					</p>
					<p className="text-gray-600 italic border-t pt-2 text-xs md:text-sm">
						23 January, 2022
					</p>
				</div>
			</div>
		</div>
	);
}

export default MyNotifications;
