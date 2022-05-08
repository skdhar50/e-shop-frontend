function CategoryCard({ title, image }) {
	return (
		<div className="relative">
			<div className="bg-black bg-opacity-60 bottom-0 absolute w-[160px] md:w-[190px] h-[70px] xl:h-[135px] md:h-[100px] xl:w-[251px] flex justify-center items-center">
				<p className="text-white text-center font-poppins md:text-lg xl:text-2xl">
					{title}
				</p>
			</div>
			<div className="w-[160px] md:w-[190px] xl:w-[251px] ">
				<img
					src={image}
					alt=""
					className="w-full h-[130px] xl:h-[270px] md:h-[170px] object-cover"
				/>
			</div>
		</div>
	);
}

export default CategoryCard;
