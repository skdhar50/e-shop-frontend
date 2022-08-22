export const formValidate = (title, value) => {
	switch (title) {
		case "name":
			const nameRegux = /^[a-zA-Z ]+$/;
			if (!nameRegux.test(value)) {
				return "Please enter a valid name (with only alphabetes)";
			} else if (value.length < 3) {
				return "Name must be at least 3 characters long";
			} else {
				return "";
			}
		case "email":
			const emailRegux =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			if (!emailRegux.test(value)) {
				return "Please enter a valid email address";
			} else {
				return "";
			}
		case "password":
			if (value.length < 6) {
				return "Password must be at least 6 characters long";
			} else {
				return "";
			}
		case "confirm_password":
			if (value.password !== value.confirm_password) {
				return "Password not matched.";
			} else {
				return "";
			}
		case "phone":
			const phoneRegux = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;

			if (!phoneRegux.test(value)) {
				return "Please enter a valid phone number.";
			} else {
				return "";
			}
		case "fullAddress":
			if (value.length < 5) {
				return "Address must be at least 5 characters long";
			} else {
				return "";
			}
		default:
			return;
	}
};

// not working
export const isDisableSubmission = (errorState, dataState) => {
	Object.keys(errorState).forEach((error) => {
		if (errorState[error].length > 0) {
			console.log(errorState[error].length);
			return true;
		}
	});
	Object.keys(dataState).forEach((data) => {
		if (dataState[data].length === 0) {
			return true;
		}
	});

	return false;
};
