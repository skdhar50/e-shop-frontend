import React from "react";

function CustomersReviews() {
	return (
		<>
			<div className="space-y-4">
				<div className="flex space-x-6">
					<img
						src="/images/users/31.jpg"
						alt=""
						className="rounded-full w-[60px] h-[60px]"
					/>
					<div className="space-y-1">
						<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
							<p className="space-x-1">
								<span className="text-gray-500">By</span>
								<span className="font-[600] text-gray-700">
									Sanjoy Kumar Dhar,
								</span>
							</p>
							<p className="text-gray-500 text-sm md:text-base">22 January 2022</p>
						</div>
						<div className="flex space-x-6 text-sm md:text-base">
							<img src="/images/icons/stars.svg" alt="" className="w-16" />
							<p className="text-green-600 flex items-center justify-center space-x-2">
								<span className="">&#10004;</span>
								<span>Verified Purchase</span>
							</p>
						</div>
					</div>
				</div>
				<div className="">
					<p className="text-sm md:text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
						nesciunt neque ad ipsum ducimus, natus nobis impedit excepturi eum
						nulla. Tempore optio, autem et natus soluta ea minus ducimus saepe.
					</p>
				</div>
				<div className="space-y-3">
					<p className="text-sm text-gray-400">
						3 out of 4 people found this review helpful. Was this review helpful
						to you?
					</p>
					<div className="flex items-center space-x-5">
						<button className="px-2 py-1 border rounded-md bg-gray-50 hover:bg-gray-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-7 md:w-8 h-7 md:h-8 stroke-slate-400"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5"
								/>
							</svg>
						</button>
						<button className="px-2 py-1 border rounded-md bg-gray-50 hover:bg-gray-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-7 md:w-8 h-7 md:h-8 stroke-slate-400 rotate-180"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14 10h4.764a2 2 0 0 1 1.789 2.894l-3.5 7A2 2 0 0 1 15.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 0 0-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 0 1-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default CustomersReviews;
