import { menuItems } from "./menuItems";
import MenuItems from "./MenuItems";

function NavBarLarge() {
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
