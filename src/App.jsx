import "./App.css";
import Calculator from "./components/Calculator";

export default function App() {
	return (
		<>
			<header>
				<h1 className="font-sans font-bold drop-shadow-lg">
					Simple Calculator
				</h1>
				<p>by sampsn</p>
			</header>
			<Calculator />
		</>
	);
}
