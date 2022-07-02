export const menuItems = [
	{
		title: "All Categories",
		submenu: [
			{ title: "Home exercise equipment" },
			{
				title: "Electronics",
				submenu: [
					{
						title: "Laptops",
						submenu: [{ title: "Hp" }, { title: "Dell" }, { title: "Lenovo" }],
					},
					{ title: "Phones" },
					{ title: "Tablets" },
					{ title: "TVs" },
					{ title: "Speakers" },
					{ title: "Headphones" },
					{ title: "Cameras" },
				],
			},
			{ title: "Meal boxes and kitchen accessories" },
			{
				title: "Furniture",
				submenu: [
					{ title: "Beds" },
					{ title: "Chairs" },
					{ title: "Tables" },
					{ title: "Sofas" },
					{ title: "Storage" },
					{ title: "Decor" },
				],
			},
			{ title: "Home decor" },
			{ title: "Home improvement" },
			{ title: "Home appliances", submenu: [{ title: "Washing machines" }] },
			{ title: "Home entertainment", submenu: [{ title: "TVs" }] },
		],
	},
	{
		title: "Brands",
		submenu: [
			{ title: "Apple" },
			{ title: "Samsung" },
			{ title: "Xiaomi" },
			{ title: "Oppo" },
			{ title: "Vivo" },
			{ title: "Nokia" },
			{ title: "OnePlus" },
			{ title: "Asus" },
			{ title: "Lenovo" },
			{ title: "HP" },
			{ title: "Dell" },
			{ title: "Acer" },
			{ title: "Toshiba" },
			{ title: "LG" },
			{ title: "Panasonic" },
			{ title: "Sony" },
			{ title: "Philips" },
		],
	},
	{
		title: "Online Exclusive",
	},
	{
		title: "Weekly Offers",
	},
	{
		title: "New Arrivals",
	},
];

// const cat = [
// 	{
// 		id: 1,
// 		name: "Fashion",
// 	},
// 	{
// 		id: 5,
// 		name: "Electronics",
// 	},
// 	{
// 		id: 6,
// 		name: "Phone",
// 		parent: 5
// 	},
// 	{
// 		id: 2,
// 		name: "Men's Collection",
// 		parent: 1,
// 	},
// 	{
// 		id: 3,
// 		name: "T Shirt",
// 		parent: 2,
// 	},
// 	{
// 		id: 4,
// 		name: "Three quarters",
// 		parent: 2,
// 	},
// ];

// let cate = [
// 	// {
// 	// 	title: "Fashion",
// 	// 	submenu: [
// 	// 		{
// 	// 			title: "Men's Collection",
// 	// 			submenu: [
// 	// 				{
// 	// 					title: "T shirt",
// 	// 				},
// 	// 				{ title: "Three quarters" },
// 	// 			],
// 	// 		},
// 	// 	],
// 	// },
// ];

// function bfs() {
// 	let parent = cat.filter((c) => c.parent === undefined);

// 	let queue = [...parent];

// 	while (queue.length > 0) {
// 		let firstParent = queue.shift();

// 		let child = cat.filter((c) => c.parent === firstParent.id);
// 		firstParent.submenu = child;
// 		queue.push(...child);
// 	}

// 	return parent;
// }

// console.log(JSON.stringify(bfs()));

// // function getCat(obj) {
// // 	if (obj.parent) {
// // 		let newObj = cat.filter((c) => c.id === obj.parent);
// // 		// console.log(newObj[0]);
// // 		getCat(newObj[0]);
// // 		// console.log(newObj[0].name);
// // 	}
// // 	// console.log(obj.name);
// // 	return cate.push(obj.name);
// // }

// // getCat(cat[3]);
// // // getCat(cat[1]);
// // // getCat(cat[2]);
// // // console.log(cat[3].name);
// // console.log(cate);
