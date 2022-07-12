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

import { useState } from "react";
import { isAuthenticated } from "utilities/auth.utility";

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
	const [isAllSelected, setIsAllSelected] = useState(true);


	// if (isSuccess) {
	// 	cartItems?.data.map((item) => {
	// 		if (!item.isSelected) {
	// 			return setIsAllSelected(false);
	// 		}
	// 		return true;
	// 	});
	// }

	const decreaseCartItem = (item) => () => {
		// if (item.count > 1) {
		// 	dispatch(decreaseItemCount(item.id));
		// }

		if (item.count > 1) {
			cartItemMutation({ _id: item._id, count: item.count - 1 });
		}
	};

	const increaseCartItem = (item) => () => {
		// if (item.count < 8) {
		// 	dispatch(increaseItemCount(item.id));
		// }

		if (item.count < 8) {
			cartItemMutation({ _id: item._id, count: item.count + 1 });
		}
	};

	const removeCartItem = (item) => () => {
		// dispatch(removeFromCart(item.id));
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
		// dispatch(selectItem(item.id));
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
			// 	dispatch(selectAllItems());
			selectAllItemsMutation(true);
		} else if (!event.target.checked) {
			// 	dispatch(unselectAllItems());
			selectAllItemsMutation(false);
		}
	};

	return (
		<div className="md:px-6 xl:container antialiased">
			<div className="mt-20 lg:flex lg:space-x-6 space-y-5 lg:space-y-0">
				<div className="border p-4 grow bg-white h-fit drop-shadow space-y-8 py-6">
					{cartItems?.data.length > 0 ? (
						<>
							<div className="top-section--counter flex items-center justify-between px-4">
								{/* Select all button */}
								<div className="flex space-x-2 items-center">
									<input
										type="checkbox"
										className="text-green-700 focus:outline-none focus:ring-0 cursor-pointer"
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
									<p className="text-green-700">{getCartTotal()} TK</p>
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
									<button className="px-3 py-2 md:px-4 md:py-2 bg-indigo-500 text-white rounded-sm hover:bg-opacity-80">
										Continue Shopping
									</button>
								</Link>
								<Link to="/confirm-order">
									<button
										className="px-3 py-2 md:px-4 md:py-2 bg-indigo-500 text-white rounded-sm hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
										disabled={!selectedItems()}
									>
										Proceed to Checkout
									</button>
								</Link>
							</div>
						</>
					) : (
						<div className="flex justify-center items-center">
							<p className="text-xl text-slate-400">
								Cart is empty. Please select something first!
							</p>
						</div>
					)}
				</div>

				<div className="checkout-summary drop-shadow bg-white lg:w-[320px] border py-6 px-6 h-fit space-y-12">
					{/* Checkout Summary Scction */}
					<CheckoutSummary
						subTotal={getCartTotal()}
						shipping={shipping}
						payablePrice={getPayAblePrice()}
					/>
					<div className="">
						<div className="pb-4 text-xl">Apply Coupon</div>
						<div className="flex space-x-2">
							<input type="text" name="" id="" className="w-full rounded" />
							<button className="w-1/3 bg-indigo-500 text-white rounded hover:bg-opacity-80">
								Apply
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartContainer;
