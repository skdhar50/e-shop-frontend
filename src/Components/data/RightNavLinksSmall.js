import { isAuthenticated } from "utilities/auth.utility";

export const links = [
	{
		title: "Home",
		url: "/",
		icon: "/images/icons/RightNavSmall/home.svg",
		isShow: true,
		id: 1,
	},
	{
		title: "Profile",
		url: "/profile/account",
		icon: "/images/icons/RightNavSmall/profile.svg",
		isShow: isAuthenticated(),
		id: 2,
	},
	{
		title: "All Products",
		url: "/product-list/all",
		icon: "/images/icons/RightNavSmall/all-products.svg",
		isShow: true,
		id: 3,
	},
	{
		title: "Wishlist",
		url: "/profile/wishlist",
		icon: "/images/icons/RightNavSmall/wishlist.svg",
		isShow: isAuthenticated(),
		id: 4,
	},
	{
		title: "Notifications",
		url: "/notifications",
		icon: "/images/icons/RightNavSmall/notification.svg",
		isShow: isAuthenticated(),
		id: 5,
	},
	{
		title: "My Cart",
		url: "/cart",
		icon: "/images/icons/RightNavSmall/mycart.svg",
		isShow: isAuthenticated(),
		id: 6,
	},
	{
		title: "My Orders",
		url: "/profile/orders",
		icon: "/images/icons/RightNavSmall/myorder.svg",
		isShow: isAuthenticated(),
		id: 7,
	},
	{
		title: "Services",
		url: "/services",
		icon: "/images/icons/RightNavSmall/services.svg",
		isShow: true,
		id: 8,
	},
	{
		title: "Help",
		url: "/help",
		icon: "/images/icons/RightNavSmall/help.svg",
		isShow: true,
		id: 9,
	},
	{
		title: "Location",
		url: "/location",
		icon: "/images/icons/RightNavSmall/location.svg",
		isShow: true,
		id: 10,
	},
];
