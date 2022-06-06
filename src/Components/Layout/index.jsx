import { useEffect } from "react";
import Header from "Components/Includes/Header";
import Footer from "Components/Includes/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Index({ title, children }) {
	useEffect(() => {
		document.title = title;
	}, [title]);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Index;
