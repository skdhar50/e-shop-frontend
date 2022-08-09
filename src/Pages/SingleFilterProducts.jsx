import Layout from "Components/Layout";
import Pagination from "Components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Products from "./Products";

import { useSearchParams } from "react-router-dom";

const INITIAL_STATE = {
	category: "",
	brand: "",
	isExclusive: false,
	order: "",
	sortBy: "",
};

function SingleFilterProducts() {
	let [searchParams, setSearchParams] = useSearchParams();
	const [start, setStart] = useState(1);
	const [end, setEnd] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [pagesCount, setPagesCount] = useState(0);
	const [sortOption, setSortOption] = useState("Default");
	const [openDropdown, setOpenDropdown] = useState(false);

	const [filters, setFilters] = useState(INITIAL_STATE);

	useEffect(() => {
		setFilters({
			...INITIAL_STATE,
			[searchParams.get("tag")]: searchParams.get("value"),
			sortBy: searchParams.get("sortBy"),
			order: searchParams.get("order"),
		});
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

	const handleToggle = (e, value) => {
		searchParams.set("sortBy", e.target.value);
		searchParams.set("order", value);
		setSearchParams(searchParams, { replace: true });

		if (e.target.value === "createdAt") {
			setSortOption("Rating");
		} else {
			if (e.target.value === "unitPrice" && value === "asce") {
				setSortOption("Price (Low to High)");
			} else {
				setSortOption("Price (High to Low)");
			}
		}
	};

	const handleDropdown = () => {
		setOpenDropdown((prev) => !prev);
	};

	const handleSmallSort = (name, order, sort) => {
		handleDropdown();
		setSortOption(name);
		searchParams.set("sortBy", sort);
		searchParams.set("order", order);
		setSearchParams(searchParams, { replace: true });
	};

	return (
		<Layout title="Products">
			<Outlet />
			<div className="2xl:container pb-12 md:mt-4">
				<div className="sm:px-4 md:px-2 xl:px-4 flex justify-center items-top xl:space-x-4">
					<div className="h-fit shrink-0 border p-6 space-y-4 bg-white shadow hidden xl:block">
						<div className="">
							<p className="pb-2 text-lg font-[600] text-gray-600">Sort By</p>
							<div className="flex flex-col space-y-2">
								<div className="flex justify-start items-center">
									<input
										type="radio"
										name="sorting"
										value="createdAt"
										checked={filters.sortBy === "createdAt"}
										onChange={(e) => handleToggle(e, "asce")}
										className="mr-2"
									/>
									<p className="">Rating</p>
								</div>
								<div className="flex justify-start items-center">
									<input
										type="radio"
										name="sorting"
										value="unitPrice"
										checked={
											filters.sortBy === "unitPrice" && filters.order === "asce"
										}
										onChange={(e) => handleToggle(e, "asce")}
										className="mr-2"
									/>
									<p className="">Price (Low to High)</p>
								</div>
								<div className="flex justify-start items-center">
									<input
										type="radio"
										name="sorting"
										value="unitPrice"
										checked={
											filters.sortBy === "unitPrice" && filters.order === "desc"
										}
										onChange={(e) => handleToggle(e, "desc")}
										className="mr-2"
									/>
									<p className="">Price (High to Low)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-grow border p-3 sm:p-6 md:p-4 lg:p-6 bg-white">
						<div className="mb-6">
							<p className="text-2xl border-b pb-3 mb-4">Products</p>
							<div className="w-full flex justify-end items-center xl:hidden space-x-4">
								<p className="">Sort By</p>
								<div className="relative">
									<button
										className="min-w-[11rem] py-2 text-[#005386] bg-[#e6f0f6] border border-[#b0d0e4] flex items-center space-x-2 justify-center"
										onClick={handleDropdown}
									>
										{sortOption === "Default" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
												/>
											</svg>
										)}
										<p className="">{sortOption}</p>
									</button>
									{openDropdown && (
										<ul className="absolute bg-[#e6f0f6] border border-[#b0d0e4] z-40 w-full mt-1 shadow-md">
											<li
												onClick={() =>
													handleSmallSort("Rating", "asce", "createdAt")
												}
												className="px-2 py-2 hover:bg-[#d9e8f2] cursor-pointer"
											>
												Rating
											</li>
											<li
												onClick={() =>
													handleSmallSort(
														"Price (Low to High)",
														"asce",
														"unitPrice"
													)
												}
												className="px-2 py-2 hover:bg-[#d9e8f2] cursor-pointer"
											>
												Price (Low to High)
											</li>
											<li
												onClick={() =>
													handleSmallSort(
														"Price (High to Low)",
														"desc",
														"unitPrice"
													)
												}
												className="px-2 py-2 hover:bg-[#d9e8f2] cursor-pointer"
											>
												Price (High to Low)
											</li>
										</ul>
									)}
								</div>
							</div>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-2 lg:gap-x-4 md:gap-y-7">
							<Products
								filters={filters}
								currentPage={currentPage}
								handlePageCount={handlePageCount}
							/>
						</div>

						{pagesCount !== 0 && (
							<Pagination
								pagesCount={pagesCount}
								start={start}
								currentPage={currentPage}
								handleCurrentPage={handleCurrentPage}
							/>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default SingleFilterProducts;
