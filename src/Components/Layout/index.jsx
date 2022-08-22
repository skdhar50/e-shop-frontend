import CartIcon from "Components/Cart/CartIcon";
import Footer from "Components/Includes/Footer/Footer";
import Header from "Components/Includes/Header";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index({ title, children }) {
	const [scrollToTop, setScrollToTop] = useState(false);

	useEffect(() => {
		document.title = title;
		window.scrollTo(0, 0);
	}, [title]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setScrollToTop(true);
			} else {
				setScrollToTop(false);
			}
		});
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="bg-slate-50">
			{scrollToTop && (
				<div className="flex flex-col space-y-4 items-center fixed bottom-14 right-5 md:right-10 z-50">
					<div
						className={`bg-gray-100/80 p-1.5 md:p-2 hidden  ${
							window.location.pathname === "/cart" ? "md:hidden" : "md:block"
						}`}
					>
						<CartIcon />
					</div>
					<button
						onClick={handleScrollToTop}
						className=" rounded-full bg-gray-300/60 p-1.5 md:p-2 flex justify-center items-center text-gray-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 md:h-6 md:w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 15l7-7 7 7"
							/>
						</svg>
					</button>
				</div>
			)}
			<Header />
			{children}
			<Footer />
			<ToastContainer
				position="bottom-right"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				limit={2}
			/>
			{/* <Toaster message="Error Toaster" title="success" show={true} /> */}
		</div>
	);
}

export default Index;
