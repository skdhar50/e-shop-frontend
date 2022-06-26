import { Link } from "react-router-dom";
import { CartCompareIcon, CartIcon, HeartIcon } from "Components/Icons/Icons";
import { isAuthenticated } from "utilities/auth.utility";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { useAddToCart } from "Hooks/useCart";
import { useAddToWishlist } from "Hooks/useWishlist";

import { addToCart } from "../../Redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ product }) {
	// const dispatch = useDispatch();
	const [, setLoginModalOpen] = useAtom(loginModal);
	const {
		name: title,
		category,
		photos: image,
		unitPrice: price,
		_id,
	} = product;
	const {
		mutate: addToCartMutation,
		isLoading,
		isSuccess,
		isError,
	} = useAddToCart();
	const { mutate: addToWishlistMutation } = useAddToWishlist();

	// const cartItems = useSelector((state) => state.cart);

	const handleAddToCart = (product) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
			// window.alert("Login First");
		}

		addToCartMutation(product._id);

		// else {
		// 	const isPresent = cartItems.find((item) => item.id === product.id);

		// 	if (isPresent === undefined) {
		// 		const productForCart = {
		// 			...product,
		// 			description: product.description.slice(0, 100),
		// 			rating: product.rating.rate,
		// 			count: 1,
		// 			isSelected: false,
		// 		};
		// 		dispatch(addToCart(productForCart));
		// 	}
		// }
	};

	const handleAddToWishlist = (product) => {
		if (!isAuthenticated()) {
			setLoginModalOpen(true);
		}

		addToWishlistMutation(product._id);
	};

	return (
		<div className="md:w-full md:h-fit border bg-white drop-shadow border-[#CBCBCB] hover:shadow-xl transition-all duration-200 cursor-pointer rounded-md p-4">
			<div className="top pb-2">
				<p className="category text-xs md:text-sm text-[#565656]">
					{category[0].name}
				</p>
			</div>
			<Link to={`/product-details/${_id}`}>
				<div className="mid flex flex-col space-y-2  justify-start">
					<p className="text-xs font-bold md:text-sm text-[#565656]">{title}</p>

					<img src={image[0]} alt="" className="aspect-square object-cover" />
				</div>
			</Link>
			<div className="mt-2 space-y-3">
				<div className="price flex justify-between">
					<p className="text-base md:text-xl text-[#E96115]">${price}</p>
					<img
						src="/images/icons/stars.svg"
						alt=""
						className="w-[3.44rem] md:w-[4.06rem]"
					/>
				</div>

				<div className="buttons flex justify-around">
					<button
						onClick={() => handleAddToWishlist(product)}
						className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] stroke-[#E96115] hover:stroke-white"
					>
						<HeartIcon />
					</button>
					<button
						onClick={() => handleAddToCart(product)}
						className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] fill-[#E96115] hover:fill-white"
					>
						<CartIcon />
					</button>
					<button className="p-2 md:p-[0.625rem] rounded-full border border-[#E96115] hover:bg-[#E96115] fill-[#E96115] hover:fill-white">
						<CartCompareIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
