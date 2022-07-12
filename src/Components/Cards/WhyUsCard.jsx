function WhyUsCard({ title, image, width }) {
	return (
		<div className="bg-white shadow-lg w-full flex flex-col justify-center items-center space-y-4 border p-6 lg:p-8 rounded border-gray-400 overflow-hidden">
			<img src={image} alt="" className={width} />
			<p className="font-bold text-gray-500 lg:text-lg text-center">{title}</p>
		</div>
	);
}

export default WhyUsCard;
