import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { openLoginModal } from "Jotai/ModalState";

function TopBarLarge() {
	const [, isOpenLoginModal] = useAtom(openLoginModal);

	const links = {
		left: [
			{
				title: "Track Order",
				url: "/order-details",
				icon: "/images/icons/track.svg",
			},
			{ title: "Services", url: "/", icon: "/images/icons/service.svg" },
			{ title: "Help", url: "/", icon: "/images/icons/help.svg" },
			{ title: "Our Location", url: "/", icon: "/images/icons/location.svg" },
		],
		right: [
			{ title: "Bangladesh", url: "/", icon: "/images/icons/flag.svg" },
			{ title: "English", url: "/", icon: "/images/icons/language.svg" },
		],
	};

	return (
		<div className="w-full h-[35px] bg-gray-200 bg-opacity-50 flex items-center justify-center">
			<div className="xl:container">
				<div className="flex justify-between space-x-8">
					<ul className="flex md:space-x-3 xl:space-x-9">
						<button onClick={isOpenLoginModal} className="">
							<li className="flex space-x-2 cursor-pointer">
								<img
									src="/images/icons/login.svg"
									alt=""
									className="md:w-4 xl:w-6"
								/>
								<p className="md:text-sm xl:text-base">Login/Register</p>
							</li>
						</button>
						{links.left.map((link, index) => (
							<Link to={link.url} key={index}>
								<li className="flex space-x-2 cursor-pointer">
									<img src={link.icon} alt="" className="md:w-4 xl:w-6" />
									<p className="md:text-sm xl:text-base">{link.title}</p>
								</li>
							</Link>
						))}
					</ul>
					<ul className="flex md:space-x-3 xl:space-x-9">
						{links.right.map((link, index) => (
							<li className="flex space-x-2 cursor-pointer" key={index + 5}>
								<img src={link.icon} alt="" className="md:w-4 xl:w-6" />
								<p className="md:text-sm xl:text-base">{link.title}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TopBarLarge;
