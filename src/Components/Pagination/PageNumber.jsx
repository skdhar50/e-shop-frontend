function PageNumber({ isCurrentPage, pageNumber, handleCurrentPage }) {
	return (
		<button
			onClick={() => handleCurrentPage(pageNumber)}
			className={`px-2 py-1 shadow-md bg-gradient-to-br font-semibold border border-indigo-200 rounded-md  cursor-pointer ${
				isCurrentPage
					? "from-cyan-400 to-cyan-700 text-white"
					: "from-gray-50 to-cyan-100 text-gray-500 hover:from-cyan-100 hover:to-cyan-300"
			}`}
		>
			{pageNumber}
		</button>
	);
}

export default PageNumber;
