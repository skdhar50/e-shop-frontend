import PrimaryButton from "Components/Common/Buttons/PrimaryButton";
import { formValidate } from "Helpers/FormValidator";
import { useForgetPassword } from "Hooks/useForgetPassword";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function ForgetPassword() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [status, setStatus] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		setEmail(e.target.value);
		setError(formValidate("email", e.target.value));
	};

	const handleStatus = (value) => {
		setStatus(value);
	};

	const { mutate: passwordMutation } = useForgetPassword(handleStatus);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (error.length === 0) {
			passwordMutation(email);
		}
	};

	const handleGoBack = () => {
		navigate("/", { replace: true });
	};

	return (
		<div className="w-screen h-screen flex justify-center bg-gray-100">
			{status.length > 0 ? (
				<div className="px-4 md:w-3/5 lg:w-2/5 space-y-6">
					<div className="pt-12 md:text-lg text-gray-700">
						<p className="">{status}</p>
						<p className="italic pt-2">
							(Note: Password reset link will expire in 30 minutes)
						</p>
					</div>
					<div className="flex justify-end">
						<button onClick={handleGoBack} className="text-[#004E7E] underline">
							Back to Home
						</button>
					</div>
				</div>
			) : (
				<div className="px-2 md:w-3/5 lg:w-2/5 pt-12 space-y-6">
					<h3 className="text-lg text-gray-600 font-semibold border-b-2 border-gray-200 pb-2">
						Request for Pasword Reset
					</h3>
					<form action="" onSubmit={handleSubmit} className="space-y-2 w-full">
						<input
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							id=""
							placeholder="Enter your email address"
							className="w-full"
						/>
						{error.length > 0 && (
							<p className="text-xs md:text-sm pt-1 italic text-red-600">
								{error}
							</p>
						)}
						<PrimaryButton
							disabled={error.length > 0}
							type="submit"
							classes="w-[120px] px-3 py-2"
						>
							Send
						</PrimaryButton>
					</form>

					<div className="flex justify-end">
						<button onClick={handleGoBack} className="text-[#004E7E] underline">
							Back to Home
						</button>
					</div>
				</div>
			)}

			<ToastContainer
				position="bottom-right"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
			/>
		</div>
	);
}

export default ForgetPassword;
