import { useState } from "react";
import { useCreateQuestion } from "Hooks/useQuestions";
import PrimaryButton from "Components/Common/Buttons/PrimaryButton";

function CreateProductQA({ productId }) {
	const [question, setQuestion] = useState("");
	const { mutate } = useCreateQuestion(productId);

	const handleChange = (e) => {
		setQuestion(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		mutate({ question: question, id: productId });
		setQuestion("");
	};

	return (
		<div className="space-y-4 pt-10">
			<div className="">
				<p className="text-xl md:text-2xl font-[600] text-gray-600">
					Product Q/A
				</p>
			</div>
			<div className="space-y-4">
				<p className="text-gray-600 pl-1 text-sm sm:text-base">
					Have a question regarding the product? Ask Us
				</p>
				<form
					onSubmit={handleSubmit}
					action=""
					className="border-2 p-4 space-y-4 rounded-sm"
				>
					<textarea
						rows="3"
						value={question}
						onChange={handleChange}
						className="w-full resize-none border-0 border-b border-b-gray-300 outline-none p-1 md:p-2 focus:ring-0 placeholder:text-sm md:placeholder:text-base placeholder:text-slate-400"
						placeholder="Didn't get the right answer you were looking for? Ask us here"
					/>
					
					<PrimaryButton
						type="submit"
						classes="w-full md:w-fit px-6 py-2 h-fit"
						disabled={question.length === 0}
					>
						Submit
					</PrimaryButton>
				</form>
			</div>
		</div>
	);
}

export default CreateProductQA;
