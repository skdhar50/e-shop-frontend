import Input from "Components/Inputs/Input";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const INITIAL_STATE = {
	name: "",
	phone: "",
	phone2: "",
	area: "",
	zone: "",
	city: "",
	fulladdress: "",
};

function CreateNewShippingAddress({ onCloseHandler }) {
	const [values, setValues] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(values);
	};

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
						<Input
							name="name"
							handleChange={handleChange}
							value={values.name}
							placeholder="Name"
						/>

						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<Input
								name="phone"
								handleChange={handleChange}
								value={values.phone}
								placeholder="Phone"
							/>
							<Input
								name="phone2"
								handleChange={handleChange}
								value={values.phone2}
								placeholder="Alternate Phone"
							/>
						</div>
						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<select
								name="city"
								id="city"
								onChange={handleChange}
								value={values.city}
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="" defaultValue disabled>
									Select City
								</option>
								<option value="chittagong">Chittagong</option>
								<option value="dhaka">Dhaka</option>
								<option value="sylet">Sylet</option>
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
								<option value="gec">GEC</option>
								<option value="agrabad">Agrabad</option>
								<option value="new market">New Market</option>
							</select>
						</div>
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
								<option value="zone 1">Zone 1</option>
								<option value="zone 2">Zone 2</option>
							</select>
						</div>
						<div className="">
							<textarea
								name="fulladdress"
								value={values.fulladdress}
								onChange={handleChange}
								placeholder="Write your address here"
								rows="3"
								className="resize-none w-full rounded focus:outline-none focus:border-green-600 focus:ring-0"
							></textarea>
							<p className="text-sm text-red-600">Please enter a name</p>
						</div>
						<div className="">
							<button className="bg-indigo-600 text-white text-lg w-full py-2 rounded hover:bg-opacity-90">
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
