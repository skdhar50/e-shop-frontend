import Input from 'Components/Inputs/Input';
import React from 'react'

function CreateNewShippingAddress({onCloseHandler}) {
  return (
		<div className="backdrop z-50 top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 flex justify-center items-center fixed">
			<div className="modal h-full md:h-fit flex flex-col justify-center bg-white px-6 py-8 space-y-6 relative">
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
					<form action="" className="space-y-4">
						<Input name="name" placeholder="Name" />

						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<Input name="phone" placeholder="Phone" />
							<Input name="phone2" placeholder="Alternate Phone" />
						</div>
						<div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
							<select
								name=""
								id=""
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="">Select City</option>
								<option value="">Chittagong</option>
								<option value="">Dhaka</option>
								<option value="">Sylet</option>
							</select>
							<select
								name=""
								id=""
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="">Select Area</option>
								<option value="">GEC</option>
								<option value="">Agrabad</option>
								<option value="">New Market</option>
							</select>
						</div>
						<div className="">
							<select
								name=""
								id=""
								className="w-full rounded focus:outline-none focus:border-green-600 focus:ring-0 text-gray-600 cursor-pointer"
							>
								<option value="">Select Zone</option>
								<option value="">Zone 1</option>
								<option value="">Zone 2</option>
							</select>
						</div>
						<div className="">
							<textarea
								name=""
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

export default CreateNewShippingAddress