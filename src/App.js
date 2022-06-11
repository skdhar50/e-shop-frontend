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
import {Provider} from 'react-redux';
import store from './Redux/store';

function App() {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<Provider store={store}>
			<Routes location={background || location}>
				<Route path="/" element={<Home />}>
					<Route path="login" element={<Login goBackTo="/" />} />
					<Route path="register" element={<Register goBackTo="/" />} />
				</Route>
				<Route path="/order-details" element={<OrderDetails />} />
				<Route path="/product-details/:id" element={<ProductDetails />}>
					<Route path="login" element={<Login goBackTo="/product-details/" />} />
					<Route
						path="register"
						element={<Register goBackTo="/product-details/" />}
					/>
				</Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="/confirm-order" element={<ConfirmOrder />} />
				<Route path="/product-list" element={<ProductList />}>
					<Route path="login" element={<Login goBackTo="/product-list/" />} />
					<Route
						path="register"
						element={<Register goBackTo="/product-list/" />}
					/>
				</Route>
				<Route path="/profile" element={<Profile />}>
					<Route path="wishlist" element={<MyWishList />} />
					<Route path="account" element={<MyAccount />} />
					<Route path="orders" element={<MyOrders />} />
				</Route>
			</Routes>
			{background && (
				<Routes>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
			)}
		</Provider>
	);
}

export default App;
