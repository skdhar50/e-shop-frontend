function DelicaryAddress({ address }) {
	const { address2, address1, city, phone, phone2 } = address;
	return (
		<div className="border-2 px-4 xl:pl-6 py-4 space-y-3 h-fit grow-0 lg:w-[400px]">
			<p className="text-xl font-[600] text-gray-500">
				Delivary Address
			</p>
			<div className="space-y-4 text-sm text-gray-600 md:text-sm">
				<div className="space-y-1">
					<p className="font-bold">Home/Office: </p>
					<p className="">{address2 + ", " + address1 + ", " + city}</p>
				</div>
				<p className="">
					<span className="font-bold pr-2">Phone: </span>
					{phone + `${phone2 !== undefined ? `, ${phone2}` : ""}`}
				</p>
			</div>
		</div>
	);
}

export default DelicaryAddress;
