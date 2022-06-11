import { useEffect, useState } from "react";
import Header from "Components/Includes/Header";
import Footer from "Components/Includes/Footer/Footer";

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
				<button onClick={handleScrollToTop} className="fixed bottom-10 right-10 z-50 rounded-full bg-gray-300/60 p-2 flex justify-center items-center text-gray-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
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
			)}
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Index;
