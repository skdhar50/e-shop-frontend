import {Link} from 'react-router-dom';

function TopBarSmall({ handleLeftNavbar, handleRightNavbar }) {
	return (
		<div className="fixed top-0 w-full z-10 bg-gray-700 h-[70px] flex items-center">
			<div className="flex justify-between items-center w-full px-4">
				<div className="flex items-center space-x-8">
					<button className="" onClick={handleLeftNavbar}>
						<img
							src="/images/icons/TopBarSmall/burger.svg"
							alt=""
							className="w-[35px]"
						/>
					</button>
					<Link to="/">
						<p className="text-2xl font-poppins text-white">PUC Shop</p>
					</Link>
				</div>
				<div className="">
					<button className="" onClick={handleRightNavbar}>
						<img
							src="/images/icons/TopBarSmall/burger.svg"
							alt=""
							className="w-[35px]"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default TopBarSmall;
