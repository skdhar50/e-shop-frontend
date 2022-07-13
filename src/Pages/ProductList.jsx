import ProductCard from "Components/Cards/ProductCard";
import RightFilterSmall from "Components/Filter/RightFilterSmall";
import { useState, useEffect } from "react";
import FilterListItems from "Components/Filter/FilterListItems";
import Layout from "Components/Layout";
import { Outlet } from "react-router-dom";
import { useProductData } from "Hooks/useProduct";

import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, STATUS } from "../Redux/Slices/ProductSlice";
import Products from "./Products";
import Pagination from "Components/Pagination/Pagination";

function ProductList() {
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesCount, setPagesCount] = useState(0);

	const { data: products, isLoading, error, isError } = useProductData();
	const [filters, setFilters] = useState({
		category: [],
		brand: [],
		order: "",
		sortBy: "",
	});

	const [openFilter, setOpenFilter] = useState(false);

	const handleRightFilter = () => {
		setOpenFilter(!openFilter);
	};

	const handleFilter = (filter) => {
		setCurrentPage(1);
		setFilters({ ...filter });
	};

	const handlePageCount = (pages) => {
		setPagesCount(pages);
	};

	const handleCurrentPage = (num) => {
		setCurrentPage(num);
		setStart(currentPage - 9 > 1 ? currentPage - 9 : 1);
		setEnd(start + 9 <= pagesCount ? start + 9 : pagesCount);
	};

	return (
		<Layout title="Products">
			<Outlet />
			<div className="2xl:container pb-12 md:mt-4">
				<div className="sm:px-4 md:px-2 xl:px-4 flex justify-center items-top xl:space-x-4">
					<div className="h-fit border p-6 space-y-4 bg-white shadow hidden xl:block">
						<FilterListItems handleFilter={(filter) => handleFilter(filter)} />
					</div>
					<RightFilterSmall
						isOpen={openFilter}
						handleRightFilter={handleRightFilter}
						handleFilter={(filter) => handleFilter(filter)}
					/>

					<div className="flex-grow border p-3 sm:p-6 md:p-4 lg:p-6 bg-white">
						<div className="">
							<p className="text-2xl border-b pb-3 mb-4">Products</p>
							<div className="w-full flex justify-end xl:hidden">
								<button
									className="mb-6 w-[8rem] py-2 text-gray-700 bg-indigo-50 flex items-center space-x-3 justify-center right-0"
									onClick={handleRightFilter}
								>
									<svg
										width="20"
										height="13"
										className="fill-gray-500"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M3.75 5h12.5v2.5H3.75V5ZM0 0h20v2.5H0V0Zm7.5 10h5v2.5h-5V10Z" />
									</svg>
									<p className="">Filter</p>
								</button>
							</div>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-2 lg:gap-x-4 md:gap-y-7">
							{/* {products?.data.map((product) => (
								<ProductCard key={product._id} product={product} />
							))} */}
							<Products
								filters={filters}
								currentPage={currentPage}
								handlePageCount={handlePageCount}
							/>
						</div>

						<Pagination
							pagesCount={pagesCount}
							start={start}
							end={end}
							currentPage={currentPage}
							handleCurrentPage={handleCurrentPage}
							onHandleStart={(value) => setStart(value)}
							onHandleEnd={(value) => setEnd(value)}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ProductList;
