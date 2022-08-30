import { useAtom } from "jotai";
import { openLoginModal, closeAllModal } from "Jotai/ModalState";
import { useState } from "react";
import { formValidate } from "Helpers/FormValidator";
import { useUserSignup } from "Hooks/useUser";

const INITIAL_USER_STATE = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const INITIAL_ERROR_STATE = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

function Register() {
	const [, isOpenLoginModal] = useAtom(openLoginModal);
	const [, isCloseAllModal] = useAtom(closeAllModal);
	const [userData, setUserData] = useState(INITIAL_USER_STATE);
	const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
	const { mutate: singnupMutation } = useUserSignup();

	const handleUserDataChange = (e) => {
		setErrors({
			...errors,
			[e.target.name]: formValidate(
				e.target.name === "confirmPassword"
					? "confirm_password"
					: e.target.name,
				e.target.name === "confirmPassword"
					? { password: userData.password, confirm_password: e.target.value }
					: e.target.value
			),
		});

		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const isValidToProced = () => {
		if (
			errors.name.length > 0 ||
			errors.email.length > 0 ||
			errors.password.length > 0 ||
			errors.confirmPassword.length > 0
		) {
			return false;
		} else if (
			userData.name.length === 0 ||
			userData.email.length === 0 ||
			userData.password.length === 0 ||
			userData.confirmPassword.length === 0
		) {
			return false;
		}
		return true;
	};

	const handleUserDataSubmit = (e) => {
		e.preventDefault();
		if (isValidToProced()) {
			singnupMutation({ name: userData.name, email: userData.email, password: userData.password });
			setUserData(INITIAL_USER_STATE);
		}
	};

	return (
		<div className="backdrop z-[70] top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center fixed">
			<div className="modal flex bg-white md:space-x-10 py-8 w-full h-full md:h-fit md:w-fit md:pr-12 justify-center items-center relative">
				<button onClick={isCloseAllModal} className="">
					<svg
						className="w-6 h-6 absolute top-5 right-5 md:left-5 stroke-gray-500 cursor-pointer hover:stroke-[#E96115]"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M25 5L5 25M25 25L5 5L25 25Z"
							strokeWidth="2.5"
							strokeLinecap="round"
						/>
					</svg>
				</button>
				<div className="modal-image hidden md:block">
					<img src="/images/auth/register.svg" alt="" className="" />
				</div>
				<div className="modal-content space-y-10">
					<div className="modal-header">
						<p className="text-3xl font-[700] text-gray-600">
							Welcome to PUCShop
						</p>
					</div>
					<div className="modal-body space-y-8">
						<div className="">
							<form
								action=""
								onSubmit={handleUserDataSubmit}
								className="flex flex-col space-y-6 justify-center items-center"
							>
								<div className="w-full">
									<input
										type="text"
										name="name"
										id="name"
										placeholder="User name"
										value={userData.name}
										onChange={handleUserDataChange}
										className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
									/>
									{userData.name.length > 0 && (
										<p className="text-sm text-red-600">
											{errors.name.length > 0 && errors.name}
										</p>
									)}
								</div>
								<div className="w-full">
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										value={userData.email}
										onChange={handleUserDataChange}
										className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
									/>
									{userData.email.length > 0 && (
										<p className="text-sm text-red-600">
											{errors.email.length > 0 && errors.email}
										</p>
									)}
								</div>
								<div className="w-full">
									<input
										type="password"
										name="password"
										placeholder="Password"
										value={userData.password}
										onChange={handleUserDataChange}
										className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
									/>
									{userData.password.length > 0 && (
										<p className="text-sm text-red-600">
											{errors.password.length > 0 && errors.password}
										</p>
									)}
								</div>
								<div className="w-full">
									<input
										type="password"
										name="confirmPassword"
										placeholder="Confirm Password"
										value={userData.confirmPassword}
										onChange={handleUserDataChange}
										className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
									/>
									{userData.confirmPassword.length > 0 && (
										<p className="text-sm text-red-600">
											{errors.confirmPassword.length > 0 &&
												errors.confirmPassword}
										</p>
									)}
								</div>

								<button
									disabled={!isValidToProced()}
									className="bg-[#1778CD] hover:bg-[#045195] text-white w-3/4 md:w-2/3 px-10 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
								>
									Sign Up
								</button>
							</form>
						</div>

						<div className="relative flex items-center justify-center border-b border-gray-300 pt-4">
							<p className="text-gray-500 text-center absolute bg-white px-2 z-10">
								OR
							</p>
						</div>

						<div className="flex flex-col justify-center items-center space-y-4 text-sm">
							<button className="flex items-center space-x-3 text-gray-500">
								<img
									src="/images/icons/google.svg"
									alt=""
									className="w-[25px] h-[25px]"
								/>
								<p className="hover:text-[#1778CD]">Sign up with Google</p>
							</button>
							<p className="text-gray-500">
								Already have an account?{" "}
								<button onClick={isOpenLoginModal} className="text-green-600">
									Sign in
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
