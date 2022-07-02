// import { menuItems } from "./menuItems";
import MenuItems from "./MenuItems";
import { useCategoryData } from "Hooks/useCategory";
import { useBrandData } from "Hooks/useBrand";

function NavBarLarge() {
	let menuItems = [];

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

	if (categorySuccess) {
		menuItems.push({
			name: "All Categories",
			submenu: categories.data,
		});

		// console.log(categories.data);
	}

	if (brandSuccess) {
		menuItems.push({
			name: "Brands",
			submenu: brands.data,
		});
		menuItems.push(
			...[
				{
					name: "Online Exclusive",
				},
				{
					name: "Weekly Offers",
				},
				{
					name: "New Arrivals",
				},
			]
		);
	}

	if (brandLoading || categoryLoading) {
		return <div className="">Loding</div>;
	}

	return (
		<nav className="w-full h-[45px] border border-gray-300 shadow bg-gray-100 flex items-center justify-center">
			<div className="xl:container md:w-full">
				<ul className="flex justify-around items-center">
					{menuItems.map((menu, index) => {
						const depthLevel = 0;
						return (
							<div className="w-full" key={index}>
								<MenuItems items={menu} depthLevel={depthLevel} />
							</div>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default NavBarLarge;
