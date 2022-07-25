import ChangePassword from "Components/User/ChangePassword";
import PersonalInfo from "Components/User/PersonalInfo";
import { useProfileData } from "Hooks/useUser";
import { isAuthenticated } from "utilities/auth.utility";

// const INITIAL_PersonalInfo_STATE = {
// 	name: "",
// 	email: "",
// 	phone: "",
// 	gender: "",
// 	date: "",
// };

// const INITIAL_Password_STATE = {
// 	currentPassword: "",
// 	newPassword: "",
// 	confirmPassword: "",
// };

function MyAccount() {
	// const [personalInfo, setPersonalInfo] = useState(INITIAL_PersonalInfo_STATE);
	// const [password, setPassword] = useState(INITIAL_Password_STATE);
	const {
		data: profileData,
		isLoading,
		isSuccess,
	} = useProfileData(isAuthenticated());

	let profile = {};

	if (isSuccess) {
		profile.name = profileData?.data?.user.name;
		profile.email = profileData?.data?.user.email;
		profile.gender = profileData?.data?.gender;
		profile.phone = profileData?.data?.phone;
		profile.birthdate = profileData?.data?.birthdate;
		profile.photo = profileData?.data?.photo;

		// console.log(profile);
	}

	// const handlePersonalInfoChange = (e) => {
	// 	setPersonalInfo({
	// 		...personalInfo,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// const handlePasswordChange = (e) => {
	// 	setPassword({
	// 		...password,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// const handlePersonalInfoSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(personalInfo);
	// 	setPersonalInfo(INITIAL_PersonalInfo_STATE);
	// };

	// const handlePasswordSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(password);
	// 	setPassword(INITIAL_Password_STATE);
	// };
	if(isLoading) {
		return <div className="text-lg text-gray-600">Loading</div>
	}

	return (
		<div className="border-2 drop-shadow-sm bg-white py-4 px-1 md:p-6 space-y-8 w-full xl:flex-grow">
			<div className="border-b-2 pb-4">
				<p className="text-2xl">My Profile</p>
			</div>

			<div className="space-y-4">
				<div className="border space-y-6 py-4 px-2">
					<p className="text-xl text-gray-600">Personal Information</p>
					<PersonalInfo profile={profile} />
				</div>

				<div className="border space-y-6 py-4 px-2">
					<p className="text-xl text-gray-600">Password</p>
					<ChangePassword />
				</div>
			</div>
		</div>
	);
}

export default MyAccount;
