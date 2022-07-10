import Input from "Components/Inputs/Input";
import { useEffect, useState } from "react";
import { useCreateShippingAddress } from "Hooks/useShippingAddress";
import { useCityLocationData } from "Hooks/useCityLocations";
import { isAuthenticated } from "utilities/auth.utility";

const INITIAL_STATE = {
	name: "",
	phone: "",
	phone2: "",
	area: "",
	zone: "",
	city: "chittagong",
	fullAddress: "",
};

const INITIAL_ERROR_STATE = {
	name: "",
	phone: "",
	phone2: "",
	area: "",
	zone: "",
	fulladdress: "",
};

function CreateNewShippingAddress({ onCloseHandler }) {
	const [values, setValues] = useState(INITIAL_STATE);
	const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
	const { mutate: shippingAddressMutation, isSuccess : shippingAddressSuccess } =
		useCreateShippingAddress();
	const {
		data: locations,
		isLoading: locationLoading,
		isError: locationError,
		isSuccess: locationSuccess,
	} = useCityLocationData(isAuthenticated());

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isDisabled()) {
			return;
		}

		console.log(values);
		shippingAddressMutation(values);
		setValues(INITIAL_STATE);
		onCloseHandler();
	};

	// if (shippingAddressSuccess) {
	// }

	const hasUpazilla = (name) => {
		const upazilla = locations?.data.find((location) => location.name === name);

		return upazilla?.upazilla;
	};

	const validateFileds = (value, title) => {
		if (title === "name") {
			const nameRegux = /^[a-zA-Z]+$/;

			if (!nameRegux.test(value)) {
				return "Please enter a valid name (with only alphabetes)";
			} else if (value.length < 3) {
				return "Name must be at least 3 characters long";
			} else {
				return "";
			}
		} else if (title === "phone" || title === "phone2") {
			const phoneRegux = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;

			if (!phoneRegux.test(value)) {
				return "Please enter a valid phone number.";
			} else {
				return "";
			}
		} else if (title === "fulladdress") {
			if (value.length < 5) {
				return "Address must be at least 5 characters long";
			} else {
				return "";
			}
		}
	};

	// console.log(errors);

	const isDisabled = () => {
		const { name, phone, area, city, zone, fullAddress } = values;
		if (
			name.length === 0 ||
			phone.length === 0 ||
			area.length === 0 ||
			city.length === 0 ||
			fullAddress.length === 0
		) {
			return true;
		} else {
			const upazilla = hasUpazilla(area);
			if (upazilla.length > 0 && zone.length === 0) {
				return true;
			}
		}

		return false;
	};

	// console.log(values)

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "unset");
	}, []);

	return (
		<div className="backdrop z-50 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center fixed ">
			<div className="modal w-full md:w-fit  h-full md:h-fit flex flex-col justify-center bg-white px-6 py-8 space-y-6 relative">
				<div className="modal-header">
					<h3 className="text-xl text-gray-700">Create New Shipping</h3>
					<button onClick={onCloseHandler}>
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
				</div>
				<div className="modal-body">
					<form
						action="POST"
						onSubmit={handleSubmit}
						encType="multipart/form-data"
						className="space-y-4"
					>
						<div className="">
							<Input
								name="name"
								handleChange={handleChange}
								value={values.name}
								placeholder="Name"
							/>
							{values.name.length > 0 && (
								<p className="text-sm text-red-600">
									{validateFileds(values.name, "name")}
								</p>
							)}
						</div>

						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<div className="">
								<Input
									name="phone"
									handleChange={handleChange}
									value={values.phone}
									placeholder="Phone"
								/>
								{values.phone.length > 0 && (
									<p className="text-sm text-red-600">
										{validateFileds(values.phone, "phone")}
									</p>
								)}
							</div>
							<div className="">
								<Input
									name="phone2"
									handleChange={handleChange}
									value={values.phone2}
									placeholder="Alternate Phone"
								/>
								{values.phone2.length > 0 && (
									<p className="text-sm text-red-600">
										{validateFileds(values.phone2, "phone2")}
									</p>
								)}
							</div>
						</div>
						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<select
								name="city"
								id="city"
								// onChange={handleChange}
								// value={values.city}
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="chittagong" selected>
									Chittagong
								</option>
							</select>
							<select
								name="area"
								id="area"
								onChange={handleChange}
								value={values.area}
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="" defaultValue disabled>
									Select Area
								</option>
								{locations?.data.map((location) => (
									<option value={locations.name}>
										{location.name.charAt(0).toUpperCase() +
											location.name.slice(1)}
									</option>
								))}
							</select>
						</div>
						{values.area.length > 0 && hasUpazilla(values.area).length > 0 && (
							<div className="">
								<select
									name="zone"
									id="zone"
									onChange={handleChange}
									value={values.zone}
									className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
								>
									<option value="" defaultValue disabled>
										Select Zone
									</option>
									{hasUpazilla(values.area)?.map((upazilla) => (
										<option value={upazilla}>
											{upazilla.charAt(0).toUpperCase() + upazilla.slice(1)}
										</option>
									))}
								</select>
							</div>
						)}
						<div className="">
							<textarea
								name="fullAddress"
								value={values.fullAddress}
								onChange={handleChange}
								placeholder="Write your address here"
								rows="3"
								className="resize-none w-full rounded focus:outline-none focus:border-green-600 focus:ring-0"
							></textarea>
							{values.fullAddress.length > 0 && (
								<p className="text-sm text-red-600">
									{validateFileds(values.fullAddress, "fulladdress")}
								</p>
							)}
						</div>
						<div className="">
							<button
								disabled={isDisabled()}
								className="bg-indigo-600 text-white text-lg w-full py-2 rounded hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateNewShippingAddress;
