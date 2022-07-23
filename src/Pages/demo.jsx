import React from 'react'

function demo() {
  return (
		<div class="backdrop bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center px-4 fixed">
			<div class="modal-container bg-white w-full sm:w-2/3 md:w-3/6 xl:w-2/6 h-fit rounded-md shadow-xl py-6">
				<div class="modal-head flex justify-center items-center">
					<div class="modal-head--icon rounded-full bg-green-600 px-6 py-6 text-white bg-opacity-80">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-12 w-12 md:h-20 md:w-20"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
				</div>
				<div class="modal-body text-center pt-4">
					<p class="modal-body--title text-xl lg:text-2xl text-gray-700 font-mono">
						Payment is Successfull!
					</p>
					<p class="modal-body--subtitle pt-2 text-gray-600 italic text-base lg:text-lg">
						Redirecting to Home Page...
					</p>
				</div>
			</div>
		</div>
	);
}

export default demo