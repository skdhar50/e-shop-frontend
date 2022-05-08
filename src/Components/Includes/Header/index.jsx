import Banner from "./Banner";
import NavBarLarge from "Components/NavigationBar/NavBarLarge";
import TopBarLarge from "../../NavigationBar/TopBarLarge";
import SearchBarLearge from "./SearchBarLarge";
import MobileHeader from "./MobileHeader";
function index() {
	return (
		<>
			<div className="hidden md:block space-y-7">
				<TopBarLarge />
				<SearchBarLearge />
				<NavBarLarge />
			</div>
			<div className="md:hidden">
				<MobileHeader />
			</div>
			<Banner />
		</>
	);
}

export default index;
