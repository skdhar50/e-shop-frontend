function SearchBarLearge() {
	return (
		<div className="xl:container">
			<div className="flex justify-around items-center px-12">
				<div className="logo">
					<p className="font-poppins md:text-3xl xl:text-4xl">PUC SHOP</p>
				</div>
				<div className="searchBar flex items-center flex-grow px-12">
					<div className="">
						<select
							name=""
							id=""
							className="border-[1px] h-12 bg-[#F6F6F6] border-[#787878] rounded-tl-lg rounded-bl-lg px-6 -mr-[2px] cursor-pointer focus:outline-none focus:border-[1px] focus:border-[#787878] focus:ring-0 bg-opacity-90 text-gray-600"
						>
							<option value="" selected disabled>
								All Categories
							</option>
							<option value="">Electronics</option>
							<option value="">Fashion</option>
							<option value="">Home & Garden</option>
							<option value="">Sports & Fitness</option>
						</select>
					</div>
					<div className="relative flex items-center flex-grow">
						<img
							src="/images/icons/search.svg"
							alt=""
							className="absolute right-5"
						/>
						<input
							type="text"
							placeholder="Search Products"
							className="w-full h-12 border-[1px] border-[#787878] rounded-tr-lg rounded-br-lg p-2 pr-4 pl-8 placeholder:text-gray-500 focus:outline-none focus:border-[1px] focus:border-blue-500 focus:ring-0 bg-[#F6F6F6] bg-opacity-90"
						/>
					</div>
				</div>
				<div className="cart">
					<div className="flex justify-center items-center space-x-3 bg-[#3E3CA5] w-fit px-2 py-2 rounded-md hover:bg-opacity-90 cursor-pointer">
						<img
							src="/images/icons/cart.svg"
							alt=""
							className="md:w-6 xl:w-7"
						/>
						<p className="text-white xl:text-lg">Cart</p>
						<p className="md:px-[6px] xl:px-[8px] md:text-sm xl:text-base rounded-full bg-white text-red-500">
							5
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchBarLearge;
