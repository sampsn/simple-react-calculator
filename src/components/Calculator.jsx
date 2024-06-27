import { useState } from "react";
import Button from "./Button";

export default function Calculator() {
	const [display, setDisplay] = useState("");

	const buttons = [
		"7",
		"8",
		"9",
		"/",
		"4",
		"5",
		"6",
		"*",
		"1",
		"2",
		"3",
		"-",
		"0",
		".",
		"=",
		"+",
		"Clear",
	];

	const beforeEquals = () => {
		if (display.includes("=")) {
			const prev = display.split("=")[0];
			return `${prev} =`;
		} else {
		}
	};

	const afterEquals = () => {
		if (display.includes("=")) {
			const answer = display.split("=")[1];
			return answer;
		} else {
			return display;
		}
	};

	return (
		<div className="calculator bg-zinc-900 p-4 rounded-2xl m-12 shadow-lg shadow-stone-900">
			<div className="display bg-zinc-800 h-10 mb-4 rounded-md flex justify-end items-center p-4 text-xl font-bold">
				<p className="font-normal text-base text-stone-500">{beforeEquals()}</p>
				<p className="ml-1">{afterEquals()}</p>
			</div>
			<div className="buttons grid grid-cols-4 gap-2">
				{buttons.map((button, i) => {
					return <Button key={i} label={button} updateDisplay={setDisplay} />;
				})}
			</div>
		</div>
	);
}
