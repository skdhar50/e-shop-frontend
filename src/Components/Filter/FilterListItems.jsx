import Checkbox from "Components/Inputs/Checkbox";

function FilterListItems() {
	const data = [
		{
			title: "Categories",
			elements: [
				{ name: "category1", label: "Category 1" },
				{ name: "category2", label: "Category 2" },
				{ name: "category3", label: "Category 3" },
				{ name: "category4", label: "Category 4" },
				{ name: "category5", label: "Category 5" },
				{ name: "category6", label: "Category 6" },
			],
		},
		{
			title: "Brands",
			elements: [
				{ name: "brand1", label: "Brand 1" },
				{ name: "brand2", label: "Brand 2" },
				{ name: "brand3", label: "Brand 3" },
				{ name: "brand4", label: "Brand 4" },
				{ name: "brand5", label: "Brand 5" },
				{ name: "brand6", label: "Brand 6" },
			],
		},
		{
			title: "Warrenty Type",
			elements: [
				{ name: "warrenty1", label: "Warrenty 1" },
				{ name: "warrenty2", label: "Warrenty 2" },
				{ name: "warrenty3", label: "Warrenty 3" },
			],
		},
	];

	return (
		<>
			<div className="border-b pb-4 space-y-1">
				<p className="pb-2 text-lg font-[600] text-gray-600">Sort By</p>
				<Checkbox name="rating" label="Rating" />
				<Checkbox name="price1" label="Price (Low to High)" />
				<Checkbox name="price2" label="Price (High to Low)" />
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

			{data.map((item, index) => (
				<div className="border-b pb-4" key={index}>
					<p className="pb-2 pt-2 text-lg font-[600] text-gray-600">
						{item.title}
					</p>
					<div className="space-y-2">
						{item.elements.map((element, index) => (
							<Checkbox key={index} name={element.name} label={element.label} />
						))}
					</div>
				</div>
			))}
		</>
	);
}

export default FilterListItems;
