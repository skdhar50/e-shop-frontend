function WhyUsCard({ title, image, description }) {
	return (
		<div className="w-[251px] h-[270px] p-4 border-2 shadow-xl border-[#1778CD] rounded-md flex flex-col justify-center items-center space-y-4">
			<img src={image} alt="" className="md:w-[60px] xl:w-[70px]" />
			<p className="heading text-[#353535] font-poppins md:text-[20px] xl:text-[24px]">{title}</p>
			<p className="description text-center text-[#5C5C5C] md:text-sm xl:text-base">{description}</p>
		</div>
	);
}

export default WhyUsCard;
