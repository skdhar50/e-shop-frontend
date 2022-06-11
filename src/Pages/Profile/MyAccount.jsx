function MyAccount() {
	return (
		<div className="border-2 drop-shadow-sm p-4 md:p-6 space-y-8 w-full xl:flex-grow">
			<div className="">
				<p className="text-2xl">My Profile</p>
			</div>

			<div className="space-y-4">
				<div className="border space-y-6 p-4">
					<p className="text-xl text-gray-600">Personal Information</p>
					<div className="relative flex justify-center">
						<div className="group cursor-pointer">
							<img
								src="/images/users/user-1.JPG"
								alt=""
								className="rounded-full w-[120px] h-[120px] object-contain"
							/>
							<div className="hidden group-hover:block bg-black bg-opacity-40 w-[120px] transition-all duration-300 h-[120px] rounded-full absolute bottom-0">
								<div className="flex justify-center items-center h-full">
									<button className="">
										<svg
											width="32"
											height="32"
											className="stroke-white fill-white"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M25 4.03103C24.234 4.03103 23.484 4.32803 22.906 4.90603L13 14.781L12.781 15L12.719 15.313L12.031 18.813L11.719 20.281L13.188 19.969L16.688 19.281L17 19.219L17.219 19L27.094 9.09403C27.5079 8.67909 27.7897 8.15091 27.9038 7.57607C28.0179 7.00122 27.9593 6.40546 27.7354 5.86387C27.5114 5.32228 27.1322 4.85912 26.6454 4.53277C26.1586 4.20641 25.5861 4.03149 25 4.03003V4.03103ZM25 5.96903C25.234 5.96903 25.465 6.08903 25.688 6.31203C26.133 6.75803 26.133 7.24203 25.688 7.68703L16 17.376L14.281 17.72L14.625 16.001L24.313 6.31303C24.535 6.09103 24.766 5.97003 25 5.97003V5.96903ZM4 8.00003V28H24V14.812L22 16.812V26H6V10H15.188L17.188 8.00003H4Z" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<form action="" className="space-y-6">
						<div className="grid sm:grid-cols-2 gap-4">
							<input type="text" name="" placeholder="Name" className="" />
							<input type="text" name="" placeholder="Email" className="" />
							<input type="text" name="" placeholder="Phone" className="" />
							<select name="" id="" className="cursor-pointer">
								<option value="">Select Gender</option>
								<option value="">Male</option>
								<option value="">Female</option>
							</select>
							<input type="date" name="" id="" className="cursor-pointer" />
						</div>
						<button className="bg-green-600 w-full sm:w-1/4 py-2 text-white">Save</button>
					</form>
				</div>

				<div className="border space-y-6 p-4">
					<p className="text-xl text-gray-600">Password</p>
					<form action="" className="flex flex-col space-y-4">
						<input
							type="password"
							name=""
							id=""
							className="sm:w-1/2"
							placeholder="Current password"
						/>
						<input
							type="password"
							name=""
							id=""
							className="sm:w-1/2"
							placeholder="New password"
						/>
						<input
							type="password"
							name=""
							id=""
							className="sm:w-1/2"
							placeholder="Confirm password"
						/>
						<button className="bg-green-600 w-full sm:w-1/4 py-2 text-white">Save</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default MyAccount;
