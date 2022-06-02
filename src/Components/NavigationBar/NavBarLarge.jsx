import { menuItems } from "./menuItems";
import MenuItems from "./MenuItems";

function NavBarLarge() {
	return (
		<nav className="w-full h-[45px] bg-gray-200 bg-opacity-50 flex items-center justify-center">
			<div className="xl:container md:w-full">
				<ul className="flex justify-around items-center">
					{menuItems.map((menu, index) => {
						const depthLevel = 0;
						return (
							<div className="w-full">
								<MenuItems items={menu} key={index} depthLevel={depthLevel} />
							</div>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default NavBarLarge;
