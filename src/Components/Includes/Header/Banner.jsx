function Banner() {
	return (
		<div className="">
			<div className="relative flex justify-center items-center">
				<div className="hidden sm:block absolute md:left-[170px] xl:left-80">
					<div className="w-fit ">
						<p className="md:text-[50px] xl:text-[70px] font-poppins text-[#851225] leading-tight">
							Explore <br /> <span className="md:text-[70px] xl:text-[90px]">Exclusive</span>{" "}
							<br /> Deals
						</p>
						<button className="md:px-8 md:py-2 xl:px-12 xl:py-4 text-white bg-[#2F1119] bg-opacity-90 text-xl rounded-md hover:bg-opacity-100 mt-6">
							Shop Now
						</button>
					</div>
				</div>
				<div className="max-w-full sm:mt-0">
					<img
						src="/images/banners/banner-1.png"
						alt=""
						className="w-full h-[200px] sm:h-[350px] md:h-[450px] xl:h-[613px] object-fit"
					/>
				</div>
			</div>
		</div>
	);
}

export default Banner;
