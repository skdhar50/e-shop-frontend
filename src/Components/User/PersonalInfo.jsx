import { useRef, useState } from "react";
import { formValidate } from "Helpers/FormValidator";
import { useUpdateProfile } from "Hooks/useUser";
import { PROFILE_URL } from "utilities/config.utility";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

// const INITIAL_PersonalInfo_STATE = {
// 	name: "",
// 	email: "",
// 	phone: "",
// 	gender: "",
// 	birthdate: "",
// };

const INITIAL_ERROR_STATE = {
	name: "",
	email: "",
	phone: "",
	gender: "",
	birthdate: "",
};

function PersonalInfo({ profile }) {
	const [personalInfo, setPersonalInfo] = useState({
		name: profile?.name === undefined ? "" : profile?.name,
		email: profile?.email === undefined ? "" : profile?.email,
		phone: profile?.phone === undefined ? "" : profile?.phone,
		gender: profile?.gender === undefined ? "" : profile?.gender,
		birthdate:
			profile?.birthdate === undefined ? "" : new Date(profile?.birthdate),
	});
	const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
	const [files, setFiles] = useState([]);
	const form = useRef(null);
	const { mutate: updateMutation } = useUpdateProfile();
	// const {
	// 	data: profileData,
	// 	isLoading,
	// 	isError,
	// 	isSuccess,
	// } = useProfileData(isAuthenticated());

	// if (isSuccess) {
	// 	// console.log(profileData.data);
	// 	setPersonalInfo({
	// 		...personalInfo,
	// 		name: profileData?.data.user.name,
	// 		email: profileData?.data.user.email,
	// 		gender: profileData?.data.gender,
	// 		phone: profileData?.data.phone,
	// 		birthdate: profileData?.data.birthdate,
	// 	});
	// }

	const handlePersonalInfoChange = (e) => {
		if (e.target.name !== "photo") {
			setErrors({
				...errors,
				[e.target.name]: formValidate(e.target.name, e.target.value),
			});
			if (e.target.name === "birthdate") {
				setPersonalInfo({
					...personalInfo,
					[e.target.name]: new Date(e.target.value),
				});
			} else {
				setPersonalInfo({
					...personalInfo,
					[e.target.name]: e.target.value,
				});
			}
		} else {
			setFiles([...e.target.files]);
		}
	};

	const handlePersonalInfoSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData(form.current);

		updateMutation(formData);
		// setPersonalInfo(INITIAL_PersonalInfo_STATE);
	};

	const isValidToProced = () => {
		if (
			errors.name.length > 0 ||
			errors.email.length > 0 ||
			errors.phone.length > 0
		) {
			return false;
		} else if (
			personalInfo.name?.length === 0 &&
			personalInfo.email?.length === 0 &&
			personalInfo.phone?.length === 0 &&
			personalInfo.gender?.length === 0
		) {
			return false;
		}
		return true;
	};

	// console.log(personalInfo);

	return (
		<>
			<form
				action=""
				ref={form}
				onSubmit={handlePersonalInfoSubmit}
				encType="multipart/form-data"
				className="space-y-4"
			>
				<div className="relative flex justify-center">
					<div className="group cursor-pointer">
						<img
							src={
								files?.length !== 0
									? URL.createObjectURL(files[0])
									: `${PROFILE_URL}/${profile.photo}`
							}
							alt=""
							className="rounded-full w-[120px] h-[120px] object-contain"
						/>
						<div className="hidden group-hover:block bg-black bg-opacity-40 w-[120px] transition-all duration-300 h-[120px] rounded-full absolute bottom-0">
							<div className="flex justify-center items-center h-full">
								<input
									type="file"
									value={personalInfo.photo}
									onChange={handlePersonalInfoChange}
									accept="image/*"
									name="photo"
									id="photo"
									className="hidden"
								/>
								<label htmlFor="photo" className="cursor-pointer">
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
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-6">
					<div className="grid sm:grid-cols-2 gap-4 w-full">
						<div className="w-full">
							<input
								type="text"
								name="name"
								value={personalInfo.name}
								onChange={handlePersonalInfoChange}
								placeholder="Name"
								className="w-full"
							/>
							{personalInfo?.name?.length > 0 && (
								<p className="text-sm text-red-600">
									{errors.name.length > 0 && errors.name}
								</p>
							)}
						</div>
						<div className="">
							<input
								type="text"
								name="email"
								id="email"
								value={personalInfo.email}
								onChange={handlePersonalInfoChange}
								placeholder="Email"
								className="w-full"
							/>
							{personalInfo?.email?.length > 0 && (
								<p className="text-sm text-red-600">
									{errors.email.length > 0 && errors.email}
								</p>
							)}
						</div>
						<div className="">
							<input
								type="text"
								name="phone"
								id="phone"
								value={personalInfo.phone}
								onChange={handlePersonalInfoChange}
								placeholder="Phone"
								className="w-full"
							/>
							{personalInfo?.phone?.length > 0 && (
								<p className="text-sm text-red-600">
									{errors.phone.length > 0 && errors.phone}
								</p>
							)}
						</div>
						<div className="">
							<select
								name="gender"
								value={personalInfo.gender}
								id="gender"
								onChange={handlePersonalInfoChange}
								className="cursor-pointer w-full"
							>
								<option value="" defaultValue disabled>
									Select Gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
						<div className="">
							<input
								type="date"
								name="birthdate"
								id="birthdate"
								value={
									personalInfo.birthdate === ""
										? personalInfo.birthdate
										: personalInfo.birthdate.toLocaleDateString("en-CA")
								}
								onChange={handlePersonalInfoChange}
								className="cursor-pointer w-full"
							/>
						</div>
					</div>
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
				</div>
			</form>
		</>
	);
}

export default PersonalInfo;
