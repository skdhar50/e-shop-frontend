import MyProductWishList from "Components/User/MyProductWishList";
import Pagination from "Components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MyWishList() {
	let [searchParams, setSearchParams] = useSearchParams();
	const [start, setStart] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesCount, setPagesCount] = useState(0);

	useEffect(() => {
		setCurrentPage(parseInt(searchParams.get("page")));
	}, [searchParams]);

	const handlePageCount = (pages) => {
		setPagesCount(pages);
	};

	const handleCurrentPage = (num) => {
		setCurrentPage(num);
		setStart(currentPage - 9 > 1 ? currentPage - 9 : 1);
		searchParams.set("page", num);
		setSearchParams(searchParams, { replace: true });
	};

	return (
		<div className="border-2 bg-white drop-shadow-sm p-4 md:p-6 space-y-8 xl:flex-grow">
			<div className="border-b-2 pb-4">
				<p className="text-2xl">My Wishlist</p>
			</div>
			<MyProductWishList handlePageCount={handlePageCount} currentPage={currentPage} />

			{pagesCount !== 0 && (
				<>
					<Pagination
						pagesCount={pagesCount}
						start={start}
						currentPage={currentPage}
						handleCurrentPage={handleCurrentPage}
					/>
				</>
			)}
		</div>
	);
}

export default MyWishList;
