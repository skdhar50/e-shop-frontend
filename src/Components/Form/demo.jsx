import { useEffect, useState } from "react";

function Demo() {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	useEffect(() => {
        console.log("useEffect");
	}, [numbers])

	const handleRemove = (index) => {
		const newNumbers = [...numbers];
		newNumbers.splice(index, 1);
		setNumbers(newNumbers);
	};

	return (
		<div className="container flex justify-center items-center h-screen">
			<div className="flex space-x-12">
				{numbers.map((number, i) => (
					<button className="curser-pointer" onClick={() => handleRemove(i)}>
						{number}
					</button>
				))}
			</div>
		</div>
	);
}

export default Demo;
