import { format } from "date-fns";

function CustomersQA({ customersQA }) {
	const { question, user, createdAt, answer, answeredAt } = customersQA;

	return (
		<div className="text-sm md:text-base">
			<div className="space-y-4 text-gray-700">
				<p className="space-x-2">
					<span className="font-[600] pr-2">Q:</span> {question}
					<span className="text-gray-400">Questioned by</span>
					<span className="font-[600]">{user.name}</span>
					<span className="text-gray-400">
						on {format(new Date(createdAt), "PP")}
					</span>
				</p>
				{answer && (
					<p className="md:pl-3 space-x-2">
						<span className="font-[600] pr-2">A:</span> {answer}
						<span className="text-gray-400">Answered by</span>
						<span className="font-[600]">Admin</span>
						<span className="text-gray-400">
							on {format(new Date(answeredAt), "PP")}
						</span>
					</p>
				)}
			</div>
		</div>
	);
}

export default CustomersQA;
