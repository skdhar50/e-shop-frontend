
function NavBarLarge() {
	return (
		<div className="w-full h-[45px] bg-gray-200 bg-opacity-50 flex items-center justify-center">
			<div className="xl:container md:w-full">
				<ul className="flex justify-around items-center">
					<li className="block hover:bg-gray-200 py-2 w-full text-center cursor-pointer">
						All Categories
					</li>
					<li className="block hover:bg-gray-200 py-2 w-full text-center cursor-pointer">
						Brands
					</li>
					<li className="block hover:bg-gray-200 py-2 w-full text-center cursor-pointer">
						Online Exclusive
					</li>
					<li className="block hover:bg-gray-200 py-2 w-full text-center cursor-pointer">
						Weekly Offers
					</li>
					<li className="block hover:bg-gray-200 py-2 w-full text-center cursor-pointer">
						New Arrivals
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBarLarge;
