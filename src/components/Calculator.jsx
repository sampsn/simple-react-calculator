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
		"x",
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

	return (
		<div className="calculator bg-zinc-900 p-4 rounded-2xl m-12 shadow-lg shadow-stone-900">
			<div className="display bg-zinc-800 h-10 mb-4 rounded-md flex justify-end items-center p-4 text-xl font-bold">
				{display}
			</div>
			<div className="buttons grid grid-cols-4 gap-2">
				{buttons.map((button, i) => {
					return <Button key={i} label={button} updateDisplay={setDisplay} />;
				})}
			</div>
		</div>
	);
}
