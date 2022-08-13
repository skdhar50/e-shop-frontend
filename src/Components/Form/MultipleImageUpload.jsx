function MultipleImageUpload({ handleFiles, handleRemoveFile, files }) {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 w-full md:w-fit space-y-2 md:space-y-0">
			{files && (
				<div className="flex space-x-2 md:space-x-4">
					{files.map((file, index) => (
						<div className="relative" key={index}>
							<img
								src={URL.createObjectURL(file)}
								alt=""
								className="h-[60px] md:h-[80px] w-[60px] md:w-[80px] object-cover"
							/>
							<button
								className="absolute top-1 ring-1 ring-black text-black right-1 drop-shadow-2xl hover:text-red-500 rounded-full bg-gray-200 md:px-1.5 h-fit w-fit text-sm px-1 md:text-base"
								onClick={(e) => handleRemoveFile(e, index)}
							>
								&#10005;
							</button>
						</div>
					))}
				</div>
			)}

			<div
				className={`px-3 text-gray-500 py-2 border border-dashed border-gray-500 text-sm w-full md:w-fit ${
					files.length >= 5 ? "cursor-not-allowed" : "cursor-pointer"
				}`}
			>
				<input
					type="file"
					name="uploadfile"
					onChange={(e) => handleFiles(e.target.files)}
					accept="image/*"
					multiple
					className="hidden"
					id="uploadfile"
					disabled={files.length >= 5}
				/>
				<label
					htmlFor="uploadfile"
					className={`text-center w-full ${
						files.length >= 5 ? "cursor-not-allowed" : "cursor-pointer"
					}`}
				>
					<p className="">Upload Image</p>
					<p className="">{files.length}/5</p>
				</label>
			</div>
		</div>
	);
}

export default MultipleImageUpload;
