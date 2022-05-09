function DelicaryAddress({ address, phone }) {
	return (
		<div className="border-2 px-4 xl:pl-6 py-4 space-y-3 h-fit grow-0 md:w-[400px]">
			<p className="font-poppins text-[20px] md:text-[20px] xl:text-[28px] text-[#353535]">
				Delivary Address
			</p>
			<div className="space-y-3">
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
