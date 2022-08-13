import { Outlet, useNavigate } from "react-router-dom";
import { isAuthenticated } from "utilities/auth.utility";
import { useAtom } from "jotai";
import { loginModal } from "Jotai/ModalState";
import { useEffect } from "react";

function PrivateRoute() {
	const [isOpenLoginModal, setOpenLoginModal] = useAtom(loginModal);

	const navigate = useNavigate();
	useEffect(() => {
		if (isOpenLoginModal) {
			navigate(-1);
		}
	}, [isOpenLoginModal]);

	if (isAuthenticated()) {
		return <Outlet />;
	} else {
		setOpenLoginModal(true);
		return;
	}
}

export default PrivateRoute;
