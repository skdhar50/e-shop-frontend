import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import { formValidate } from "Helpers/FormValidator";
import { useSetNewPassword } from "Hooks/useForgetPassword";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function ResetPassword() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [status, setStatus] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	let [searchParams] = useSearchParams();
	const [error, setError] = useState({
		token: "",
		password: "",
		confirmPassword: "",
	});

	const handleStatus = (value) => {
		setStatus(value);
	};

	const { mutate: resetPasswordMutation } = useSetNewPassword(handleStatus);

	useEffect(() => {
		try {
			const { email, exp } = jwt_decode(searchParams.get("key"));

			if (new Date().getTime() > exp * 1000) {
				setError((e) => ({
					...e,
					token: "Sorry! Link is expired. Please try again!",
				}));
			} else {
				setEmail(email);
			}
		} catch (err) {
			setError((e) => ({
				...e,
				token: "Sorry! Link is Invalid. Please try again!",
			}));
		}
	}, [searchParams]);

	const handleChange = (e) => {
		if (e.target.name === "password") {
			setPassword(e.target.value);
			setError({
				...error,
				password: formValidate("password", e.target.value),
			});
		} else {
			setConfirmPassword(e.target.value);
			setError({
				...error,
				confirmPassword: formValidate("confirm_password", {
					password: password,
					confirm_password: e.target.value,
				}),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		resetPasswordMutation({ email: email, password: password });
	};

	const handleGoBack = () => {
		navigate("/", { replace: true });
	};

	if (error["token"].length > 0) {
		return (
			<div className="bg-gray-100 h-screen flex justify-center pt-12">
				<div className="px-4 md:w-3/5 lg:w-2/5 space-y-6">
					<div className="text-lg text-gray-600">{error["token"]}</div>
					<div className="flex justify-end">
						<button onClick={handleGoBack} className="text-[#004E7E] underline">
							Back to Home
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="bg-gray-100 h-screen flex justify-center pt-12">
				{status.length > 0 ? (
					<div className="space-y-2">
						<p className="text-lg text-gray-600 font-semibold">
							Password Changed Successfully!!
						</p>
						<p className="">
							You can now{" "}
							<span className="text-[#004E7E] underline cursor-pointer">
								Go Back
							</span>{" "}
							to Home page and Login.
						</p>
					</div>
				) : (
					<div className="px-4 w-full md:w-3/5 lg:w-2/5 pt-12 space-y-6">
						<h3 className="text-lg text-gray-600 font-semibold border-b-2 border-gray-200 pb-2">
							Change Password
						</h3>
						<div className="">
							<form action="" onSubmit={handleSubmit} className="space-y-4">
								<div className="space-y-1">
									<input
										type="password"
										name="password"
										value={password}
										onChange={handleChange}
										placeholder="Enter your password"
										className="w-full"
									/>
									{error["password"].length > 0 && (
										<p className="text-xs md:text-sm pt-1 italic text-red-600">
											{error["password"]}
										</p>
									)}
								</div>
								<div className="space-y-1">
									<input
										type="password"
										name="confirmPassword"
										value={confirmPassword}
										onChange={handleChange}
										placeholder="Confirm Password"
										className="w-full"
									/>
									{error["confirmPassword"].length > 0 && (
										<p className="text-xs md:text-sm pt-1 italic text-red-600">
											{error["confirmPassword"]}
										</p>
									)}
								</div>

								<PrimaryButton type="submit" classes="px-4 py-2 w-[150px]">
									Save
								</PrimaryButton>
							</form>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default ResetPassword;
