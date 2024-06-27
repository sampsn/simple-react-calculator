export default function Button({ label, updateDisplay }) {
	const addNumbers = () => {
		updateDisplay((prev) => {
			if (label === "Clear") {
				return "";
			} else if (label === "=") {
				return prev;
			} else {
				return prev + label;
			}
		});
	};

	let classes = "";

	switch (label) {
		case "/":
		case "x":
		case "-":
		case "+":
		case "=":
			classes = "bg-zinc-800 btn";
			break;
		case "Clear":
			classes = "bg-orange-500 text-white btn col-span-4";
			break;
		default:
			classes = "bg-zinc-700 btn";
			break;
	}

	return (
		<button type="button" onClick={addNumbers} className={classes}>
			{label}
		</button>
	);
}
