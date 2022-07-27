import Input from "Components/Inputs/Input";
import { useEffect, useState } from "react";
import { useCreateShippingAddress } from "Hooks/useShippingAddress";
import { useCityLocationData } from "Hooks/useCityLocations";
import { formValidate } from "Helpers/FormValidator";
import { isAuthenticated } from "utilities/auth.utility";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

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
	fullAddress: "",
};

function CreateNewShippingAddress({ onCloseHandler }) {
	const [values, setValues] = useState(INITIAL_STATE);
	const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
	const { mutate: shippingAddressMutation, isSuccess: shippingAddressSuccess } =
		useCreateShippingAddress();
	const {
		data: locations,
		isLoading: locationLoading,
		isError: locationError,
		isSuccess: locationSuccess,
	} = useCityLocationData(isAuthenticated());

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "phone2") {
			name = "phone";
		}
		setErrors({
			...errors,
			[name]: formValidate(name, value),
		});
		setValues({
			...values,
			[name]: value,
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

	const isDisabled = () => {
		const { name, phone, area, city, zone, fullAddress } = values;
		if (
			name.length === 0 ||
			phone.length === 0 ||
			area.length === 0 ||
			city.length === 0 ||
			fullAddress.length === 0 ||
			errors.name.length > 0 ||
			errors.phone.length > 0 ||
			errors.zone.length > 0 ||
			errors.fullAddress.length > 0 ||
			errors.phone2.length > 0
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

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = "unset");
	}, []);

	return (
		<div className="backdrop z-50 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center fixed ">
			<div className="modal w-full md:w-fit  h-full md:h-fit flex flex-col justify-center bg-white px-6 py-2 relative">
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
				<div className="text-sm text-red-600 italic pb-4">
					Please fill all the required fields.
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
								placeholder="Name (required)"
							/>
							{values?.name?.length > 0 && (
								<p className="text-xs md:text-sm pt-1 italic text-red-600">
									{errors.name.length > 0 && errors.name}
								</p>
							)}
						</div>

						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<div className="">
								<Input
									name="phone"
									handleChange={handleChange}
									value={values.phone}
									placeholder="Phone (required)"
								/>
								{values?.phone?.length > 0 && (
									<p className="text-xs md:text-sm pt-1 italic text-red-600">
										{errors.phone.length > 0 && errors.phone}
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
								{values?.phone2?.length > 0 && (
									<p className="text-xs md:text-sm pt-1 italic text-red-600">
										{errors.phone2.length > 0 && errors.phone2}
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
								<option value="chittagong" defaultValue>
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
									Select Area (required)
								</option>
								{locations?.data.map((location) => (
									<option key={location.name} value={locations.name}>
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
										Select Zone (required)
									</option>
									{hasUpazilla(values.area)?.map((upazilla) => (
										<option key={upazilla} value={upazilla}>
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
								placeholder="Write your address here. (required)"
								rows="3"
								className="resize-none w-full rounded focus:outline-none focus:border-green-600 focus:ring-0"
							></textarea>
							{values.fullAddress.length > 0 && (
								<p className="text-xs md:text-sm pt-1 italic text-red-600">
									{errors.fullAddress.length > 0 && errors.fullAddress}
								</p>
							)}
						</div>
						<div className="">
							<PrimaryButton
								type="button"
								disabled={isDisabled()}
								classes="w-full py-2 rounded"
							>
								Save
							</PrimaryButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateNewShippingAddress;
