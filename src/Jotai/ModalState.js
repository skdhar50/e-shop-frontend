import { atom } from "jotai";

export const loginModal = atom(false);
export const registerModal = atom(false);

export const openRegisterModal = atom(null, (get, set, _update) => {
	if (get(loginModal)) {
		set(loginModal, false);
	}
	set(registerModal, true);
});

export const openLoginModal = atom(null, (get, set, _update) => {
	if (get(registerModal)) {
		set(registerModal, false);
	}
	set(loginModal, true);
});

export const closeAllModal = atom(null, (get, set, _update) => {
	if (get(loginModal)) {
		set(loginModal, false);
	}
	if (get(registerModal)) {
		set(registerModal, false);
	}
});
