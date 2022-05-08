import { useState } from "react";
import LeftNavbarSmall from "Components/NavigationBar/LeftNavbarSmall";
import RightNavbarSmall from "Components/NavigationBar/RightNavbarSmall";
import TopBarSmall from "Components/NavigationBar/TopBarSmall";

function MobileHeader() {
    const [leftIsOpen, setLeftIsOpen] = useState(false);
    const [rightIsOpen, setRightIsOpen] = useState(false);

	const handleLeftNavbar = () => {
		setLeftIsOpen(!leftIsOpen);
	};
	const handleRightNavbar = () => {
		setRightIsOpen(!rightIsOpen);
	}

	return (
		<div>
			<LeftNavbarSmall
				isOpen={leftIsOpen}
				handleLeftNavbar={handleLeftNavbar}
			/>
			<TopBarSmall
				handleLeftNavbar={handleLeftNavbar}
				handleRightNavbar={handleRightNavbar}
			/>
			<RightNavbarSmall
				isOpen={rightIsOpen}
				handleRightNavbar={handleRightNavbar}
			/>
		</div>
	);
}

export default MobileHeader;
