function Register() {
	return (
		<div className="backdrop h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
			<div className="modal flex bg-white md:space-x-10 py-8 w-full h-full md:h-fit md:w-fit md:px-12 justify-center items-center">
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
								className="flex flex-col space-y-8 justify-center items-center"
							>
								<input
									type="email"
									name=""
									placeholder="Email or Phone"
									className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
								/>
								<input
									type="password"
									name=""
									placeholder="Password"
									className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
								/>
								<input
									type="password"
									name=""
									placeholder="Confirm Password"
									className="rounded-md w-full focus:outline-none focus:border-green-600 focus:ring-0"
								/>

								<button className="bg-[#1778CD] hover:bg-[#045195] text-white w-3/4 md:w-fit px-10 py-2 rounded-xl">
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
								<p className="">Sign up with Google</p>
							</button>
							<p className="text-gray-500">
								Already have an account?{" "}
								<a href="#login" className="text-green-600">
									Sign in
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;