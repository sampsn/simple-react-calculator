import { evaluate } from "mathjs";

export default function Button({ label, updateDisplay }) {
	const addNumbers = () => {
		updateDisplay((prev) => {
			if (label === "Clear") {
				return "";
			} else if (label === "=") {
				const previous = prev;
				if (prev.includes("=")) {
					return prev;
				} else {
					const answer = Intl.NumberFormat("en-US").format(evaluate(prev));
					return `${previous} = ${answer}`;
				}
			} else if (prev.includes("=")) {
				return prev;
			} else {
				return prev + label;
			}
		});
	};

	let classes = "";

	switch (label) {
		case "/":
		case "*":
		case "-":
		case "+":
		case "=":
			classes = "bg-zinc-800 btn hover:bg-zinc-800 hover:opacity-70";
			break;
		case "Clear":
			classes = "bg-orange-500 text-white btn col-span-4 hover:bg-orange-700";
			break;
		default:
			classes = "bg-zinc-700 btn hover:bg-zinc-800";
			break;
	}

	return (
		<button type="button" onClick={addNumbers} className={classes}>
			{label}
		</button>
	);
}
