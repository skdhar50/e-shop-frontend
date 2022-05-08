
function TopBarLarge() {
	return (
		<div className="w-full h-[35px] bg-gray-200 bg-opacity-50 flex items-center justify-center">
			<div className="xl:container ">
				<div className="flex justify-between space-x-8">
					<ul className="flex md:space-x-3 xl:space-x-9">
						<li className="flex space-x-2">
							<img src="/images/icons/login.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Login/Register</p>
						</li>
						<li className="flex space-x-2">
							<img src="/images/icons/track.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Track Order</p>
						</li>
						<li className="flex space-x-2">
							<img src="/images/icons/service.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Services</p>
						</li>
						<li className="flex space-x-2">
							<img src="/images/icons/help.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Help</p>
						</li>
						<li className="flex space-x-2">
							<img src="/images/icons/location.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Our Location</p>
						</li>
					</ul>
					<ul className="flex md:space-x-3 xl:space-x-9">
						<li className="flex space-x-2">
							<img src="/images/icons/flag.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">Bangladesh</p>
						</li>
						<li className="flex space-x-2">
							<img src="/images/icons/language.svg" alt="" className="md:w-4 xl:w-6" />
							<p className="md:text-sm xl:text-base">English</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TopBarLarge;
