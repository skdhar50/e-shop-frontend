import { useState } from "react";
import { useChangePassword } from "Hooks/useUser";
import { formValidate } from "Helpers/FormValidator";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

const INITIAL_Password_STATE = {
	currentPassword: "",
	newPassword: "",
	confirmPassword: "",
};

const INITIAL_ERROR_STATE = {
	currentPassword: "",
	newPassword: "",
	confirmPassword: "",
};

function ChangePassword() {
	const [password, setPassword] = useState(INITIAL_Password_STATE);
	const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
	const { mutate: passwordMutation } = useChangePassword();

	const handlePasswordChange = (e) => {
		setErrors({
			...errors,
			[e.target.name]: formValidate(
				e.target.name === "confirmPassword" ? "confirm_password" : "password",
				e.target.name === "confirmPassword"
					? { password: password.newPassword, confirm_password: e.target.value }
					: e.target.value
			),
		});
		setPassword({
			...password,
			[e.target.name]: e.target.value,
		});
	};

	const isValidToProced = () => {
		if (
			errors.currentPassword.length > 0 ||
			errors.newPassword.length > 0 ||
			errors.confirmPassword.length > 0
		) {
			return false;
		} else if (
			password.currentPassword.length === 0 ||
			password.newPassword.length === 0 ||
			password.confirmPassword.length === 0
		) {
			return false;
		}
		return true;
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		if (isValidToProced()) {
			passwordMutation({
				currentPassword: password.currentPassword,
				newPassword: password.newPassword,
			});
			setPassword(INITIAL_Password_STATE);
		}
	};

	return (
		<>
			<form
				action=""
				onSubmit={handlePasswordSubmit}
				className="flex flex-col space-y-4"
			>
				<input
					type="password"
					name="currentPassword"
					value={password.currentPassword}
					onChange={handlePasswordChange}
					className="sm:w-1/2"
					placeholder="Current password"
				/>
				{password.currentPassword.length > 0 && (
					<p className="text-sm text-red-600">
						{errors.currentPassword.length > 0 && errors.currentPassword}
					</p>
				)}
				<input
					type="password"
					name="newPassword"
					value={password.newPassword}
					onChange={handlePasswordChange}
					className="sm:w-1/2"
					placeholder="New password"
				/>
				{password.newPassword.length > 0 && (
					<p className="text-sm text-red-600">
						{errors.newPassword.length > 0 && errors.newPassword}
					</p>
				)}
				<input
					type="password"
					name="confirmPassword"
					value={password.confirmPassword}
					onChange={handlePasswordChange}
					className="sm:w-1/2"
					placeholder="Confirm password"
				/>
				{password.confirmPassword.length > 0 && (
					<p className="text-sm text-red-600">
						{errors.confirmPassword.length > 0 && errors.confirmPassword}
					</p>
				)}
				{/* <button
					disabled={!isValidToProced()}
					className="bg-green-600 w-full sm:w-1/4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Save
				</button> */}
				<PrimaryButton
					disabled={!isValidToProced()}
					classes="w-full sm:w-1/4 py-2"
				>
					Save
				</PrimaryButton>
			</form>
		</>
	);
}

export default ChangePassword;
