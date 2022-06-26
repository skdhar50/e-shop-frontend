function ShippingAddressCard({ address }) {
	const { name, phone, phone2, city, area, zone, fullAddress } = address;

	return (
		<li className="border shadow rounded-md py-4 px-4 md:px-6">
			<div className="md:flex space-y-4 md:space-x-4 xl:space-x-6 2xl:space-x-12 justify-start items-center w-full py-2">
				<div className="flex items-center space-x-4">
					<input
						type="radio"
						name="address"
						id=""
						className="w-5 h-5 cursor-pointer text-indigo-600 focus:outline-none focus:ring-0"
					/>
					<label htmlFor="" className="">
						<p className="text-xl text-gray-600 font-bold">{area}</p>
					</label>
				</div>

				<div className="flex flex-col flex-grow space-y-1 text-gray-600 text-sm md:text-base md:w-2/4 md:px-4">
					<p className="">
						<span className="font-bold text-gray-700 pr-2">Name:</span>
						{name}
					</p>
					<p className="">
						<span className="font-bold text-gray-700 pr-2">Phone:</span>
						{phone} {phone2.length > 0 ? `, ${phone2}` : ""}
					</p>
					<div className="text-justify space-y-2">
						<div className="">
							<span className="font-bold text-gray-700 pr-2">Address:</span>
						<div className="">{fullAddress}</div>
							<div className="flex justify-start space-x-6">
								<p className="">City: {city}</p>
								<p className="">Area: {area}</p>
								{zone && <p className="">Zone: {zone}</p>}
							</div>
						</div>
					</div>
				</div>

			</div>
				<div className="space-x-8 md:space-x-4 mt-4 md:pt-0 justify-end flex">
					<button className="flex justify-center items-center text-blue-500 hover:text-opacity-80 space-x-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
						<p className="">Edit</p>
					</button>
					<button className="flex justify-center items-center text-blue-500 hover:text-opacity-80 space-x-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
						<p className="">Delete</p>
					</button>
				</div>
		</li>
	);
}

export default ShippingAddressCard;
