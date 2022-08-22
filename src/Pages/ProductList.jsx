import FilterListItems from "Components/Filter/FilterListItems";
import RightFilterSmall from "Components/Filter/RightFilterSmall";
import Layout from "Components/Layout";
import { useCategoryData } from "Hooks/useCategory";
import { useBrandData } from "Hooks/useBrand";
// import { useProductData } from "Hooks/useProduct";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Pagination from "Components/Pagination/Pagination";
import Products from "./Products";

function ProductList() {
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesCount, setPagesCount] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	// const { data: products, isLoading, error, isError } = useProductData();
	const [filters, setFilters] = useState({
		category: [],
		brand: [],
		isExclusive: false,
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

	const handleTotalItems = (total) => {
		setTotalItems(total);
	}

	const handleCurrentPage = (num) => {
		setCurrentPage(num);
		setStart(currentPage - 9 > 1 ? currentPage - 9 : 1);
		setEnd(start + 9 <= pagesCount ? start + 9 : pagesCount);
	};

	const {
		data: categories,
		isLoading: categoryLoading,
		isSuccess: categorySuccess,
		isError: categoryError,
	} = useCategoryData();

	const {
		data: brands,
		isLoading: brandLoading,
		isSuccess: brandSuccess,
		isError: brandError,
	} = useBrandData();

	return (
		<>
			<Layout title="Products">
				<Outlet />
				<div className="2xl:container pb-12 md:mt-4">
					<div className="sm:px-4 md:px-2 xl:px-4 flex justify-center items-top xl:space-x-4">
						<div className="h-fit shrink-0 px-8  border py-6 space-y-4 bg-white shadow hidden xl:block">
							<FilterListItems
								brands={brands?.data}
								categories={categories?.data}
								handleFilter={(filter) => handleFilter(filter)}
							/>
						</div>
						<RightFilterSmall
							isOpen={openFilter}
							handleRightFilter={handleRightFilter}
							brands={brands?.data}
							categories={categories?.data}
							handleFilter={(filter) => handleFilter(filter)}
						/>

						<div className="flex-grow border p-3 sm:p-6 md:p-4 lg:p-6 bg-white">
							<div className="">
								<div className="border-b pb-3 mb-4">
									<p className="text-2xl">All Products</p>
									<p className="text-gray-500 pt-1 text-sm">
										({totalItems} items found)
									</p>
								</div>
								<div className="w-full flex justify-end xl:hidden">
									<button
										className="mb-6 w-[8rem] py-2 text-[#005386] bg-[#e6f0f6] border border-[#b0d0e4] flex items-center space-x-3 justify-center right-0"
										onClick={handleRightFilter}
									>
										<svg
											width="20"
											height="13"
											className="fill-[#005386]"
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
								<Products
									filters={filters}
									currentPage={currentPage}
									handlePageCount={handlePageCount}
									handleTotalItems={handleTotalItems}
								/>
							</div>

							{pagesCount > 0 && (
								<Pagination
									pagesCount={pagesCount}
									start={start}
									end={end}
									currentPage={currentPage}
									handleCurrentPage={handleCurrentPage}
									onHandleStart={(value) => setStart(value)}
									onHandleEnd={(value) => setEnd(value)}
								/>
							)}
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default ProductList;
