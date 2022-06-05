import NavBarLarge from "Components/NavigationBar/NavBarLarge";
import TopBarLarge from "../../NavigationBar/TopBarLarge";
import SearchBarLearge from "./SearchBarLarge";
import MobileHeader from "./MobileHeader";
function index() {
	return (
		<>
			<div className="hidden lg:block space-y-4">
				<TopBarLarge />
				<SearchBarLearge />
				<NavBarLarge />
			</div>
			<div className="lg:hidden mb-[70px]">
				<MobileHeader />
			</div>
		</>
	);
}

export default index;
