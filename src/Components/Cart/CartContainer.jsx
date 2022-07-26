import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CheckoutSummary from "./CheckoutSummary";
import {
	useCartData,
	useUpdateCartItem,
	useSelectAll,
	useSelectSingle,
	useDeleteCartItem,
} from "Hooks/useCart";
import { isAuthenticated } from "utilities/auth.utility";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import SecondaryButton from "Components/Common/Buttons/SecondaryButton";

function CartContainer({ shipping = 50 }) {
	const {
		data: cartItems,
		isSuccess,
		isLoading,
		error,
		isError,
	} = useCartData(isAuthenticated());
	const { mutate: cartItemMutation } = useUpdateCartItem();
	const { mutate: selectAllItemsMutation } = useSelectAll();
	const { mutate: selectSingleItemMutation } = useSelectSingle();
	const { mutate: deleteCartItemMutation } = useDeleteCartItem();

	const decreaseCartItem = (item) => () => {
		if (item.count > 1) {
			cartItemMutation({ _id: item._id, count: item.count - 1 });
		}
	};

	const increaseCartItem = (item) => () => {
		if (item.count < 8) {
			cartItemMutation({ _id: item._id, count: item.count + 1 });
		}
	};

	const removeCartItem = (item) => () => {
		deleteCartItemMutation(item._id);
	};

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
		const payable = getCartTotal() + shipping;
		return payable;
	};

	const setIsSelected = (item) => () => {
		selectSingleItemMutation({
			_id: item._id,
			flag: !item.isSelected,
		});
	};

	const selectedItems = () => {
		const items = cartItems?.data.filter((item) => item.isSelected === true);

		if (items.length > 0) return true;
		return false;
	};

	const setAllSelected = (event) => {
		if (event.target.checked) {
			selectAllItemsMutation(true);
		} else if (!event.target.checked) {
			selectAllItemsMutation(false);
		}
	};

	if (isLoading) {
		return <div className="">Loading....</div>;
	}
	return (
		<div className="px-1 md:px-6 xl:container antialiased">
			<div className="mt-20 lg:flex lg:space-x-6 space-y-5 lg:space-y-0">
				<div className="border px-1 sm:px-3 grow bg-white h-fit drop-shadow space-y-8 py-6">
					{cartItems?.data.length > 0 ? (
						<>
							<div className="top-section--counter flex items-center justify-between px-4">
								{/* Select all button */}
								<div className="flex space-x-2 items-center">
									<input
										type="checkbox"
										className="text-[#004E7E] focus:outline-none focus:ring-0 cursor-pointer"
										checked={
											cartItems.data.find(
												(item) => item.isSelected === false
											) === undefined
										}
										onChange={(event) => setAllSelected(event)}
									/>
									<p className="">Select all</p>
								</div>
								{/* Total amount of selection*/}
								<div className="flex text-xl items-center space-x-4 pr-4">
									<p className="font-[600] text-gray-700">Total:</p>
									<p className="text-[#004E7E]">{getCartTotal()} TK</p>
								</div>
							</div>

							<div className="cart--items space-y-3">
								{/* Cart items */}
								{cartItems?.data.length > 0 &&
									cartItems?.data.map((item, index) => (
										<CartItem
											key={item._id}
											item={item}
											onIncrease={increaseCartItem(item)}
											onDecrease={decreaseCartItem(item)}
											onRemove={removeCartItem(item)}
											onSelect={setIsSelected(item)}
										/>
									))}
							</div>

							<div className="flex space-x-2 justify-center md:justify-end md:space-x-4 md:pr-6">
								<Link to="/">
									<SecondaryButton classes="px-3 py-2 md:px-4 md:py-2 rounded-sm text-sm">
										Continue Shopping
									</SecondaryButton>
								</Link>
								<Link to="/confirm-order">
									<PrimaryButton
										classes="px-3 py-2 md:px-4 md:py-2 rounded-sm text-sm"
										disabled={!selectedItems()}
									>
										Proceed to Checkout
									</PrimaryButton>
								</Link>
							</div>
						</>
					) : (
						<div className="flex justify-center items-center">
							<div className="text-lg text-gray-600 min-h-[100px]">
								No items in Cart! Please select some items first!
							</div>
						</div>
					)}
				</div>

				{cartItems.data.length > 0 && (
					<div className="checkout-summary drop-shadow bg-white lg:w-[320px] border py-6 px-6 h-fit space-y-12">
						{/* Checkout Summary Scction */}
						<CheckoutSummary
							subTotal={getCartTotal()}
							shipping={shipping}
							payablePrice={getPayAblePrice()}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default CartContainer;
