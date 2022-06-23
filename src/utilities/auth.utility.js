import jwt_decode from "jwt-decode";

export const isAuthenticated = () => {
	if (typeof window === "undefined" || !localStorage.getItem("token")) {
		return false;
	} else {
		const { exp } = jwt_decode(localStorage.getItem("token"));
		if (new Date().getTime() <= exp * 1000) {
			return true;
		} else {
			localStorage.removeItem("token");
			return false;
		}
	}
};

export const useInfo = () => {
	const token = localStorage.getItem("token");
	const decoded = jwt_decode(token);

	return {
		...decoded,
	};
};

export const signOutUser = (cb) => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("token");
		cb();
	}
};
