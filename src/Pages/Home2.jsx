import React from 'react'

function Home2() {
  return (
		<div className="antialiased">
			<div className="lg:hidden h-[80px] w-full bg-gray-800 flex justify-between items-center px-4">
				<div className="space-y-2">
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
				</div>
				<div className="space-y-2">
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
					<div className="h-[4px] w-[30px] bg-gray-200"></div>
				</div>
			</div>
			<div className="h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] w-full">
				<img
					src="/images/banners/banner-2.jpg"
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="px-4 space-y-12 mt-8">
				<div className="flex flex-col justify-center items-center space-y-6">
					<div className="">
						<p className="text-xl xl:text-2xl font-bold text-gray-600">
							Featured Categories
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 xs:px-4">
						<div className="relative lg:max-w-[180px] xl:max-w-[220px]">
							<img
								src="/images/featuredCategories/menFasion.jpg"
								alt=""
								className="h-[200px] w-full object-cover"
							/>
							<div className="bg-black bg-opacity-60 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg xl:text-xl font-bold">
								<p className="text-center">Men's Fasion</p>
							</div>
						</div>
						<div className="relative lg:max-w-[180px] xl:max-w-[220px]">
							<img
								src="/images/featuredCategories/womenFasion.jpg"
								alt=""
								className="h-[200px] w-full object-cover"
							/>
							<div className="bg-black bg-opacity-60 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold">
								<p className="text-center">Women's Fasion</p>
							</div>
						</div>
						<div className="relative lg:max-w-[180px] xl:max-w-[220px]">
							<img
								src="/images/featuredCategories/menFasion.jpg"
								alt=""
								className="h-[200px] w-full object-cover"
							/>
							<div className="bg-black bg-opacity-60 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold">
								<p className="text-center">Men's Fasion</p>
							</div>
						</div>
						<div className="relative lg:max-w-[180px] xl:max-w-[220px]">
							<img
								src="/images/featuredCategories/womenFasion.jpg"
								alt=""
								className="h-[200px] w-full object-cover"
							/>
							<div className="bg-black bg-opacity-60 absolute bottom-0 text-white font bold w-full h-1/2 flex justify-center items-center text-lg font-bold">
								<p className="text-center">Women's Fasion</p>
							</div>
						</div>
					</div>
					<div className="flex space-x-4">
						<div className="h-[4px] w-[20px] bg-gray-400"></div>
						<div className="h-[4px] w-[20px] bg-gray-300"></div>
						<div className="h-[4px] w-[20px] bg-gray-300"></div>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center space-y-6">
					<div className="">
						<p className="text-xl xl:text-2xl font-bold text-gray-600">
							Why Us?
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="bg-gray-100 w-full flex flex-col justify-center items-center space-y-4 border p-3 lg:p-5 xl:p-8 rounded border-gray-200">
							<img
								src="/images/demo/free-shipping.svg"
								alt=""
								className="lg:w-3/4"
							/>
							<p className="font-bold text-gray-500 lg:text-lg text-center">
								Free Shipping
							</p>
						</div>
						<div className="bg-gray-100 w-full flex flex-col justify-center items-center space-y-4 border p-3 lg:p-5 xl:p-8 rounded border-gray-200">
							<img
								src="/images/demo/return-product.svg"
								alt=""
								className="lg:w-3/5"
							/>
							<p className="font-bold text-gray-500 lg:text-lg text-center">
								30 Days Return
							</p>
						</div>
						<div className="bg-gray-100 w-full flex flex-col justify-center items-center space-y-4 border p-3 lg:p-5 xl:p-8 rounded border-gray-200">
							<img src="/images/demo/support.svg" alt="" className="lg:w-3/5" />
							<p className="font-bold text-gray-500 lg:text-lg text-center">24/7 Support</p>
						</div>
						<div className="bg-gray-100 w-full flex flex-col justify-center items-center space-y-4 border p-3 lg:p-5 xl:p-8 rounded border-gray-200">
							<img
								src="/images/demo/secure-payment.svg"
								alt=""
								className="lg:w-3/5"
							/>
							<p className="font-bold text-gray-500 lg:text-lg text-center">
								Secure Payment
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home2