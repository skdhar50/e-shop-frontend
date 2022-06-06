import Home from "Pages/Home";
import OrderDetails from "Pages/OrderDetails";
import ProductDetails from "Pages/ProductDetails";
import Cart from "Pages/Cart";
import Register from "Pages/Register";
import Login from "Pages/Login";
import ConfirmOrder from "Pages/ConfirmOrder";
import ProductList from "Pages/ProductList";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<>
			<Routes location={background || location}>
				<Route path="/" element={<Home />}>
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="/order-details" element={<OrderDetails />} />
				<Route path="/product-details" element={<ProductDetails />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/confirm-order" element={<ConfirmOrder />} />
				<Route path="/product-list" element={<ProductList />} />
			</Routes>
			{background && (
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
			)}
		</>
	);
}

export default App;
