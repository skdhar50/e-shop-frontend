function DelicaryAddress({ address, phone }) {
	return (
		<div className="border-2 px-4 xl:pl-6 py-4 space-y-3 h-fit grow-0 lg:w-[400px]">
			<p className="text-xl md:text-2xl font-[600] text-gray-600">
				Delivary Address
			</p>
			<div className="space-y-4 text-sm md:text-base">
				<p className="">
					<span className="font-bold pr-2">Home/Office: </span>
					{address}
				</p>
				<p className="">
					<span className="font-bold pr-2">Phone: </span>
					{phone}
				</p>
			</div>
		</div>
	);
}

export default DelicaryAddress;
