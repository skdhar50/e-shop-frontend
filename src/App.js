import Home from "Pages/Home";
import OrderDetails from "Pages/OrderDetails";
import ProductDetails from "Pages/ProductDetails";
import Cart from "Pages/Cart";
import Register from "Pages/Register";
import Login from "Pages/Login";
import ConfirmOrder from "Pages/ConfirmOrder";
import ProductList from "Pages/ProductList";
import { Route, Routes, useLocation } from "react-router-dom";
import MyWishList from "Pages/Profile/MyWishList";
import MyOrders from "Pages/Profile/MyOrders";
import MyAccount from "Pages/Profile/MyAccount";
import Profile from "Pages/Profile";
import WeeklyOffers from "Pages/WeeklyOffers";
import WeeklyOfferDetails from "Pages/WeeklyOfferDetails";
import Payment from "Components/OrderDetail/Payment";
import { Provider } from "react-redux";
import store from "./Redux/store";
import PrivateRoute from "Components/Routes/PrivateRoute";
import { useAtom } from "jotai";
import { loginModal, registerModal } from "Jotai/ModalState";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
	const location = useLocation();
	const background = location.state && location.state.background;

	const [login] = useAtom(loginModal);
	const [register] = useAtom(registerModal);

	return (
		// <Provider store={store}>
		<QueryClientProvider client={queryClient}>
			{login && <Login />}
			{register && <Register />}

			<Routes>
				{/* <Route path='/login' element={<Login />} /> */}
				{/* <Routes location={background || location}> */}
				<Route path="/" element={<Home />}>
					{/* <Route path="login" element={<Login goBackTo="/" />} />
					<Route path="register" element={<Register goBackTo="/" />} /> */}
				</Route>
				<Route path="/product-details/:id" element={<ProductDetails />}>
					{/* <Route
						path="login"
						element={<Login goBackTo="/product-details/:id" />}
					/>
					<Route
						path="register"
						element={<Register goBackTo="/product-details/" />}
					/> */}
				</Route>
				<Route path="/product-list" element={<ProductList />}>
					{/* <Route path="login" element={<Login goBackTo="/product-list/" />} />
					<Route
						path="register"
						element={<Register goBackTo="/product-list/" />}
					/> */}
				</Route>
				<Route path="/offers" element={<WeeklyOffers />} />
				<Route path="/offerDetails" element={<WeeklyOfferDetails />} />

				<Route path="/*" element={<PrivateRoute />}>
					<Route path="order-details/:id" element={<OrderDetails />} />
					<Route path="cart" element={<Cart />} />
					<Route path="confirm-order" element={<ConfirmOrder />} />
					<Route path="profile" element={<Profile />}>
						<Route path="wishlist" element={<MyWishList />} />
						<Route path="account" element={<MyAccount />} />
						<Route path="orders" element={<MyOrders />} />
					</Route>
					<Route path="payment/:id" element={<Payment />} />
				</Route>
				{/* </Routes>
				{background && (
					<Routes>
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />
					</Routes>
				)} */}
			</Routes>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</QueryClientProvider>
		// </Provider>
	);
}

export default App;
