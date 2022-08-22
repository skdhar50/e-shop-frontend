import Payment from "Components/OrderDetail/Payment";
import PrivateRoute from "Components/Routes/PrivateRoute";
import { useAtom } from "jotai";
import { loginModal, registerModal } from "Jotai/ModalState";
import Cart from "Pages/Cart";
import ConfirmOrder from "Pages/ConfirmOrder";
import ForgetPassword from "Pages/ForgetPassword";
import Home from "Pages/Home";
import Login from "Pages/Login";
import OrderDetails from "Pages/OrderDetails";
import ProductDetails from "Pages/ProductDetails";
import ProductList from "Pages/ProductList";
import Profile from "Pages/Profile";
import MyAccount from "Pages/Profile/MyAccount";
import MyNotifications from "Pages/Profile/MyNotifications";
import MyOrders from "Pages/Profile/MyOrders";
import MyWishList from "Pages/Profile/MyWishList";
import Register from "Pages/Register";
import ResetPassword from "Pages/ResetPassword";
import SingleFilterProducts from "Pages/SingleFilterProducts";
import WeeklyOfferDetails from "Pages/WeeklyOfferDetails";
import WeeklyOffers from "Pages/WeeklyOffers";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
	const [login] = useAtom(loginModal);
	const [register] = useAtom(registerModal);

	return (
		<QueryClientProvider client={queryClient}>
			{login && <Login />}
			{register && <Register />}

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/product-details/:id" element={<ProductDetails />} />
				<Route path="/product-list">
					<Route path="all" element={<ProductList />} />
					<Route path="product" element={<SingleFilterProducts />} />
				</Route>
				<Route path="/forgetpassword" element={<ForgetPassword />} />
				<Route path="/resetpassword" element={<ResetPassword />} />
				<Route path="/offers" element={<WeeklyOffers />} />
				<Route path="/offerDetails/:id" element={<WeeklyOfferDetails />} />

				<Route path="/*" element={<PrivateRoute />}>
					<Route path="order-details/:id" element={<OrderDetails />} />
					<Route path="cart" element={<Cart />} />
					<Route path="confirm-order" element={<ConfirmOrder />} />
					<Route path="profile" element={<Profile />}>
						<Route path="wishlist" element={<MyWishList />} />
						<Route path="account" element={<MyAccount />} />
						<Route path="orders" element={<MyOrders />} />
						<Route path="notifications" element={<MyNotifications />} />
					</Route>
					<Route path="payment/:id" element={<Payment />} />
				</Route>
			</Routes>

			{/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
		</QueryClientProvider>
	);
}

export default App;
