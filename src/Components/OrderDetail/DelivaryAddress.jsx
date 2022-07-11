function DelicaryAddress({ address }) {
	const { address2, address1, city, phone, phone2 } = address;
	return (
		<div className="border-2 px-4 xl:pl-6 py-4 space-y-3 h-fit grow-0 lg:w-[400px]">
			<p className="text-xl md:text-2xl font-[600] text-gray-600">
				Delivary Address
			</p>
			<div className="space-y-4 text-sm md:text-base">
				<p className="">
					<span className="font-bold pr-2">Home/Office: </span>
					{address2 + ", " + address1 + ", " + city}
				</p>
				<p className="">
					<span className="font-bold pr-2">Phone: </span>
					{phone + `${phone2 !== undefined ? `, ${phone2}` : ""}`}
				</p>
			</div>
		</div>
	);
}

export default DelicaryAddress;
