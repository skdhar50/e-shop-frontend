import { useState } from "react";

function CartContainer({ cart = 3 }) {
	const [allSelected, setAllSelected] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);

	return (
		<div className="md:px-6 xl:container antialiased">
			<div className="mt-10 flex space-x-6">
				<div className="border p-4 grow h-fit">
					<div className="top-section--counter flex items-center justify-between">
						<div className="">
							<button
								className="flex items-center space-x-2"
								onClick={() => setAllSelected(!allSelected)}
							>
								{!allSelected ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								)}
								<p className="">Select All ({cart})</p>
							</button>
						</div>
						<div className="flex items-center space-x-4">
							<p className="">Total:</p>
							<p className="">{totalPrice} TK</p>
						</div>
					</div>
					<div className="cart--items space-y-6 pt-8">
						<div className="cart--items--item flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div className="flex items-center">
									<input
										type="checkbox"
										className="h-4 w-4"
										onChange={() => setAllSelected(!allSelected)}
									/>
									<img
										src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
										alt=""
										className="h-8 w-8"
									/>

									<div className="flex items-center space-x-2">
										<p className="">
											<span className="font-bold">
												Apple MacBook Pro 13-inch
											</span>
											<span className="text-gray-600">
												(16GB RAM, 512GB Storage)
											</span>
										</p>
										<p className="">
											<span className="text-gray-600">1 x</span>
											<span className="text-gray-600">1,000 TK</span>
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</button>
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="12" y1="5" x2="12" y2="19"></line>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</button>
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</button>
							</div>
						</div>

						<div className="cart--items--item flex items-center justify-between">
							<div className="flex items-center space-x-2">
								<div className="flex items-center space-x-2">
									<input
										type="checkbox"
										className="h-4 w-4"
										onChange={() => setAllSelected(!allSelected)}
									/>
									<img
										src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
										alt=""
										className="h-[100px] w-[100px] object-cover"
									/>

									<div className="flex items-center space-x-2">
										<p className="flex flex-col">
											<span className="font-bold">
												Apple MacBook Pro 13-inch
											</span>
											<span className="text-gray-600">
												(16GB RAM, 512GB Storage)
											</span>
										</p>
										<p className="">
											<span className="text-gray-600">1 x</span>
											<span className="text-gray-600">1,000 TK</span>
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</button>
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="12" y1="5" x2="12" y2="19"></line>
										<line x1="5" y1="12" x2="19" y2="12"></line>
									</svg>
								</button>
								<button className="text-gray-600">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="18" y1="6" x2="6" y2="18"></line>
										<line x1="6" y1="6" x2="18" y2="18"></line>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="checkout-summary w-[300px] border p-4 h-fit">
					<p className="pb-4">Checkout Summary</p>
					<div className="divide-y space-y-3">
						<div className="flex justify-between items-center pt-3">
							<p className="">Subtotal</p>
							<p className="">{0} TK</p>
						</div>
						<div className="flex justify-between items-center pt-3">
							<p className="">Shipping</p>
							<p className="">{0} TK</p>
						</div>
						<div className="flex justify-between items-center pt-3">
							<p className="">Total</p>
							<p className="">{0} TK</p>
						</div>
						<div className="flex justify-between items-center pt-3">
							<p className="">Payable Total</p>
							<p className="">{0} TK</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartContainer;
