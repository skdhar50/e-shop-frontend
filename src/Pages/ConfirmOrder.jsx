import PaymentMethodCard from "Components/Cards/PaymentMethodCard";
import ShippingAddressCard from "Components/Cards/ShippingAddressCard";
import CheckoutSummary from "Components/Cart/CheckoutSummary";
import Layout from "Components/Layout";
import CreateNewShippingAddress from "Components/Modals/CreateNewShippingAddress";
import { useState } from "react";
import { useShippingAddressData } from "Hooks/useShippingAddress";
import { isAuthenticated } from "utilities/auth.utility";
import { useCartData } from "Hooks/useCart";
import { usePlaceOrderData } from "Hooks/useOrder";
import { useCouponData } from "Hooks/useCoupon";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "Components/Common/Buttons/SecondaryButton";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

function ConfirmOrder() {
	const navigate = useNavigate();

	const {
		data: shippingAddress,
		isLoading: shippingLoading,
		isError: shippingIsError,
		error: shippingError,
	} = useShippingAddressData();

	const {
		data: cartItems,
		isSuccess,
		isLoading,
		error,
		isError,
	} = useCartData(isAuthenticated());

	const getCartTotal = () => {
		let carttotal = cartItems?.data.map((item) => {
			if (item.isSelected) {
				return parseInt(item.product.unitPrice) * parseInt(item.count);
			}
			return 0;
		});

		if (carttotal) {
			return carttotal.reduce((acc, item) => {
				return acc + item;
			}, 0);
		} else {
			return 0;
		}
	};

	const getPayAblePrice = () => {
		const payable = getCartTotal() + 50;
		return payable;
	};

	const paymentMethods = [
		{
			isCOD: true,
			image: "/images/icons/cod.png",
			width: 45,
			height: 45,
			value: "cod",
		},
		{
			image: "/images/icons/icon-ssl.png",
			width: 258,
			height: 40,
			value: "card",
		},
	];

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState({});
	const [selectedPayment, setSelectedPayment] = useState("");
	const [coupon, setCoupon] = useState("");
	const [discount, setDiscount] = useState(0);

	const handleNavigate = (orderId, paymentMethod) => {
		if (paymentMethod === "cod") {
			navigate("/profile/orders", {
				replace: true,
			});
		}
		if (paymentMethod === "card") {
			navigate(`/payment/${orderId}`, {
				replace: true,
			});
		}
	};

	const handleDiscount = (value) => {
		setDiscount(value);
	};

	const handleCouponChange = (e) => {
		e.preventDefault();

		setCoupon(e.target.value);
	};

	const { mutate: placeOrderMutation } = usePlaceOrderData(
		handleNavigate,
		selectedPayment
	);

	const { mutate: couponMutation } = useCouponData(handleDiscount);

	const handleCoupon = () => {
		couponMutation({ coupon: coupon, amount: getCartTotal() });
	};

	const handleSelectAddress = (address) => {
		const obj = _.pick(address, [
			"area",
			"city",
			"fullAddress",
			"phone",
			"phone2",
			"name",
			"zone",
		]);
		setSelectedAddress(obj);
	};

	const handleSelectPayment = (e) => {
		setSelectedPayment(e.target.value);
	};

	const handleOpenModal = () => {
		setIsOpenModal(!isOpenModal);
	};

	const isValidToProced = () => {
		if (Object.keys(selectedAddress).length === 0) return false;
		if (selectedPayment.length === 0) return false;
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isValidToProced()) return;

		const temp = {
			shipping: selectedAddress,
			payment: selectedPayment,
			discount: 0,
		};
		placeOrderMutation(temp);
	};

	return (
		<Layout title="Confirm Order">
			{isOpenModal && (
				<CreateNewShippingAddress onCloseHandler={handleOpenModal} />
			)}
			<div className="md:px-6 xl:container antialiased">
				<div className="pb-14 pt-8 lg:pt-0 space-y-4 xl:space-y-0 md:pb-0 xl:flex xl:space-x-6 mt-10">
					<form
						method="POST"
						encType="multipart/form-data"
						onSubmit={handleSubmit}
						className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:justify-between w-full lg:space-x-4"
					>
						<div className="md:flex-grow bg-white drop-shadow-sm space-y-8 border md:shadow-md p-3 md:p-6">
							<div className="space-y-4">
								<p className="text-xl md:text-2xl font-[600] text-gray-600">
									Shipping Address
								</p>
								<div className="">
									<ul className="space-y-2 pb-3">
										{shippingAddress?.data.map((address) => (
											<ShippingAddressCard
												address={address}
												key={address._id}
												handleSelectAddress={handleSelectAddress}
											/>
										))}
									</ul>

									<SecondaryButton
										handler={handleOpenModal}
										classes="w-full rounded"
									>
										<p className="py-2 flex justify-center items-center text-center cursor-pointer">
											<span className="text-2xl pr-2">+</span> Add New Address
										</p>
									</SecondaryButton>
								</div>
							</div>

							<div className="space-y-5">
								<p className="text-xl md:text-2xl font-[600] text-gray-600">
									Payment Method
								</p>
								<div className="">
									<div action="" className="grid md:grid-cols-2 gap-4">
										{paymentMethods.map((paymentMethod, index) => (
											<PaymentMethodCard
												{...paymentMethod}
												handleSelectPayment={handleSelectPayment}
												key={index}
											/>
										))}
									</div>
								</div>
							</div>

							<div className="flex justify-end md:mt-5 relative">
								<PrimaryButton
									disabled={!isValidToProced()}
									classes="hidden md:block rounded-sm w-1/4 py-2"
									type="submit"
								>
									Confirm Order
								</PrimaryButton>
								<PrimaryButton
									type="submit"
									disabled={!isValidToProced()}
									classes="md:hidden w-full py-3"
								>
									Confirm Order
								</PrimaryButton>
							</div>
						</div>

						<div className="md:min-w-[280px] bg-white drop-shadow-sm xl:min-w-[320px] h-fit border-2 p-6 md:shadow space-y-12">
							<CheckoutSummary
								subTotal={getCartTotal()}
								shipping={50}
								payablePrice={getPayAblePrice()}
								discount={discount}
							/>
							<div className="">
								<div className="pb-4 text-xl">Apply Coupon</div>
								<div className="flex space-x-2">
									<input
										type="text"
										placeholder="Enter Coupon"
										name="coupon"
										id="coupon"
										value={coupon}
										onChange={handleCouponChange}
										className="w-full rounded"
									/>
									<PrimaryButton handler={handleCoupon} classes="w-1/3 rounded">
										Apply
									</PrimaryButton>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	);
}

export default ConfirmOrder;
