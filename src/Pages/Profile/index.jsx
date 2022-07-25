import Layout from "Components/Layout";
import ProfileNavigation from "Components/User/ProfileNavigation";
import { Outlet } from "react-router-dom";

function index() {
	return (
		<Layout title="Profile">
			<div className="md:px-6 xl:container antialiased">
				<div className="lg:flex lg:justify-center lg:space-x-6 items-top mt-24 lg:mt-12">
					<ProfileNavigation />

					<div className="flex-grow">
						<Outlet />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default index;
