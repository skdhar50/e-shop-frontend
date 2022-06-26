import { useAtom } from "jotai";
import { openRegisterModal, closeAllModal } from "Jotai/ModalState";
import { useState } from "react";
import { useUserLogin } from "Hooks/useUser";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
	email: "",
	password: "",
};

function Login() {
	const [, isOpenRegisterModal] = useAtom(openRegisterModal);
	const [, isCloseAllModal] = useAtom(closeAllModal);

	const [values, setValues] = useState(INITIAL_STATE);
	const { mutate, isLoding, isSuccess } = useUserLogin();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		mutate(values);
		setValues(INITIAL_STATE);
	};

	if (isSuccess) {
		isCloseAllModal();
		navigate("/", {
			replace: true,
		});
	}

	return (
		<div
			className={
				"backdrop z-50 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center fixed"
			}
		>
			<div className="modal flex bg-white py-8 w-full h-full md:h-fit md:w-[700px] md:pl-12 justify-center md:justify-between items-center relative">
				<button onClick={isCloseAllModal} className="">
					<svg
						className="w-6 h-6 absolute top-5 right-5 stroke-gray-500 cursor-pointer hover:stroke-[#E96115]"
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
				<div className="modal-content space-y-10 md:pr-6">
					<div className="modal-header">
						<p className="text-3xl font-[700] text-gray-600">
							Welcome to PUCShop
						</p>
					</div>
					<div className="modal-body space-y-8">
						<div className="">
							<form
								action=""
								method="POST"
								onSubmit={handleSubmit}
								encType="multipart/form-data"
								className="flex flex-col space-y-8 justify-center items-center"
							>
								<input
									type="email"
									name="email"
									placeholder="Email"
									onChange={handleChange}
									value={values.email}
									className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
								/>
								<div className="w-full space-y-2">
									<input
										type="password"
										name="password"
										placeholder="Password"
										onChange={handleChange}
										value={values.password}
										className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
									/>
									<p className="text-right text-gray-500 hover:cursor-pointer hover:text-[#1778CD] text-sm italic">
										Forget password?
									</p>
								</div>

								<button
									className={`bg-[#1778CD] hover:bg-[#045195] text-white w-3/4 md:w-2/3 px-10 py-2 rounded-xl ${
										isLoding ? "disabled" : ""
									}`}
								>
									Sign In
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
								New here?{" "}
								<button
									onClick={isOpenRegisterModal}
									className="text-green-600"
								>
									Create an account
								</button>
							</p>
						</div>
					</div>
				</div>

				<div className="modal-image h-full hidden relative md:flex items-center justify-center flex-grow">
					<img
						src="/images/auth/login.svg"
						alt=""
						className="object-contain w-[260px]"
					/>
					<img
						src="/images/auth/no-bg.png"
						alt=""
						className="object-contain w-[600px] absolute pt-4"
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
