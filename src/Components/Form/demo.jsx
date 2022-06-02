function Demo() {
	return (
		<div className="w-full h-[45px] bg-gray-200 bg-opacity-50 flex items-center justify-center">
			<div className="xl:container md:w-full">
				<ul className="flex justify-around items-center">
					<div className="group w-full relative">
						<li className="hover:bg-gray-200 py-2  text-center cursor-pointer">
							All Categories
						</li>
						<div className="absolute bg-indigo-200 w-full group-hover:block hidden">
							<div className="hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100  hover:text-white relative">
								<div className="flex group justify-between bg-cyan-200">
									<p className="">Demo</p>
									<p className="text-indigo-200">&#10095;</p>
									<div className="absolute left-full w-fit ml-1 bg-green-200 group-hover:block hidden">
										<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
											sub Demo
										</p>
										<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
											sub Demo
										</p>
										<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
											sub Demo
										</p>
									</div>
								</div>
							</div>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
						</div>
					</div>

					<div className="group w-full relative">
						<li className="hover:bg-gray-200 py-2  text-center cursor-pointer">
							Brands
						</li>
						<div className="absolute bg-indigo-200 w-full group-hover:block hidden">
							<div className="hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100 flex justify-between hover:text-white">
								<p className="">Demo</p>
								<p className="text-indigo-200">&#10095;</p>
							</div>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
						</div>
					</div>

					<div className="group w-full relative">
						<li className="hover:bg-gray-200 py-2  text-center cursor-pointer">
							Online Exclusive
						</li>
						<div className="absolute bg-indigo-200 w-full group-hover:block hidden">
							<div className="hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100 flex justify-between hover:text-white">
								<p className="">Demo</p>
								<p className="text-indigo-200">&#10095;</p>
							</div>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
							<p className="block hover:bg-indigo-300 px-4 py-3 cursor-pointer duration-100">
								Demo
							</p>
						</div>
					</div>

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

export default Demo;
