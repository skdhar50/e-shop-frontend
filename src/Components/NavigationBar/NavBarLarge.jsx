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
			tag: "category"
		});

		// console.log(categories.data);
	}

	if (brandSuccess) {
		menuItems.push({
			name: "Brands",
			submenu: brands.data,
			tag: "brand"
		});
		menuItems.push(
			...[
				{
					name: "Online Exclusive",
					tag: "isExclusive"
				},
				{
					name: "Weekly Offers",
					url: "/offers",
					tag: "offers"
				},
				{
					name: "New Arrivals",
					tag: "latest"
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
								<MenuItems items={menu} tag={menu.tag} depthLevel={depthLevel} />
							</div>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default NavBarLarge;
