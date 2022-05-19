
function CreateProductQA() {
  return (
		<div className="space-y-4 pt-10">
			<div className="">
				<p className="text-xl md:text-2xl font-[600] text-gray-600">
					Product Q/A
				</p>
			</div>
			<div className="space-y-4">
				<p className="text-gray-600">
					Have a question regarding the product? Ask Us
				</p>
				<form onSubmit={(e) => e.preventDefault()} action="" className="border-2 p-4 space-y-4 rounded-sm">
					<textarea
						name=""
						id=""
						rows="3"
						className="w-full resize-none border-0 border-b border-b-gray-300 outline-none p-1 md:p-2 focus:ring-0 placeholder:text-sm md:placeholder:text-base placeholder:text-slate-400"
						placeholder="Didn't get the right answer you were looking for? Ask us here"
					/>
					<button className="w-full md:w-fit border px-6 py-2 h-fit border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default CreateProductQA