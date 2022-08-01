import PageNumber from "./PageNumber";

function Pagination(props) {
	const {
		start,
		// end,
		handleCurrentPage,
		pagesCount,
		currentPage,
		// onHandleStart,
		// onHandleEnd,
	} = props;

	// onHandleStart(currentPage - 9 > 1 ? currentPage - 9 : 1);
	// onHandleEnd(start + 9 <= pagesCount ? start + 9 : pagesCount);

	const pages = Array.from(
		{ length: (start + 9 <= pagesCount ? start + 9 : pagesCount) - start + 1 },
		(_, idx) => idx + start
	);

	return (
		<div className="flex space-x-4 pt-8">
			<button
				onClick={() => handleCurrentPage(currentPage - 1)}
				className="px-2 py-1 shadow-md bg-gradient-to-br from-gray-50 to-cyan-100 border border-indigo-200 rounded-md text-gray-600 cursor-pointer hover:from-cyan-100 hover:to-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed"
				disabled={currentPage === 1}
			>
				Prev
			</button>
			{pages.map((page, i) => (
				<PageNumber
					isCurrentPage={currentPage === page}
					pageNumber={page}
					handleCurrentPage={handleCurrentPage}
					key={page}
				/>
			))}

			<button
				onClick={() => handleCurrentPage(currentPage + 1)}
				className="px-2 py-1 shadow-md bg-gradient-to-br from-gray-50 to-cyan-100 border border-indigo-200 rounded-md text-gray-600 cursor-pointer hover:from-cyan-100 hover:to-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed"
				disabled={currentPage === pagesCount}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
