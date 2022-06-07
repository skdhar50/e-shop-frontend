import PaymentMethodCard from "Components/Cards/PaymentMethodCard";
import ShippingAddressCard from "Components/Cards/ShippingAddressCard";
import CheckoutSummary from "Components/Cart/CheckoutSummary";
import Layout from "Components/Layout";
import CreateNewShippingAddress from "Components/Modals/CreateNewShippingAddress";
import { useState } from "react";

function ConfirmOrder() {
	const paymentMethods = [
		{
			isCOD: true,
			image: "/images/icons/cod.png",
			width: 45,
			height: 45,
		},
		{ image: "/images/icons/bkash.png", width: 80, height: 40 },
		{ image: "/images/icons/rocket.png", width: 70, height: 40 },
		{ image: "/images/icons/nogod.png", width: 70, height: 35 },
		{ image: "/images/icons/icon-ssl.png", width: 258, height: 40 },
	];

	const shippingAddress = [
		{
			area: "Agrabad",
			shipTo: "John Doe",
			phone: "0123456789",
			address:
				"room # 314 (annex building), supreme court bar association building, ramna, 1000",
		},
		{
			area: "Agrabad",
			shipTo: "John Doe",
			phone: "0123456789",
			address:
				"room # 314 (annex building), supreme court bar association building, ramna, 1000",
		},
	];

	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleOpenModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	return (
		<Layout title="Confirm Order">
			{isOpenModal && (
				<CreateNewShippingAddress onCloseHandler={handleOpenModal} />
			)}
			<div className="md:px-6 xl:container antialiased">
				<div className="pb-14 space-y-4 xl:space-y-0 md:pb-0 xl:flex xl:space-x-6 mt-10">
					<div className="md:flex-grow bg-white drop-shadow-sm space-y-8 border md:shadow-md p-3 md:p-6">
						<div className="space-y-4">
							<p className="text-xl md:text-2xl font-[600] text-gray-600">
								Shipping Address
							</p>
							<div className="">
								<form action="">
									<ul className="space-y-2 p-2">
										{shippingAddress.map((address, index) => (
											<ShippingAddressCard {...address} key={index} />
										))}
									</ul>
								</form>
								<button
									onClick={handleOpenModal}
									className="bg-indigo-100 w-full rounded"
								>
									<p className="py-2 flex justify-center items-center text-center cursor-pointer text-indigo-600">
										<span className="text-2xl pr-2">+</span> Add New Address
									</p>
								</button>
							</div>
						</div>

						<div className="space-y-5">
							<p className="text-xl md:text-2xl font-[600] text-gray-600">
								Payment Method
							</p>
							<div className="">
								<form action="" className="grid md:grid-cols-2 gap-4">
									{paymentMethods.map((paymentMethod, index) => (
										<PaymentMethodCard {...paymentMethod} key={index} />
									))}
								</form>
							</div>
						</div>

						<div className="flex justify-end md:mt-5 relative">
							<button className="hidden bg-indigo-500 md:block hover:bg-indigo-600 rounded-sm w-1/4 py-2 text-white">
								Confirm Order
							</button>
							<button className="md:hidden bg-indigo-500 fixed bottom-0 left-0 right-0 w-full hover:bg-indigo-600 py-3 text-lg text-white">
								Confirm Order
							</button>
						</div>
					</div>

					<div className="md:min-w-[280px] bg-white drop-shadow-sm xl:min-w-[320px] h-fit border-2 p-6 md:shadow">
						<CheckoutSummary />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ConfirmOrder;
