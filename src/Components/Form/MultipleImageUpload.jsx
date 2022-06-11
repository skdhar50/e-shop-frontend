import { useState } from "react";

function MultipleImageUpload() {
	const [files, setFiles] = useState([]);
	// const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

	// useEffect(() => {
	// 	if (files && files.length > 0) {
	// 		// a new object URL is created, even if you've already created one for the same object.
	// 		// setImagePreviewUrls(files.map((file) => URL.createObjectURL(file)));
	// 		// console.log(imagePreviewUrls);
	// 	}
	// 	return () => {
	// 		// if you want to clean up after yourself, you can easily do so by calling URL.revokeObjectURL on the object URL you created in the useEffect cleanup function.
	// 		// files.forEach((file) => URL.revokeObjectURL(file));
	// 	};
	// }, [files]);

	const handleUpload = (e) => {
		// console.log(e.target.files[0].name);
		setFiles([...files, ...e.target.files]);
		// setImagePreviewUrls(files.map((file) => URL.createObjectURL(file)));
		// console.log(typeof files);
	};

	// console.log(typeof files);

	const handleRemove = (index) => {
		const newFiles = [...files];
		newFiles.splice(index, 1);
		setFiles(newFiles);
	};

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
								key={index}
							/>
							<button
								className="absolute top-1 ring-1 ring-black text-black right-1 drop-shadow-2xl hover:text-red-500 rounded-full bg-gray-200 md:px-1.5 h-fit w-fit text-sm px-1 md:text-base"
								onClick={() => handleRemove(index)}
								key={index}
							>
								&#10005;
							</button>
						</div>
					))}
				</div>
			)}
			
			<div
				className={
					"px-3 text-gray-500 py-2 border border-dashed border-gray-500 text-sm w-full md:w-fit" +
					(files.length >= 5 ? " cursor-not-allowed" : " cursor-pointer")
				}
			>
				<input
					type="file"
					name="uploadfile"
					onChange={handleUpload}
					accept="image/*"
					multiple
					className="hidden"
					id="uploadfile"
					disabled={files.length >= 5}
				/>
				<label
					htmlFor="uploadfile"
					className={
						"text-center w-full" +
						(files.length >= 5 ? " cursor-not-allowed" : " cursor-pointer")
					}
				>
					<p className="">Upload Image</p>
					<p className="">{files.length}/5</p>
				</label>
			</div>
		</div>
	);
}

export default MultipleImageUpload;
