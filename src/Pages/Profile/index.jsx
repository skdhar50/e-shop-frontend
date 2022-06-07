import Layout from "Components/Layout";
import ProfileNavigation from "Components/User/ProfileNavigation";
import { Outlet } from "react-router-dom";

function index() {
	return (
		<Layout title="Profile">
			<div className="px-0 md:px-6 xl:container">
				<div className="lg:flex lg:justify-center lg:space-x-6 items-top mt-12">
					<ProfileNavigation />

					<Outlet />
				</div>
			</div>
		</Layout>
	);
}

export default index;
