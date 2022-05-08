function Footer() {
	return (
		<div className="mt-20 antialiased bg-[#626669] md:h-[480px] flex justify-center items-center">
			<div className="py-6 px-4 md:py-0 md:px-12 xl:container  text-white">
				<div className="flex md:flex-row flex-col space-x-8 space-y-4 md:space-y-0">
					<div className="space-y-4 md:basis-1/2 md:space-y-8">
						<div className="space-y-3">
							<p className="text-[20px] font-semibold">Sign Up to Us</p>
							<p className="">
								Subscribe our newsletter gor get notification about information
								discount.
							</p>
						</div>
						<div className="space-y-3">
							<input type="text" placeholder="Enter your email address" name="" id="" className="w-full rounded-md placeholder:text-slate-400" />
							<button className="px-8 py-2 bg-[#E3A342] rounded font-semibold hover:bg-opacity-90">
								Subcribe
							</button>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-[20px] font-semibold">Follow Us:</p>
							<div className="flex items-center justify-around grow">
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/facebook.svg"
										alt=""
										className="w-[35px]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/twitter.svg"
										alt=""
										className="w-[35px]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/youtube.svg"
										alt=""
										className="w-[35px]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/email.svg"
										alt=""
										className="w-[35px]"
									/>
								</a>
							</div>
						</div>
						<div className="">
							<img src="/images/icons/payment.svg" alt="" className="" />
						</div>
					</div>
					<div className="md:basis-1/3 md:space-y-3 md:pl-6">
						<p className="text-[20px] font-semibold">Our Services</p>
						<div className="">
							<ul className="space-y-1">
								<li className="">
									<a href="test.com" className="">
										<p className="">Installment Service</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">After Sale Service</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Total Protection Service</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Extended Warrenty Service</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Discount Service</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Gift Card Service</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="md:basis-1/3 md:space-y-3 md:pl-6">
						<p className="text-[20px] font-semibold">Customer Care</p>
						<div className="">
							<ul className="space-y-1">
								<li className="">
									<a href="test.com" className="">
										<p className="">Corporate Sales</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">FAQ</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Shopping Guid</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Showroom Locator</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Warrenty Policy</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Return & Exchange</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Contact Us</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="md:basis-1/3 md:space-y-3">
						<p className="text-[20px] font-semibold">About Us</p>
						<div className="">
							<ul className="space-y-1">
								<li className="">
									<a href="test.com" className="">
										<p className="">Who We Are?</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Corporate Governance</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Investors Relations & Report</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Sustainability</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">News</p>
									</a>
								</li>
								<li className="">
									<a href="test.com" className="">
										<p className="">Job Opportunities</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-end items-end pt-6">
					<p className="text-[13px]">Privacey Policy | Terms of Services</p>
					<p className="text-[13px]">Copyright @ 2022 PUC Shop. All rights reserved</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
