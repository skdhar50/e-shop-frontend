import { footerLists } from "Components/data/database";

function Footer() {
	return (
		<div className="mt-20 antialiased bg-[#626669] md:h-[480px] flex justify-center items-center">
			<div className="py-6 px-4 md:py-0 lg:px-12 xl:container  text-white">
				<div className="flex md:flex-row flex-col space-x-8 space-y-4 md:space-y-0">
					<div className="space-y-4 md:basis-1/3 lg:basis-1/2 md:space-y-6">
						<div className="space-y-3">
							<p className="text-lg font-semibold">Sign Up to Us</p>
							<p className="text-sm">
								Subscribe our newsletter gor get notification about information
								discount.
							</p>
						</div>
						<div className="space-y-3">
							<input
								type="text"
								placeholder="Enter your email address"
								name=""
								id=""
								className="w-full rounded-md placeholder:text-slate-400"
							/>
							<button className="px-8 py-2 bg-[#E3A342] rounded font-semibold hover:bg-opacity-90">
								Subcribe
							</button>
						</div>
						<div className="space-y-2 lg:flex justify-between items-center">
							<p className="lg:text-lg font-semibold lg:pr-2">Follow Us:</p>
							<div className="flex items-center space-x-4 grow">
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/facebook.svg"
										alt=""
										className="w-[1.6rem]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/twitter.svg"
										alt=""
										className="w-[1.6rem]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/youtube.svg"
										alt=""
										className="w-[1.6rem]"
									/>
								</a>
								<a href="http://test.com" className="cursor-pointer">
									<img
										src="/images/icons/email.svg"
										alt=""
										className="w-[1.6rem]"
									/>
								</a>
							</div>
						</div>
						<div className="">
							<img src="/images/icons/payment.svg" alt="" className="" />
						</div>
					</div>
					{footerLists.map((list, index) => (
						<div className="md:basis-1/4 lg:basis-1/3 space-y-2 md:space-y-3 lg:pl-6" key={index}>
							<p className="text-lg font-semibold">{list.title}</p>
							<div className="text-sm md:text-sm">
								<ul className="space-y-1">
									{list.options.map((option, index) => (
										<li className="">
											<a href={option.url} className="">
												<p className="">{option.title}</p>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col justify-end items-end pt-6">
					<p className="text-[13px]">Privacey Policy | Terms of Services</p>
					<p className="text-[13px]">
						Copyright @ 2022 PUC Shop. All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
