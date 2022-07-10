import Checkbox from "Components/Inputs/Checkbox";
import { useCategoryData } from "Hooks/useCategory";
import { useBrandData } from "Hooks/useBrand";
import { useState, useEffect } from "react";

function FilterListItems({ handleFilter }) {
	const [checked, setChecked] = useState({
		category: [],
		brand: [],
		sortBy: "createdAt",
		order: "",
	});

	const checkedItems = { ...checked };

	const handleToggle = (value, title) => {
		if(title === "category" || title === "brand") {
			const currentIndex = checked[title].indexOf(value);
			if (currentIndex === -1) {
				checkedItems[title].push(value);
			} else {
				checkedItems[title].splice(currentIndex, 1);
			}
			setChecked(checkedItems);
		} else {
			checkedItems["sortBy"] = title;
			checkedItems["order"] = value;
		}
		handleFilter(checkedItems);
	};

	useEffect(() => {}, [checked]);

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
			<div className="border-b pb-4 space-y-1">
				<p className="pb-2 text-lg font-[600] text-gray-600">Sort By</p>
				<div className="flex flex-col space-y-2">
					<div className="flex justify-start items-center">
						<input
							type="radio"
							name="sorting"
							onChange={() => handleToggle("", "createdAt")}
							className="mr-2"
						/>
						<p className="">Rating</p>
					</div>
					<div className="flex justify-start items-center">
						<input
							type="radio"
							name="sorting"
							value="asce"
							onChange={() => handleToggle("", "unitPrice")}
							className="mr-2"
						/>
						<p className="">Price (Low to High)</p>
					</div>
					<div className="flex justify-start items-center">
						<input
							type="radio"
							name="sorting"
							value="desc"
							onChange={() => handleToggle("desc", "unitPrice")}
							className="mr-2"
						/>
						<p className="">Price (High to Low)</p>
					</div>
				</div>
			</div>

			<div className="">
				<p className="text-xl border-b pb-3 mb-3">Filter By</p>
			</div>

			<div className="border-b pb-6">
				<p className="pb-2 text-lg font-[600] text-gray-600">Price</p>
				<div className="space-y-1">
					<div className="flex space-x-2">
						<input
							type="number"
							name=""
							id=""
							placeholder="min"
							className="w-[100px] rounded focus:outline-none focus:border-green-600 focus:ring-0"
						/>
						<input
							type="number"
							name=""
							id=""
							placeholder="max"
							className="w-[100px] rounded focus:outline-none focus:border-green-600 focus:ring-0"
						/>
						<button className="bg-indigo-100 text-indigo-600 px-2 rounded hover:bg-indigo-200">
							&#10095;
						</button>
					</div>
				</div>
			</div>

			<div className="border-b pb-4">
				<p className="pb-2 pt-2 text-lg font-[600] text-gray-600">Categories</p>
				<div className="space-y-2">
					{categories?.data.map((category) => (
						<Checkbox
							key={category._id}
							isChecked={checked["category"].indexOf(category.name === -1)}
							name={category.name}
							label={category.name}
							id={category._id}
							handleToggle={(value) => handleToggle(value, "category")}
						/>
					))}
				</div>
			</div>

			<div className="border-b pb-4">
				<p className="pb-2 pt-2 text-lg font-[600] text-gray-600">Brands</p>
				<div className="space-y-2">
					{brands?.data.map((brand) => (
						<Checkbox
							key={brand._id}
							name={brand.name}
							label={brand.name}
							id={brand._id}
							isChecked={checked["brand"].indexOf(brand.name === -1)}
							handleToggle={(value) => handleToggle(value, "brand")}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default FilterListItems;
