function CustomersQA({ customersQA }) {
    const {question, customer, queDate, answer, ansBy, ansDate} = customersQA;

	return (
		<div className="text-sm md:text-base">
				<div className="space-y-4 text-gray-700">
					<p className="space-x-2">
						<span className="font-[600] pr-2">Q:</span> {question}
						<span className="text-gray-400">Questioned by</span>
						<span className="font-[600]">{customer}</span>
						<span className="text-gray-400">on {queDate}</span>
					</p>
					{answer && (
						<p className="md:pl-3 space-x-2">
							<span className="font-[600] pr-2">A:</span> {answer}
							<span className="text-gray-400">Answered by</span>
							<span className="font-[600]">{ansBy}</span>
							<span className="text-gray-400">on {ansDate}</span>
						</p>
					)}
				</div>
		</div>
	);
}

export default CustomersQA;
